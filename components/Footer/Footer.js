// Footer.js
import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';

import { NavigationMenu } from '../';

import styles from './Footer.module.scss';
const cx = classNames.bind(styles);

export default function Footer({
  siteTitle,
  menuItems,
  navOneMenuItems,
  navTwoMenuItems,
  resourcesMenuItems,
}) {
  return (
    <>
      <footer className={cx('footer')}>
        <div className={cx('footer-inner')}>
          <div className={cx('container', styles.footerWrap)}>
            <div className={cx('footer-nav-contact-info')}>

              <div className={cx('resources')}>
                <h3>Connect With Print &amp; Copy</h3>
                <NavigationMenu className={cx('quick')} menuItems={resourcesMenuItems} />
              </div>
              
              <div className={cx('footer-nav')}>
                <h3>Services, Supplies, and Equipment</h3>
                <NavigationMenu className={cx('quick')} menuItems={menuItems} />
              </div>

              <div className={cx('contact-info')}>

              <div className={cx('logo')}>
                <Link href="/" title="Home" target='_blank' rel='noopener noreferrer'>
                  <Image
                    src="/logo-white.png"
                    width={150}
                    height={38}
                    alt="Cal Poly University logo"
                    // layout="responsive"
                  />
                </Link>
              </div>
                <p>Robert E. Kennedy Library</p>
                <p>1 Grand Ave., Building 15</p>
                <p>San Luis Obispo, CA 93407</p>

                <a href="tel:8057562399" className={cx('phone')}>
                  805-756-2399
                </a>
              </div>
            </div>

            <div className={cx('nav-one')}>
              <NavigationMenu className={cx('nav')} menuItems={navOneMenuItems} />
            </div>

            <div className={cx('nav-two')}>
              <NavigationMenu className={cx('nav')} menuItems={navTwoMenuItems} />
            </div>

            <div className={cx('copyright')}>
              &copy; {new Date().getFullYear()} {siteTitle ?? 'California Polytechnic State University'}
            </div>
          </div>

          <div className={cx('footer-mountains')}></div>
        </div>
      </footer>
    </>
  );
}
