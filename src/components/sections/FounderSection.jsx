import React from 'react';
import FadeOutSection from '../visuals/FadeoutSection';
import styles from './FounderSection.module.scss';

const FounderSection = () => {
  return (
    <FadeOutSection id="founder" className={styles.section}>
      
      <div className={styles.gridContainer}>
        
          <div className={styles.textContent}>
            <div className={styles.labelContainer}>
              <div className={styles.labelLine}></div>
              <span className={styles.labelText}>Our Founder</span>
            </div>

            <h2 className={styles.heading}>
              "IF YOU THINK BIG,<br />
              <span className={styles.headingFaded}>TRY THINKING BIGGER."</span>
            </h2>

            <div className={styles.description}>
              <p>
                Das Bogenmodell ist das Destillat aus intensiver Systemtheorie und der Analyse von Menschen mit einer unnachgiebigen Obszession für ihre Ziele. Es ist ein Framework, das die unsichtbaren Reibungsverluste sichtbar macht. Wir eliminieren die Lücke zwischen Ihrer Vision und der tatsächlichen Ausführung.
              </p>
            </div>
            
            <div className={styles.quoteBlock}>
              <p className={styles.quoteText}>
                "Alle Schwäche ist Willensschwäche."
              </p>
              <p className={styles.quoteAuthor}>
                — Friedrich Nietzsche
              </p>
            </div>

            <div className={styles.quoteBlockLast}>
              <p className={styles.quoteText}>
                "Arcvite ist die Architektur, die dort übernimmt, wo der menschliche Wille versagt."
              </p>
              <p className={styles.quoteAuthor}>
                — Andreas, Founder Arcvite
              </p>
            </div>

          </div>

          
          <div className={styles.imageContainer}>
            
              <div className={styles.imagePattern} />
              
              <div className={styles.imagePlaceholderText}>
                [Bild: Andreas <br/> (weicher Übergang in den Hintergrund)]
              </div>
          </div>

        </div>

    </FadeOutSection>
  );
};

export default FounderSection;