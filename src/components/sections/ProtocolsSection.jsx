import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

import FadeOutSection from '../visuals/FadeoutSection';
import SolutionCard from '../cards/SolutionCard';
import SolutionModal from '../ui/SolutionModal';
import { solutions } from '../../data/content'; // Pfad angepasst
import styles from './ProtocolsSection.module.scss';

const ProtocolsSection = ({ scrollToSection }) => {
  // Die Modal-Logik lebt jetzt lokal in dieser Section
  const [selectedSolution, setSelectedSolution] = useState(null);

  return (
    <FadeOutSection id="protokolle" className={styles.section} delayPercentage={0.65}>
      
           <div className={styles.container}>
          <div className={styles.headerContainer}>
            <h2 className={styles.title}>The Arcvite <br/> Full-Spectrum Solution</h2>
            <p className={styles.subtitle}>
              Wir beherrschen die Komplexität Ihrer Biologie - damit Sie sich auf ihren Alltag Konzentrieren können.
            </p>
          </div>

          <div className={styles.contentBox}>
            <div className={styles.gradientBackground} />
            
            <div className={styles.grid}>
              {solutions.map((item, idx) => (
                  <SolutionCard key={item.id} item={item} onOpen={setSelectedSolution} imgSrc={item.imgSrc} />
              ))}
            </div>

            <div className={styles.bottomSection}>
              <p className={styles.quote}>
                Wir ersetzen das Rätselraten durch ein technisches Protokoll mit klarer Erfolgsgarantie: Wir arbeiten so lange mit Ihnen, bis die vertraglich fixierten Performance-Marker Ziele erreicht sind - ohne Zusatzkosten.
              </p>
              
              <div className={styles.buttonWrapper}>
                <button 
                  onClick={() => scrollToSection('audit')}
                  className={styles.ctaButton}
                >
                  <span className={styles.buttonContent}>
                    Jetzt Privates Audit sichern <ChevronRight className={styles.chevronIcon} />
                  </span>
                </button>
                <p className={styles.disclaimer}>
                  * 15-minütiges Fachgespräch auf Augenhöhe - keine Verkaufsveranstaltung.
                </p>
              </div>
            </div>
          </div>
        </div>
        
      <AnimatePresence>
        {selectedSolution && (
          <SolutionModal 
            item={selectedSolution} 
            onClose={() => setSelectedSolution(null)} 
          />
        )}
      </AnimatePresence>
    </FadeOutSection>
  );
};

export default ProtocolsSection;