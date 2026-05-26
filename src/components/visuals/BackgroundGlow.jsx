import React from 'react';
import styles from './BackgroundGlow.module.scss';

export default function BackgroundGlow({ className = "" }) {
  return (
    /* Der Wrapper nutzt nun clip-path, um Seiteneffekte im Layout komplett zu verhindern */
    <div className={`${styles.backgroundGlowLayer} ${className}`}>
      {/* Subtiler Hintergrund-Glow */}
      <div className={styles.bgGlow}></div>
      
      {/* Animierte Ambient Orbs */}
      <div className={`${styles.ambientOrb} ${styles.orb1}`}></div>
      <div className={`${styles.ambientOrb} ${styles.orb2}`}></div>
      <div className={`${styles.ambientOrb} ${styles.orb3}`}></div>
    </div>
  );
}