import React from 'react'
import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    sections: [
      {
        title: 'Quick Links',
        links: [
          { label: 'Home', href: '#home' },
          { label: 'About', href: '#about' },
          { label: 'Projects', href: '#projects' },
          { label: 'Contact', href: '#contact' }
        ]
      },
      {
        title: 'Social',
        links: [
          { label: 'GitHub', href: 'https://github.com', external: true },
          { label: 'LinkedIn', href: 'https://linkedin.com', external: true },
        ]
      }
    ]
  }

  const socialIcons = [
    { icon: <FaGithub />, href: 'https://github.com', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaEnvelope />, href: '#contact', label: 'Email' }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">Portfolio</h3>
            <p className="footer-tagline">
              Building exceptional digital experiences with passion and precision.
            </p>
            <div className="footer-social">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="footer-social-link"
                  aria-label={social.label}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.sections.map((section, index) => (
            <div key={index} className="footer-section">
              <h4 className="footer-section-title">{section.title}</h4>
              <ul className="footer-links">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="footer-link"
                      target={link.external ? '_blank' : '_self'}
                      rel={link.external ? 'noopener noreferrer' : ''}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Portfolio. Made with <FaHeart className="heart-icon" /> by Tithi Radia
          </p>
          <p className="footer-credits">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
