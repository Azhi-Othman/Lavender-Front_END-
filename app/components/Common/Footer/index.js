/**
 *
 * Footer
 *
 */

import React from 'react';

import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

import Newsletter from '../../../containers/Newsletter';

const Footer = () => {

  
  const infoLinks = [
    { id: 0, name: 'پەیوەندیکردن', to: '/contact' },
    ,
    { id: 2, name: 'بازاڕیکردن', to: '/shipping' }
  ];

  const footerBusinessLinks = (
    <ul className='support-links'>
      <li className='footer-link'>
        <Link to='/dashboard'>زانیاری تەواوی وەکاونتەکەت</Link>
      </li>
      <li className='footer-link'>
        <Link to='/dashboard/orders'>داواکاری</Link>
      </li>
    </ul>
  );

  const footerLinks = infoLinks.map(item => (
    <li key={item.id} className='footer-link'>
      <Link key={item.id} to={item.to}>
        {item.name}
      </Link>
    </li>
  ));

  return (
    <footer className='footer'>
      <Container>
        <div className='footer-content'>
          <div className='footer-block'>
            <div className='block-title'>
              <h2>خزمەتگوزاری تایبەت</h2>
            </div>
            <div className='block-content'>
              <ul>{footerLinks}</ul>
            </div>
          </div>
          <div className='footer-block'>
            <div className='block-title'>
              <h2>بەستەرەکان</h2>
            </div>
            <div className='block-content'>
              <ul>{footerLinks}</ul>
            </div>
          </div>
          <div className='footer-block'>
            <div className='block-title'>
              <h2>ئاگاداری دواین بەرهەمەکان ببە</h2>
              <Newsletter />
            </div>
          </div>
        </div>
        <div className='footer-copyright'>
          <span>© {new Date().getFullYear()} Lavender Store</span>
        </div>
        <ul className='footer-social-item'>
          <li>
            <a href='/#facebook' rel='noreferrer noopener' target='_blank'>
              <span className='facebook-icon' />
            </a>
          </li>
          <li>
            <a href='/#instagram' rel='noreferrer noopener' target='_blank'>
              <span className='instagram-icon' />
            </a>
          </li>
          <li>
            <a href='/#pinterest' rel='noreferrer noopener' target='_blank'>
              <span className='pinterest-icon' />
            </a>
          </li>
          <li>
            <a href='/#twitter' rel='noreferrer noopener' target='_blank'>
              <span className='twitter-icon' />
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
