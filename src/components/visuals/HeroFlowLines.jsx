import { useEffect, useRef } from "react";
import styles from "./HeroFlowLines.module.css"; 


// Kleine Hilfsfunktion, um Hex-Farben (z.B. "#e5d9b6") in "R, G, B" für rgba() umzuwandeln
const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result 
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` 
    : '229, 217, 182'; // Fallback auf deine Originalfarbe
};

const HeroFlowLines = ({ color = "#e5d9b6", direction = "right" }) => {
  const canvasRef = useRef(null);
  const gradiant = direction === "right" ? styles.lpGradientXright : styles.lpGradientXleft

  console.log(gradiant)
  
 

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let time = 0;
    let animationFrameId;
    let width = 0;
    let height = 0;

    // Farb-String und Richtungs-Multiplikator vorbereiten
    const colorRGB = hexToRgb(color);
    // +1 bewegt die Wellen nach links, -1 bewegt sie nach rechts
    const dirMultiplier = direction === "right" ? 1 : -1;

    const resize = () => {
        if(!canvas.parentElement) return;
        width = canvas.parentElement.offsetWidth;
        height = canvas.parentElement.offsetHeight;
        
        // High DPI support
        const dpr = window.devicePixelRatio || 1;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', resize);
    resize();

    // Helper to draw a smooth wave line
    const drawWave = (yOffsetRatio, frequency, amplitude, speed, opacity, thickness) => {
        ctx.beginPath();
        
        // Gradient for premium look (Fade edges) - Nutzt jetzt die übergebene Farbe
        const gradient = ctx.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop(0, `rgba(${colorRGB}, 0)`);
        gradient.addColorStop(0.2, `rgba(${colorRGB}, ${opacity * 0.5})`);
        gradient.addColorStop(0.5, `rgba(${colorRGB}, ${opacity})`);
        gradient.addColorStop(0.8, `rgba(${colorRGB}, ${opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(${colorRGB}, 0)`);
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = thickness;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        const yBase = height * yOffsetRatio;
        
        // Draw points
        let first = true;
        for(let x = 0; x <= width; x += 5) {
            // Complex wave function for organic feel (combining sine/cosine)
            // Hier wird dirMultiplier angewendet, um die Richtung zu steuern
            const y = yBase + 
                      Math.sin(x * frequency + (time * speed * dirMultiplier)) * amplitude + 
                      Math.cos(x * (frequency * 0.5) + (time * (speed * 0.8) * dirMultiplier)) * (amplitude * 0.5);
            
            if (first) {
                ctx.moveTo(x, y);
                first = false;
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.stroke();
    };

    const animate = () => {
        time += 0.008; // Control global speed
        ctx.clearRect(0, 0, width, height);
        
        // Draw multiple overlapping lines for the "strand" effect
        // 1. The Main Line
        drawWave(0.55, 0.0015, 80, 1.0, 0.6, 2.5);
        
        // 2. Secondary Echo 
        drawWave(0.55, 0.0015, 90, 1.2, 0.3, 1);
        
        // 3. Deep Background Wave
        drawWave(0.55, 0.0008, 140, 0.5, 0.15, 4);

        animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
        window.removeEventListener('resize', resize);
        cancelAnimationFrame(animationFrameId);
    };
  }, [color, direction]); // WICHTIG: useEffect muss neu laden, wenn sich Farbe oder Richtung ändern

  return (
    <div className={styles.lpHeroBg}>
        <canvas ref={canvasRef} className={styles.canvas} style={{ mixBlendMode: 'screen' }} />
        <div className={gradiant} />
        <div className={styles.lpGradientY} />
    </div>
);

};

export default HeroFlowLines;