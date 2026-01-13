import { gql } from '@apollo/client';
import { FaQuoteRight } from 'react-icons/fa';
import className from 'classnames/bind';

import TestimonialItem from '../TestimonialItem';

import styles from './Testimonials.module.scss';
const cx = className.bind(styles);

/**
 * Render a single random testimonial
 */
export default function Testimonials({ testimonials = [] }) {
  if (!testimonials.length) return null;

  // ✅ Pick ONE random testimonial per render
  const randomIndex = Math.floor(Math.random() * testimonials.length);
  const testimonial = testimonials[randomIndex];

  return (
    <div className={cx('container')}>
      <FaQuoteRight className={cx('quote-icon')} />

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
