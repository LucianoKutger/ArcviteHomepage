import React from 'react';
import FadeOutSection from '../visuals/FadeoutSection';
import MethodologySystem from '../visuals/MethodologySystem';
import styles from './MethodologySection.module.scss';

const MethodologySection = () => {
  return (
    <FadeOutSection id="methodik" className={styles.section}>
      
       <div className={styles.backgroundEffect}>
          <div className={styles.glowBlob} />
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.flexContainer}>
            <div className={styles.textColumn}>
              <h2 className={styles.headline}>
                The Arc System <br />
                <span className={styles.subHeadline}>The Excellence Standard</span>
              </h2>
              <p className={styles.description}>
                Das Arc-System ist die technische Infrastruktur für Ihre Biologie. Wir betrachten Biologie als Ingenieurskunst. Wo herkömmliche Ansätze auf Intuition setzen, nutzen wir präzise medizinische Analytik für maximale Belastbarkeit.
              </p>
            </div>
            <div className={styles.componentWrapper}>

              <MethodologySystem />

            </div>
          </div>
        </div>

    </FadeOutSection>
  );
};

export default MethodologySection;