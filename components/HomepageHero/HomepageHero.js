import { LANDING_PAGE, withOrderUtm } from 'constants/landingPageSeo';

import Image from 'next/image';

import styles from './HomepageHero.module.scss';

export default function HomepageHero() {
  const orderHref = withOrderUtm(LANDING_PAGE.orderUrl, 'homepage_hero_order_link');

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
        <a href={orderHref} target="_blank" rel="noopener noreferrer" className={styles.orderButton}>
          Order Printing
        </a>
      </div>
    </section>
  );
}
