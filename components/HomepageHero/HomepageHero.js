import styles from './HomepageHero.module.scss';

export default function HomepageHero() {
  return (
    <section className={styles.homepageHero} aria-label="Cal Poly Print and Copy hero">
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <span className={styles.heroLine} aria-hidden="true" />
        <h1 className={styles.heroTitle}>Bring Your Ideas to Life</h1>
        <span className={styles.heroLine} aria-hidden="true" />
      </div>
    </section>
  );
}
