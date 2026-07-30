import styles from './HomepageWelcome.module.scss';

export default function HomepageWelcome() {
  return (
    <div className={styles.homepageWelcome}>
      <div className="container">
        <div className={styles.panel}>
          <div className={styles.content}>
            <h2 className={styles.heading}>
              <span>Bring Your Ideas&nbsp;</span>
              <span className={styles.highlight}>To Life</span>
            </h2>
            <p className={styles.lead}>
              Need a poster for your research project? Flyers for a club event? A banner for game day? We've got you covered.
            </p>
            <p className={styles.body}>
              Alumni and students are joining Cal Poly Career Connections to make online networking easier! Now is the time to make a connection. Mentor a student or make new connections with fellow alumni, all in one free and easy-to-use platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
