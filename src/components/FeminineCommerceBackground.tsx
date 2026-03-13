import React from 'react';
import styles from './FeminineCommerceBackground.module.css';

export function FeminineCommerceBackground() {
  return (
    <div className={styles.feminineCommerceBg}>
      {/* Soft gradient base layer */}
      <div className={styles.bgGradientLayer}></div>
      
      {/* Premium soft glow orbs */}
      <div className={`${styles.softBlob} ${styles.blob1}`}></div>
      <div className={`${styles.softBlob} ${styles.blob2}`}></div>
      <div className={`${styles.softBlob} ${styles.blob3}`}></div>
      
      {/* Abstract commerce-inspired silhouettes */}
      <div className={styles.commerceSilhouettes}>
        {/* Top right cluster */}
        <div className={styles.iconGroup} style={{ top: '10%', right: '15%' }}>
          <span className={styles.iconHeart}>❤️</span>
          <span className={styles.iconBag} style={{ position: 'absolute', top: '20px', left: '25px' }}>🛍️</span>
          <span className={styles.iconStar} style={{ position: 'absolute', top: '-10px', left: '35px' }}>⭐</span>
        </div>
        
        {/* Bottom left cluster */}
        <div className={styles.iconGroup} style={{ bottom: '15%', left: '15%' }}>
          <span className={styles.iconGift}>🎁</span>
          <span className={styles.iconTag} style={{ position: 'absolute', top: '25px', right: '20px' }}>🏷️</span>
          <span className={styles.iconHeart} style={{ position: 'absolute', top: '-15px', right: '30px' }}>💕</span>
        </div>
        
        {/* Center decorative elements */}
        <div className={styles.iconGroup} style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <span className={styles.iconBag}>🛒</span>
          <span className={styles.iconStar} style={{ position: 'absolute', top: '-15px', left: '-20px' }}>✨</span>
          <span className={styles.iconStar} style={{ position: 'absolute', top: '-15px', right: '-20px' }}>✨</span>
        </div>
        
        {/* Floating individual icons */}
        <div className={`${styles.iconGroup} ${styles.iconHeart}`} style={{ top: '20%', left: '25%', animationDelay: '2s' }}>💖</div>
        <div className={`${styles.iconGroup} ${styles.iconBag}`} style={{ top: '70%', right: '25%', animationDelay: '8s' }}>👜</div>
        <div className={`${styles.iconGroup} ${styles.iconGift}`} style={{ top: '35%', left: '70%', animationDelay: '14s' }}>🎀</div>
      </div>
      
      {/* Premium micro-pattern */}
      <div className={styles.patternLayer}></div>
      
      {/* Premium animated gradients */}
      <div className={styles.gradientOverlay}></div>
      
      {/* Decorative sparkles */}
      <div className={styles.sparklesLayer}>
        <div className={styles.sparkle} style={{ top: '10%', left: '10%', animationDelay: '0s' }}></div>
        <div className={styles.sparkle} style={{ top: '20%', right: '15%', animationDelay: '1s' }}></div>
        <div className={styles.sparkle} style={{ top: '60%', left: '20%', animationDelay: '2s' }}></div>
        <div className={styles.sparkle} style={{ bottom: '20%', right: '25%', animationDelay: '3s' }}></div>
        <div className={styles.sparkle} style={{ top: '80%', left: '60%', animationDelay: '4s' }}></div>
        <div className={styles.sparkle} style={{ bottom: '10%', left: '10%', animationDelay: '5s' }}></div>
        <div className={styles.sparkle} style={{ top: '40%', right: '5%', animationDelay: '6s' }}></div>
        <div className={styles.sparkle} style={{ bottom: '40%', left: '80%', animationDelay: '7s' }}></div>
      </div>
    </div>
  );
}
