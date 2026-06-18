import {
  LANDING_PAGE,
  LANDING_PAGE_CITATION_FACTS,
  LANDING_PAGE_FAQS,
  withOrderUtm,
} from 'constants/landingPageSeo';

import { event as trackEvent } from 'lib/gtag';
import { Button } from 'components';

import styles from './HomepageAnswers.module.scss';

const orderCtaHref = withOrderUtm(LANDING_PAGE.orderUrl, 'answers_section_button');

export default function HomepageAnswers() {
  return (
    <section className={styles.answers} aria-labelledby="print-copy-overview">
      <div className="container">
        <div className={styles.panel}>
          <h2 id="print-copy-overview">Print Services, Ordering, and FAQs</h2>

          <p className={styles.description}>
            {LANDING_PAGE.businessName} serves {LANDING_PAGE.audiencePriority.join(', ')} across{' '}
            {LANDING_PAGE.serviceArea.join(', ')}.
          </p>

          <section className={styles.citation} aria-labelledby="quick-facts-summary">
            <h3 id="quick-facts-summary">Quick Facts</h3>
            <ul className={styles.citationList}>
              {LANDING_PAGE_CITATION_FACTS.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </section>

          <div className={styles.metaGrid}>
            <div>
              <h3>Services</h3>
              <ul>
                {LANDING_PAGE.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3>Location and Contact</h3>
              <p>{LANDING_PAGE.address.name}</p>
              <p>{LANDING_PAGE.address.streetAddress}</p>
              <p>
                {LANDING_PAGE.address.addressLocality}, {LANDING_PAGE.address.addressRegion}{' '}
                {LANDING_PAGE.address.postalCode}
              </p>
              <p>
                <a href={`mailto:${LANDING_PAGE.email}`}>{LANDING_PAGE.email}</a>
              </p>
              <p>{LANDING_PAGE.openingHours[0]}</p>
            </div>
          </div>

          <div className={styles.ctaWrap}>
            <Button
              styleType="primary"
              href={orderCtaHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackEvent('order_click', {
                  event_category: 'conversion',
                  event_label: 'answers_section',
                  destination_url: LANDING_PAGE.orderUrl,
                });
              }}
            >
              Start Your Print Order
            </Button>
          </div>

          <h3 className={styles.faqHeading}>Frequently Asked Questions</h3>
          <div className={styles.faqList}>
            {LANDING_PAGE_FAQS.map((faq) => (
              <details key={faq.question} className={styles.faqItem}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}