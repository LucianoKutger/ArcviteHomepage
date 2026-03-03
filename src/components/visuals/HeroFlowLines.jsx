import {useEffect, useRef} from "react";
import styles from "./HeroFlowLines.module.css"; 


const HeroFlowLines = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let time = 0;
    let animationFrameId;
    let width = 0;
    let height = 0;

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
        
        // Gradient for premium look (Fade edges)
        const gradient = ctx.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop(0, `rgba(229, 217, 182, 0)`);
        gradient.addColorStop(0.2, `rgba(229, 217, 182, ${opacity * 0.5})`);
        gradient.addColorStop(0.5, `rgba(229, 217, 182, ${opacity})`);
        gradient.addColorStop(0.8, `rgba(229, 217, 182, ${opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(229, 217, 182, 0)`);
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = thickness;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        const yBase = height * yOffsetRatio;
        
        // Draw points
        let first = true;
        for(let x = 0; x <= width; x += 5) {
            // Complex wave function for organic feel (combining sine/cosine)
            const y = yBase + 
                      Math.sin(x * frequency + time * speed) * amplitude + 
                      Math.cos(x * (frequency * 0.5) + time * (speed * 0.8)) * (amplitude * 0.5);
            
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
        
        // 1. The Main Line (Gold, distinct)
        drawWave(0.55, 0.0015, 80, 1.0, 0.6, 2.5);
        
        // 2. Secondary Echo (Thinner, slightly offset, faster phase)
        drawWave(0.55, 0.0015, 90, 1.2, 0.3, 1);
        
        // 3. Deep Background Wave (Slow, large amplitude)
        drawWave(0.55, 0.0008, 140, 0.5, 0.15, 4);

        animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
        window.removeEventListener('resize', resize);
        cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} style={{ mixBlendMode: 'screen' }} />;
};


export default HeroFlowLines;