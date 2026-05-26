import React from 'react';
import { Infinity, Shield, Brain } from 'lucide-react';
import FadeOutSection from '../visuals/FadeoutSection';
import styles from './VisionSection.module.scss';

const VisionSection = () => {
  return (
    <FadeOutSection id="vision" className={styles.section}>
      
       <div className={styles.backgroundWrapper}>
          <div className={styles.glowEffect} />
        </div>

        <div className={styles.container}>
          <h2 className={styles.heading}>
            The New Standard of Leadership
          </h2>
          
          <div className={styles.textContent}>
            <p>
              <strong className={styles.strongText}>Ein Unternehmen ist nur so belastbar wie seine Führungsebene.</strong> 
            </p>
            <p className={styles.pText}>
              Doch während jede Kennzahl im Business akribisch optimiert wird, 
              bleibt die wichtigste <br/>Komponente, die menschliche Biologie, 
              oft dem Zufall überlassen.
            </p>
            <p>
              <strong className={styles.strongText}>Die Konsequenz?</strong>
              <strong className={styles.strongText}> &#10140; Ein unsichtbares Limit.</strong>
            </p>
            <p className={styles.pText}>
              Trotz eiserner Disziplin wird der eigene Körper zum Flaschenhals für das nächste<br/>Wachstumslevel.
              Brain Fog bei kritischen Entscheidungen, der unweigerliche<br/>
              Energie-Crash am Nachmittag und das schleichende Gefühl, dass der geschäftliche<br/>Erfolg mit der
              eigenen Substanz bezahlt wird.
            </p>
            <p>
              <strong className={styles.strongText}>Arcvite wurde gegründet, um diese Lücke zu schließen.</strong>
            </p>
            <p className={styles.pText}>
              Wir verstehen Gesundheit nicht als Lifestyle-Attribut, sondern als Hochleistungs-Struktur.<br/> 
              Basierend auf unserem proprietären Bogenmodell (dem Arc-System) bauen wir<br/>ein Fundament, das weit über herkömmliches Coaching hinausgeht.
            </p>
            <p>
              <strong className={styles.strongText}>Unser Ziel<br/><br/>Sie stehen nicht trotz, sondern wegen Ihrer physischen und<br/>mentalen Verfassung an der Spitze.</strong>
            </p>
          </div>
          
          <div className={styles.featuresGrid}>
            {[
              { title: "Lifespan", desc: "Verlängerung der gesundheitlichen Spannweite durch präventive Medizin.", icon: <Infinity className={styles.featureIcon} /> },
              { title: "Resilience", desc: "Aufbau eines Immunsystems, das unter hohem Druck nicht einknickt.", icon: <Shield className={styles.featureIcon} /> },
              { title: "Clarity", desc: "Dauerhafter kognitives Fokus - ohne Abhängigkeit von Stimulanzien.", icon: <Brain className={styles.featureIcon} /> },
            ].map((item, i) => (
              <div key={i} className={styles.featureItem}>
                <div className={styles.iconWrapper}>
                    {item.icon}
                </div>
                <div>
                  <h3 className={styles.featureTitle}>{item.title}</h3>
                </div>
                <div>
                  <p className={styles.featureDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

    </FadeOutSection>
  );
};

export default VisionSection;