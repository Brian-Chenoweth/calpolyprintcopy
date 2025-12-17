// EntryHeader.jsx
import className from 'classnames/bind';
import { useRouter } from 'next/router';
import { FeaturedImage, Heading } from 'components';

import styles from './EntryHeader.module.scss';

const cx = className.bind(styles);

export default function EntryHeader({ title, image, date, author, className }) {
  const hasText = title || date || author;
  const { pathname } = useRouter();
  const isHome = pathname === '/';

  return (
    <div className={cx(['entry-header', className])}>
      <div className={cx('image')}>
        <div
          className={cx({
          overlay: true,
          'backpage-bg': hasText && !!title,
          })}
        >
          <div className="container">
            {hasText && !!title && (
              <Heading className={cx('heading-home')}>{title}</Heading>
            )}

            {isHome && (
              <Heading className={cx('heading-home')} level="h1">
                Cal Poly Print &amp; Copy
              </Heading>
            )}
          </div>
        </div>

        {image && (
          <FeaturedImage className={cx('featured-image')} image={image} priority />
        )}
      </div>
    </div>
  );
}
