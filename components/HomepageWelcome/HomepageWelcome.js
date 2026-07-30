import styles from './HomepageWelcome.module.scss';

export default function HomepageWelcome() {
  return (
    <div className={styles.homepageWelcome}>
      <div className="container">
        <div className={styles.panel}>
          <div className={styles.content}>
            <h2 className={styles.heading}>
              <span>Bring Your Ideas</span>
              <span className={styles.highlight}>to Life</span>
            </h2>
            <p className={styles.lead}>
              Need a poster for your class project? Flyers for a club event? A
              banner for game day? We&apos;ve got you covered.
            </p>
            <p className={styles.body}>
              Cal Poly Print & Copy is your print solutions center. Conveniently
              located in Building 35, we specialize in small and large format
              prints for presentations, events, and the classroom. With easy
              online ordering and flexible hours, Cal Poly Print & Copy is the
              premier solution for your printing needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
