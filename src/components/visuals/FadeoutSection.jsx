import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const FadeOutSection = ({ id, className, children, delayPercentage = 0.5 }) => {
  const ref = useRef(null);
  const [offsetTop, setOffsetTop] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0); 

  useEffect(() => {
    const updatePosition = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setOffsetTop(rect.top + window.scrollY);
        setSectionHeight(rect.height); 
      }
    };
    
    updatePosition(); 
    window.addEventListener("resize", updatePosition); 
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  const { scrollY } = useScroll();

  const startPoint = offsetTop + (sectionHeight * delayPercentage);

  // Der Text fadet aus (Startet dynamisch -> endet 400px später)
  const contentOpacity = useTransform(scrollY, [startPoint, startPoint + 400], [1, 0]);
  
  // Der Text rutscht nach unten
  const y = useTransform(scrollY, [startPoint, startPoint + 500], [0, 150]);
  
  // Das "Blackout"-Overlay fadet weich ein
  const overlayOpacity = useTransform(scrollY, [startPoint + 100, startPoint + 500], [0, 1]);

  return (
    <section id={id} className={className} ref={ref} style={{ position: "relative" }}>
      
      <motion.div style={{ opacity: contentOpacity, y, width: "100%", height: "100%" }}>
        {children}
      </motion.div>

      <motion.div 
        style={{ 
          opacity: overlayOpacity,
          position: "absolute",
          inset: 0,
          backgroundColor: "#050505", 
          pointerEvents: "none",      
          zIndex: 50                  
        }} 
      />
      
    </section>
  );
};

export default FadeOutSection;