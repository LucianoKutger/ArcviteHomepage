import React, { useState } from 'react';
import { Send } from 'lucide-react';
import FadeOutSection from '../visuals/FadeoutSection';
import FormInput from '../ui/FormInput';
import { goalOptions } from '../../data/content'; // Pfad angepasst
import styles from './AuditSection.module.scss';

const AuditSection = () => {
  const [selectedGoals, setSelectedGoals] = useState([]);

  const toggleGoal = (value) => {
    if (selectedGoals.includes(value)) {
      setSelectedGoals(selectedGoals.filter(g => g !== value));
    } else {
      setSelectedGoals([...selectedGoals, value]);
    }
  };

  return (
    <FadeOutSection id="audit" className={styles.footer}>
       <div className={styles.container}>
          <div className={styles.auditCard}>
            <div className={styles.header}>
              <h2 className={styles.title}>
                 <span className={styles.titleBold}>Audit Application</span>
              </h2>
            </div>

            <form className={styles.form}>
              <div className={styles.inputGrid}>
                <FormInput label="Vorname*" placeholder="John" />
                <FormInput label="Nachname*" placeholder="Doe" />
              </div>
              
              <div className={styles.inputGrid}>
                <FormInput label="E-Mail*" type="email" placeholder="john@company.com" />
                <FormInput label="Telefonnummer*" type="tel" placeholder="+49 123 45678" />
              </div>

              <div className={styles.goalsSection}>
                <label className={styles.goalsLabel}>Ziele* (Mehrfachauswahl möglich)</label>
                <div className={styles.goalsContainer}>
                  {goalOptions.map((goal) => (
                    <button
                      key={goal.value}
                      type="button"
                      onClick={() => toggleGoal(goal.value)}
                      className={`${styles.goalButton} ${selectedGoals.includes(goal.value) ? styles.goalActive : styles.goalInactive}`}
                    >
                      {goal.label}
                    </button>
                  ))}
                </div>
              </div>

              <button type="submit" className={styles.submitButton}>
                Verfügbarkeit anfragen
                <Send className={styles.sendIcon} />
              </button>

              <p className={styles.disclaimer}>
                * Um Tiefe und Exzellenz unserer Betreuung zu garantieren, nehmen wir pro Quartal nur eine limitierte Anzahl an Neumandaten auf. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
              </p>
            </form>
          </div>
        </div>


    </FadeOutSection>
  );
};

export default AuditSection;