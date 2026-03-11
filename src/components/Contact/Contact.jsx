import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'tithi.radia@gmail.com',
      link: 'mailto:tithi.radia@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+91 9428290181',
      link: 'tel:+919428290181'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Charusat University, Gujarat, India',
      link: null
    }
  ]

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/tithiradia', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/tithiradia/', label: 'LinkedIn' },
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let's connect and collaborate on exciting AI projects!
          </motion.p>
        </div>

        <div className="contact-content">
          <motion.div 
            className="contact-info-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-intro">
              <h3 className="contact-heading">Let's Work Together!</h3>
              <p className="contact-text">
                I'm actively seeking opportunities in AI/ML engineering and open to freelance projects. 
                Whether you have an innovative idea, need help with machine learning implementation, 
                or want to discuss potential collaborations, I'd love to hear from you!
              </p>
            </div>

            <div className="contact-info-cards">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="info-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-content">
                    <h4 className="info-title">{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="info-value">{info.value}</a>
                    ) : (
                      <p className="info-value">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="contact-social">
              <p className="social-text">Connect with me:</p>
              <div className="social-links">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    className="social-link"
                    aria-label={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div 
              className="contact-cta"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="cta-text">Ready to start a conversation?</p>
              <a href="mailto:tithi.radia@gmail.com" className="cta-button">
                <FaEnvelope />
                <span>Send me an email</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
