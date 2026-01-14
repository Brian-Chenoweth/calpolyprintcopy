import { gql } from '@apollo/client';
import { FaQuoteRight } from 'react-icons/fa';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import TestimonialItem from '../TestimonialItem';
import styles from './Testimonials.module.scss';

const cx = classNames.bind(styles);

/**
 * Render a single RANDOM testimonial (SSR-safe)
 */
export default function Testimonials({ testimonials = [] }) {
  if (!testimonials.length) return null;

  // Start stable for SSR
  const [index, setIndex] = useState(0);

  // Randomize on client after mount
  useEffect(() => {
    if (testimonials.length > 1) {
      const randomIndex = Math.floor(Math.random() * testimonials.length);
      setIndex(randomIndex);
    }
  }, [testimonials.length]);

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
