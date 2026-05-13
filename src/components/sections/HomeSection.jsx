import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import HeroFlowLines from '../visuals/HeroFlowLines';
import styles from './HomeSection.module.scss'; 


const HomeSection = ({ scrollToSection }) => {

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section id="home" className={styles.lpHeroSection}>
         <HeroFlowLines />
        
        <div className={styles.lpHeroContainer}>
          <motion.div 
            style={{ opacity: heroOpacity, y: heroY }} 
            className={styles.lpHeroGrid}
          >
            <div className={styles.lpHeroTextCol}>
              <h1 className={styles.lpHeroH1}>
                <span className={styles.heroGradientText}>
                  Ihr Körper soll nicht das Limit Ihrer Ambitionen sein
                </span>
              </h1>
              <p className={styles.lpHeroP}>
                Wir sind Ihr externes Betriebssystem für maximale Biologische Belastbarkeit. Aus komplexen medizinischen Daten schmieden wir Ihren präzisen Handlungsplan. Performance ohne Kompromisse.
              </p>
            </div>

            <div className={styles.lpHeroCtaCol}>
              <button 
                onClick={() => scrollToSection('audit')}
                className={styles.lpCtaWrapperBtn}
              >
                <div className={styles.lpCtaInner}>
                  <span className={styles.lpHeroBtnText}>Privates Audit sichern</span>
                  <div className={styles.lpCtaIconBox}>
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </button>
              <p className={styles.lpCapacityNote}>
                * Kapazität auf 4 Neuzugänge pro Monat begrenzt, um maximale Betreuungsqualität zu garantieren.
              </p>
            </div>
          </motion.div>
        </div>
    </section>
  );
};

export default HomeSection;