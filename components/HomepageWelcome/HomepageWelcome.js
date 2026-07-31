import styles from './HomepageWelcome.module.scss';

export default function HomepageWelcome() {
  return (
    <div className={styles.homepageWelcome}>
      <div className="container">
        <div className={styles.panel}>
          <div className={styles.content}>
            <h2 className={styles.heading}>
              <span>We Make Learn By Doing</span>
              <span className={styles.highlight}>Visible</span>
            </h2>
            <p className={styles.lead}>
              Cal Poly Print & Copy helps turn your ideas into polished, professional materials that make an impact. Whether you need a poster for your research project, flyers for a club event, a banner for game day, presentation boards, or promotional materials, we're your on-campus print partner. With high-quality printing, quick turnaround, and friendly support, we make it easy to showcase your work and bring your Learn by Doing experience to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
