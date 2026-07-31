import Image from 'next/image';
import { LANDING_PAGE, withOrderUtm } from 'constants/landingPageSeo';
import { Button } from 'components';

import styles from './HomepageAnswers.module.scss';

const orderCtaHref = withOrderUtm(LANDING_PAGE.orderUrl, 'resource_panel_button');

const RESOURCE_ITEMS = [
  'Product options and specifications',
  'File setup guidelines',
  'Paper and finish selectors',
  'Templates and resources',
  'Easy online ordering',
];

const SUPPORT_CARDS = [
  {
    title: 'Reliable',
    image: '/static/cal-poly-campus-mustang-way-students-biking-walking.jpg',
    copy: 'Quality prints and dependable turnaround when your deadline matters most.',
  },
  {
    title: 'Student-Friendly',
    image: '/static/banner.jpeg',
    copy: 'From class projects to research posters, we make campus printing simple and accessible.',
  },
  {
    title: 'Every Purchase Gives Back',
    image: '/static/print-copy-hero.jpg',
    copy: 'Print services support the university community and help sustain valuable campus resources.',
  },
];

export default function HomepageAnswers() {
  return (
    <section className={styles.answers} aria-label="Print and support information">
      <section className={styles.resourceBand}>
        <div className="container">
          <div className={styles.resourcePanel}>
            <div className={styles.resourceMedia}>
              <Image
                src="/static/cal-poly-print-copy-online-ordering.jpg"
                width={640}
                height={420}
                alt="Hands typing on a laptop keyboard to submit an online print order."
                className={styles.resourceImage}
              />
            </div>

            <div className={styles.resourceContent}>
              <h2>
                <span>Everything You Need,</span>
                <span className={styles.gold}>All in One Place</span>
              </h2>
              <p>The Print Portal includes:</p>
              <ul>
                {RESOURCE_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <Button
                styleType="primary"
                href={orderCtaHref}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.portalLink}
              >
                Access the Print Portal
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.supportSection} aria-labelledby="support-heading">
        <div className="container">
          <h2 id="support-heading" className={styles.supportHeading}>
            Printing That Supports Cal Poly
          </h2>
          <div className={styles.supportCards}>
            {SUPPORT_CARDS.map((card) => (
              <article key={card.title} className={styles.supportCard}>
                <Image
                  src={card.image}
                  width={360}
                  height={220}
                  alt={`${card.title} placeholder image`}
                  className={styles.supportImage}
                />
                <div className={styles.supportBody}>
                  <h3>{card.title}</h3>
                  <p>{card.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.helpSection} aria-labelledby="help-heading">
        <div className={styles.helpGrid}>
          <div className={styles.helpMedia}>
            <Image
              src="/static/print-copy-hero.jpg"
              width={980}
              height={540}
              alt="Placeholder help section image"
              className={styles.helpImage}
            />
          </div>

          <div className={styles.helpContent}>
            <div className={styles.helpInner}>
              <h2 id="help-heading">
                Need <span className={styles.gold}>Help?</span>
              </h2>
              <p>
                Not sure what to order? Have questions about file setup or
                sizing? We&apos;re here to help.
              </p>
              <p>
                Email: <a href={`mailto:${LANDING_PAGE.email}`}>{LANDING_PAGE.email}</a>
              </p>
              <p>Phone: <a href="tel:8057562399">805-756-2399</a></p>
              <p>Location: Building 35, Room 112</p>
              <p>Hours: Tuesday - Thursday, 9 AM - 1 PM</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}