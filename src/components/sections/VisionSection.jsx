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
              bleibt die wichtigste Komponente, die menschliche Biologie, 
              oft dem Zufall überlassen.
            </p>
            <p>
              <strong className={styles.strongText}>Die Konsequenz?</strong>
              <br/>
              <strong className={styles.strongText}>&#10140; Ein unsichtbares Limit.</strong>
            </p>
            <p className={styles.pText}>
              Trotz eiserner Disziplin wird der eigene Körper zum Flaschenhals für das nächste Wachstumslevel.&nbsp;
              <span className={styles.cursivText}>Brain Fog</span>&nbsp;bei kritischen Entscheidungen, der unweigerliche<br/>
              <span className={styles.cursivText}>Energie-Crash am Nachmittag</span>
              &nbsp;und das schleichende Gefühl, dass der geschäftliche Erfolg mit der
              &nbsp;<span className={styles.cursivText}>eigenen Substanz</span>&nbsp;bezahlt wird.
            </p>
            <p>
              <strong className={styles.strongText}>Arcvite wurde gegründet, um diese Lücke zu schließen.</strong>
            </p>
            <p className={styles.pText}>
              Wir verstehen Gesundheit nicht als Lifestyle-Attribut, sondern als Hochleistungs-Struktur. 
              Basierend auf unserem proprietären Bogenmodell (dem Arc-System) bauen wir ein Fundament, das weit über herkömmliches Coaching hinausgeht.
            </p>
            <p>
              <strong className={styles.strongText}>Unser Ziel</strong>
            </p>
            <p className={styles.pText}>
              Sie stehen nicht trotz, sondern wegen Ihrer physischen und mentalen Verfassung an der Spitze.
            </p>
          </div>
          
          <div className={styles.featuresGrid}>
            {[
              { title: "Lifespan", desc: "Verlängerung der gesundheitlichen Spannweite durch präventive Medizin.", icon: <Infinity className="w-5 h-5 text-[#2DD4BF]" /> },
              { title: "Resilience", desc: "Aufbau eines Immunsystems, das unter hohem Druck nicht einknickt.", icon: <Shield className="w-5 h-5 text-[#2DD4BF]" /> },
              { title: "Clarity", desc: "Dauerhafter kognitives Fokus - ohne Abhängigkeit von Stimulanzien.", icon: <Brain className="w-5 h-5 text-[#2DD4BF]" /> },
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