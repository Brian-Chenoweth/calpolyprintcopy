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

  const hasFeaturedImage = !!image?.sourceUrl;
  const useBackpageBar = !isHome && !!title && !hasFeaturedImage;
  const useImageOverlay = !isHome && !!title && hasFeaturedImage;

  return (
    <div className={cx(['entry-header', className])}>
      <div className={cx('image', { 'has-featured-image': hasFeaturedImage })}>
        <div
          className={cx({
            overlay: true,
            'backpage-bg': useBackpageBar,
            'overlay-on-image': useImageOverlay,
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

        {hasFeaturedImage && (
          <FeaturedImage className={cx('featured-image')} image={image} priority />
        )}
      </div>
    </div>
  );
}
