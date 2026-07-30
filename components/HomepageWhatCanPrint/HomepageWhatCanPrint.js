import Image from 'next/image';

import styles from './HomepageWhatCanPrint.module.scss';

const SMALL_FORMAT_ITEMS = [
  'Flyers',
  'Handouts',
  'Course materials',
  'Brochures',
  'Booklets',
  'Programs',
  'Business documents',
];

const LARGE_FORMAT_ITEMS = [
  'Posters',
  'Research presentations',
  'Presentation boards',
  'Event signage',
  'Banners',
];

const FINISHING_ITEMS = [
  'Binding',
  'Folding',
  'Cutting',
  'Lamination',
  'Mounting',
];

export default function HomepageWhatCanPrint() {
  return (
    <section className={styles.whatCanPrint} aria-labelledby="what-can-we-print-heading">
      <div className={styles.inner}>
        <h2 id="what-can-we-print-heading" className={styles.heading}>
          <span>What Can We </span>
          <span className={styles.highlight}>Print?</span>
        </h2>

        <div className={styles.row}>
          <div className={styles.mediaWrap}>
            <Image
              src="/static/cal-poly-print-copy-booklet-production.jpg"
              width={980}
              height={620}
              alt="Blue printed booklets stacked on a conveyor belt in the Cal Poly Print & Copy production area."
              className={styles.image}
            />
          </div>

          <div className={styles.content}>
            <h3>Small Format Printing</h3>
            <p>Perfect for everyday academic and campus needs.</p>
            <ul>
              {SMALL_FORMAT_ITEMS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`${styles.row} ${styles.rowReverse}`}>
          <div className={styles.content}>
            <h3>Large Format Printing</h3>
            <p>Make a big impression.</p>
            <ul>
              {LARGE_FORMAT_ITEMS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.mediaWrap}>
            <Image
              src="/static/cal-poly-print-copy-large-format-printing.jpg"
              width={980}
              height={620}
              alt="Large-format printing equipment producing colorful banners at Cal Poly Print & Copy."
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.mediaWrap}>
            <Image
              src="/static/cal-poly-print-copy-spiral-bound-booklets.jpg"
              width={980}
              height={620}
              alt="Spiral-bound booklets produced at Cal Poly Print & Copy."
              className={styles.image}
            />
          </div>

          <div className={styles.content}>
            <h3>Finishing Services</h3>
            <p>Give your project a polished, professional finish.</p>
            <ul>
              {FINISHING_ITEMS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
