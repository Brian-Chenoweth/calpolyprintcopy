import { Button } from 'components';

import styles from './HomepageVideo.module.scss';

export default function HomepageVideo() {
  return (
    <div className="container">
      <div className={styles.homepageVideoWrap}>
        {/* Background video */}
        <video
          className={styles.bgVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/static/Print-and-Copy-BG.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay */}
        <div className={styles.gradientOverlay} />

        {/* Foreground content */}
        <div className={styles.homepageVideo}>
          <div className={styles.homepageVideoHeadingOneWrap}>
            <h1 className={styles.homepageVideoHeadingOne}>
              Cal Poly Print &amp; Copy
            </h1>
            <p className={styles.homepageVideoHeadingOne}>
              {' '}
              is open for business in Building 35 Room 112
            </p>
          </div>

          <p>Hours of Operation</p>
          <p>Monday-Thursday 8-5</p>
          <p>Friday 8-4</p>
          <p>
            PLEASE BE AWARE ANY JOB TO BE BILLED TO A CPSU ACCOUNT WILL REQUIRE A
            PO NUMBER STARTING JULY 1, 2025
          </p>
          <p>Cal Poly Print & Copy will be closed Monday-Wednesday Nov. 24-26</p>
          <p>Faculty and staff may place orders by clicking the button below.</p>
          <p>
            For all other inquiries, please email{' '}
            <a href="mailto:calpolyprints@calpoly.edu">calpolyprints@calpoly.edu</a>
          </p>

          <Button styleType="primary" href="/submit-print-online.">
            See How
          </Button>
        </div>
      </div>
    </div>
  );
}
