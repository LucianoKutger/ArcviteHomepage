import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './MethodologySystem.module.css';

const ArcSystem = () => {
  const [activeSegment, setActiveSegment] = useState(null);
  const [isCenterHovered, setIsCenterHovered] = useState(false);

  // --- DATEN & KONFIGURATION ---
  const segments = useMemo(() => [
    { 
      id: 1, 
      title: "Core Effects", 
      subtitle: "The DNA of Performance", 
      hex: "#285430", 
      radius: 180, 
      thickness: 6, 
      description: "Die psychologische Architektur deines Erfolgs. Dieser Kern arbeitet durch unsere Algorithmen vollautomatisch im Hintergrund.", 
      listItems: [
        { label: "Regenerations Zyklus", text: "Das aktive Management von Schlafphasen, zirkadianer Rhythmik und Erholungsprotokollen. Er ist der entscheidende Taktgeber für Ihren neuronalen Reset und die Grundvoraussetzung für kognitive Präzision sowie die Kontrolle Ihrer Emotionen." }, 
        { label: "Nährstoff-Basis", text: "Der Treibstoff für Ihren Tag. Sie entscheidet darüber, ob Ihre Energie bis zum Abend reicht oder ob Ihr Fokus vorzeitig einbricht. Ohne die richtige Basis riskieren Sie unnötigen Leistungsabfall." }
      ] 
    },
    { 
      id: 2, 
      title: "Neuro-Biochemistry", 
      subtitle: "Systemic Performance Base", 
      hex: "#5F8D4E", 
      radius: 300, 
      thickness: 6, 
      description: "Die biochemische Architektur Ihres Körpers. Faktoren der internen Leistungsfähigkeit, die wir mit moderner Wissenschaft messbar optimieren können.", 
      listItems: [
        { label: "Hormonhaushalt", text: "Die Balance zwischen Stressadaption und Regeneration definiert Ihre emotionale Stabilität und physische Präsenz unter Druck." }, 
        { label: "Neurotransmitter", text: "Die Qualität Ihrer kognitiven Signale. Diese Botenstoffe steuern Ihre Fokuskapazität, analytische Schärfe und Impulskontrolle in Verhandlungssituationen." },
        { label: "Entzündungen", text: 'Der Wächter Ihrer biologischen Kapazität. Die Kontrolle systemischer Reaktionen eliminiert kognitive Bremsen wie "Brain Fog" und sichert Ihre Energieproduktion gegen vorzeitigen Verschleiß.' }
      ] 
    },
    { 
      id: 3, 
      title: "Operational Sphere", 
      subtitle: "Executive Ecosystem", 
      hex: "#A4BE7B", 
      radius: 420, 
      thickness: 6, 
      description: "Die makroskopische Perspektive. Die äußeren Kräfte und systemischen Variablen, die permanent auf Ihre Biologie und Psychologie einwirken. Ihr System muss diese Faktoren nicht nur aushalten, sondern verarbeiten.", 
      listItems: [
        { label: "Unberechenbare Ereignisse", text: "Globale Krisen, Black-Swan-Events und plötzliche Situationen, die sich nicht im Vorfeld planen lassen und von Ihnen eine sofortige Adaption fordern." }, 
        { label: "Asymmetrisches Umfeld", text: "Ein von chronischem Druck geprägtes Ökosystem. Deadlines, Globale Mobilität und das kontinuierliche Management unternehmerischer Risiken." },
        { label: "Hochdruck Szenarien", text: "Verhandlungssituationen, in denen emotionale Kontrolle, kognitive Präzision und die richtige Herangehensweise über Erfolg oder Scheitern entscheiden. Momente, in denen unkontrollierte Emotionsschwankungen Ihr Urteilsvermögen direkt bedrohen." }
      ] 
    },
    { 
      id: 4, 
      title: "Dream", 
      subtitle: "Your Ultimate Vision", 
      hex: "#E5D9B6", 
      radius: 540, 
      thickness: 6, 
      description: "Ihr Polarstern. Im Bogenmodell ist der Traum die oberste Instanz, nach der wir alles ausrichten. Er definiert die Leitplanken für Ihre Strategic Vision, Ihre Neuro-Biochemistry und Ihre Core Effects. Alles folgt dem Ziel.",
      listItems: null
    }
  ], []);

  // --- GEOMETRIE LOGIK ---
  const centerX = 120; 
  const centerY = 580; 

  const polarToCartesian = (cx, cy, r, angleInDegrees) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return { x: cx + (r * Math.cos(angleInRadians)), y: cy + (r * Math.sin(angleInRadians)) };
  };

  const getPointyArcPath = (r, startAngle, endAngle, thickness) => {
    const pStart = polarToCartesian(centerX, centerY, r, startAngle);
    const pEnd = polarToCartesian(centerX, centerY, r, endAngle);
    const rOut = r + thickness / 2;
    const rIn = r - thickness / 2;
    return ["M", pStart.x, pStart.y, "A", rOut, rOut, 0, 0, 1, pEnd.x, pEnd.y, "A", rIn, rIn, 0, 0, 0, pStart.x, pStart.y, "Z"].join(" ");
  };

  const arrowStart = polarToCartesian(centerX, centerY, 580, 45);
  const arrowEnd = polarToCartesian(centerX, centerY, 15, 45);
  const polarStarPoint = polarToCartesian(centerX, centerY, 540, 45);

  return (
    <div className={styles.container}>
      {/* LINKSEITE: DAS SVG MODELL */}
      <div className={styles.visualWrapper}>
        <svg viewBox="0 0 700 700" className={styles.svgGraph}>
          <defs>
            {segments.map(s => (
              <linearGradient key={`grad-arc-${s.id}`} id={`grad-arc-${s.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: s.hex}} />
                <stop offset="50%" style={{stopColor: s.hex, filter: 'brightness(1.4)'}} />
                <stop offset="100%" style={{stopColor: s.hex}} />
              </linearGradient>
            ))}
            <linearGradient id="flow-energy-white" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="50%" stopColor="white" stopOpacity="1" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <marker id="arrow-to-center-bright" markerWidth="20" markerHeight="12" refX="18" refY="6" orient="auto"><polygon points="0 0, 18 6, 0 12" fill="white" /></marker>
            <marker id="indicator-arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#E5D9B6" fillOpacity="0.4" /></marker>
            <filter id="glow-model-meth"><feGaussianBlur stdDeviation="2.5" result="blur" /><feComposite in="SourceGraphic" in2="blur" operator="over" /></filter>
          </defs>

          {/* Impact Flow Line */}
         <g>
            <line x1={arrowStart.x} y1={arrowStart.y} x2={arrowEnd.x} y2={arrowEnd.y} stroke="white" strokeWidth="1.3" strokeOpacity="0.8" markerEnd="url(#arrow-to-center-bright)" />
            
            <motion.line 
                x1={arrowStart.x} y1={arrowStart.y} x2={arrowEnd.x} y2={arrowEnd.y} 
                stroke="url(#flow-energy-white)" strokeLinecap="round" 
                initial={{ pathLength: 0.15, pathOffset: -0.15, opacity: 0 }} 
                animate={{ 
                    pathOffset: [-0.15, 1],
                    // Startet unsichtbar -> Volle Leuchtkraft in der Mitte -> Endet unsichtbar
                    opacity: [0.5, 1, 0.5], 
                    // Startet dünn -> Wird in der Mitte dicker -> Endet wieder dünn
                    strokeWidth: [2, 6, 2] 
                }} 
                transition={{ 
                    // Die Bewegung bleibt konstant (linear)
                    pathOffset: { duration: 4, repeat: Infinity, ease: "linear" },
                    // Das Aufleuchten (opacity & strokeWidth) schwillt organisch an und ab (easeInOut)
                    opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    strokeWidth: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }} 
                style={{ filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.9))' }} 
            />
            
            <text x={polarToCartesian(centerX, centerY, 600, 45).x + 12} y={polarToCartesian(centerX, centerY, 600, 45).y - 5} fill="white" fillOpacity="0.75" fontSize="10" letterSpacing="0.5em" className="uppercase italic font-extralight">Impact Flow</text>
          </g>

          {/* Center Point "YOU" */}
          <g className="cursor-pointer" onMouseEnter={() => setIsCenterHovered(true)} onMouseLeave={() => setIsCenterHovered(false)}>
            <motion.circle cx={centerX} cy={centerY} animate={{ r: isCenterHovered ? 20 : 10, opacity: isCenterHovered ? 0.25 : 0.08 }} fill="white" />
            <motion.circle cx={centerX} cy={centerY} animate={{ r: isCenterHovered ? 7 : 4, fill: isCenterHovered ? "#fff" : "rgba(255,255,255,0.7)" }} fill="white" />
            <motion.line x1={centerX} y1={centerY + 55} x2={centerX} y2={centerY + 12} stroke="#E5D9B6" strokeWidth="0.8" strokeDasharray="3 3" strokeOpacity="0.4" markerEnd="url(#indicator-arrowhead)" />
            <text x={centerX} y={centerY + 75} textAnchor="middle" fill="#E5D9B6" className="text-[10px] uppercase tracking-[0.4em] font-light italic" style={{ filter: 'drop-shadow(0 0 10px rgba(229, 217, 182, 0.3))' }}>YOU</text>
          </g>

          {/* The Arcs (Stripes) */}
          {segments.map((s) => {
            const isActive = activeSegment?.id === s.id;
            const isInactive = activeSegment !== null && !isActive;
            const r = isActive ? s.radius + 12 : s.radius; 
            const t = isActive ? s.thickness * 1.6 : s.thickness; 
            
            return (
                <g key={s.id} className="cursor-pointer group" onMouseEnter={() => setActiveSegment(s)} onMouseLeave={() => setActiveSegment(null)}>
                    <path d={getPointyArcPath(s.radius, -5, 100, 110)} fill="transparent" className="pointer-events-auto" />
                    <motion.path 
                        animate={{ d: getPointyArcPath(r, 10, 80, t), fillOpacity: isInactive ? 0.05 : 1 }} 
                        fill={`url(#grad-arc-${s.id})`} 
                        style={{ filter: isActive ? 'url(#glow-model-meth)' : 'none' }} 
                        transition={{ duration: 0.4 }} 
                    />
                </g>
            );
          })}

          {/* Polar Star */}
          <g>
            <motion.line x1={polarStarPoint.x} y1={polarStarPoint.y - 75} x2={polarStarPoint.x} y2={polarStarPoint.y - 12} stroke="#E5D9B6" strokeWidth="0.8" strokeDasharray="3 3" strokeOpacity="0.4" markerEnd="url(#indicator-arrowhead)" />
            <motion.circle cx={polarStarPoint.x} cy={polarStarPoint.y} initial={{ r: 4, opacity: 0.4 }} animate={{ r: 14, opacity: 0 }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }} fill="#E5D9B6" />
            <circle cx={polarStarPoint.x} cy={polarStarPoint.y} r="3" fill="#E5D9B6" style={{ filter: 'drop-shadow(0 0 10px #E5D9B6)' }} />
            <text x={polarStarPoint.x} y={polarStarPoint.y - 85} textAnchor="middle" fill="#E5D9B6" className="text-[10px] uppercase tracking-[0.4em] font-light italic" style={{ filter: 'drop-shadow(0 0 10px rgba(229, 217, 182, 0.5))' }}>Polar Star</text>
          </g>
        </svg>
      </div>

      {/* RECHTE SEITE: TEXT INFORMATION ALS LISTE */}
      <div className={styles.textWrapper}>
        <div className={styles.textList}>
          {/* Wir drehen das Array um, damit "Dream" ganz oben in der Liste steht */}
          {[...segments].reverse().map((segment) => {
            const isActive = activeSegment?.id === segment.id;
            const isInactive = activeSegment !== null && !isActive;

            return (
              <motion.div 
                key={segment.id}
                className={`${styles.textListItem} ${isInactive ? styles.dimmedItem : ''}`}
                onMouseEnter={() => setActiveSegment(segment)}
                onMouseLeave={() => setActiveSegment(null)}
                layout
              >
                <div className={styles.headerRow}>
                  <div 
                    className={styles.indicatorDot} 
                    style={{ 
                      backgroundColor: isActive ? segment.hex : 'transparent',
                      borderColor: isActive ? 'transparent' : 'rgba(255,255,255,0.2)',
                      boxShadow: isActive ? `0 0 15px ${segment.hex}` : 'none'
                    }} 
                  />
                  <span 
                    className={styles.subtitle} 
                    style={{ color: isActive ? segment.hex : 'rgba(255,255,255,0.4)' }}
                  >
                    {segment.subtitle}
                  </span>
                </div>
                
                <motion.h2 
                  className={styles.infoTitle}
                  animate={{ 
                    scale: isActive ? 1.05 : 1, 
                    color: isActive ? '#ffffff' : 'rgba(255,255,255,0.6)' 
                  }}
                  style={{ originX: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {segment.title}
                </motion.h2>
                
                {/* Expandierende Details, wenn gehovert */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: '1rem' }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      className={styles.expandedContent}
                    >
                      <p className={styles.infoDesc}>{segment.description}</p>
                      
                      {segment.listItems && (
                        <div className={styles.detailsList}>
                          {segment.listItems.map((item, idx) => (
                            <div key={idx} className={styles.detailItem}>
                              <div className={styles.detailHeader}>
                                <div className={styles.detailDot} style={{ backgroundColor: segment.hex }} />
                                <span className={styles.detailLabel} style={{ color: segment.hex }}>{item.label}</span>
                              </div>
                              <p className={styles.detailText}>{item.text}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ArcSystem;