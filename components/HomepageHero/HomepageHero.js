import { LANDING_PAGE, withOrderUtm } from 'constants/landingPageSeo';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

import styles from './HomepageHero.module.scss';

export default function HomepageHero() {
  const orderButtonRef = useRef(null);
  const orderHref = withOrderUtm(LANDING_PAGE.orderUrl, 'homepage_hero_order_link');

  useEffect(() => {
    const orderButton = orderButtonRef.current;
    if (!orderButton) return undefined;

    const setHeroOrderVisibility = (isVisible) => {
      document.documentElement.dataset.heroOrderVisible = isVisible;
    };
    const updateHeroOrderVisibility = () => {
      const { top, bottom } = orderButton.getBoundingClientRect();
      const headerBottom = document.querySelector('header')?.getBoundingClientRect().bottom || 0;
      setHeroOrderVisibility(bottom > headerBottom && top < window.innerHeight);
    };

    updateHeroOrderVisibility();
    window.addEventListener('scroll', updateHeroOrderVisibility);
    window.addEventListener('resize', updateHeroOrderVisibility);

    return () => {
      window.removeEventListener('scroll', updateHeroOrderVisibility);
      window.removeEventListener('resize', updateHeroOrderVisibility);
      delete document.documentElement.dataset.heroOrderVisible;
    };
  }, []);

  return (
    <section className={styles.homepageHero} aria-label="Cal Poly Print and Copy hero">
      <div className={styles.heroMedia}>
        <Image
          src="/static/print-copy-hero.jpg"
          alt="Cal Poly students collaborating at a table with printed materials."
          fill
          priority
          fetchPriority="high"
          quality={72}
          sizes="100vw"
          className={styles.heroImage}
        />
      </div>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <span className={styles.heroLine} aria-hidden="true" />
        <h1 className={styles.heroTitle}>Bring Your Ideas to Life</h1>
        <span className={styles.heroLine} aria-hidden="true" />
        <a ref={orderButtonRef} href={orderHref} target="_blank" rel="noopener noreferrer" className={styles.orderButton}>
          Order Printing
        </a>
      </div>
    </section>
  );
}
