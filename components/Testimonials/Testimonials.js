import { gql } from '@apollo/client';
import { FaQuoteRight } from 'react-icons/fa';
import className from 'classnames/bind';

import TestimonialItem from '../TestimonialItem';

import styles from './Testimonials.module.scss';
const cx = className.bind(styles);

/**
 * Create a deterministic index so SSR + client match
 */
function getStableIndex(testimonials) {
  if (!testimonials.length) return 0;

  const str = testimonials
    .map(
      (t) =>
        `${t?.testimonialFields?.testimonialAuthor || ''}|${
          t?.testimonialFields?.testimonialContent || ''
        }`
    )
    .join('||');

  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = (hash * 31 + str.charCodeAt(i)) | 0;
  }

  return Math.abs(hash) % testimonials.length;
}

/**
 * Render a single deterministic “random” testimonial
 */
export default function Testimonials({ testimonials = [] }) {
  if (!testimonials.length) return null;

  const index = getStableIndex(testimonials);
  const testimonial = testimonials[index];

  return (
    <div className={cx('container')}>
      <span className={cx('quoteIconWrap')}>
        <FaQuoteRight className={cx('quote-icon')} />
      </span>

      <TestimonialItem
        author={testimonial?.testimonialFields?.testimonialAuthor}
      >
        <div
          className={cx('slide-content')}
          dangerouslySetInnerHTML={{
            __html: testimonial?.testimonialFields?.testimonialContent,
          }}
        />
      </TestimonialItem>
    </div>
  );
}

Testimonials.fragments = {
  entry: gql`
    fragment TestimonialsFragment on Testimonial {
      testimonialFields {
        testimonialContent
        testimonialAuthor
      }
    }
  `,
};
