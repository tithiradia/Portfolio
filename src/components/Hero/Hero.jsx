import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaFileDownload } from 'react-icons/fa'
import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/tithiradia', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/tithiradia/', label: 'LinkedIn' },
    { icon: <FaEnvelope />, href: '#contact', label: 'Email' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-circle circle-1"></div>
        <div className="hero-circle circle-2"></div>
      </div>

      <div className="container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-tag" variants={itemVariants}>
            <span className="tag-icon">👋</span>
            <span>Welcome to my portfolio</span>
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            Hi, I'm <span className="gradient-text">Tithi Radia</span>
          </motion.h1>

          <motion.div className="hero-subtitle-wrapper" variants={itemVariants}>
            <h2 className="hero-subtitle">
              <span className="typed-text">AI Engineer</span>
            </h2>
          </motion.div>

          <motion.p className="hero-description" variants={itemVariants}>
            I am an aspiring AI Engineer with a strong foundation in Artificial Intelligence and Machine Learning, 
            passionate about developing data-driven solutions to real-world challenges. 
            My interests lie in machine learning, deep learning, and intelligent system design. 
            As a curious and passionate learner, I constantly explore new technologies, frameworks, and research 
            to enhance my skills and contribute to impactful AI innovations.
          </motion.p>

          <motion.div className="hero-cta" variants={itemVariants}>
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="/Resume.pdf" className="btn btn-secondary" download>
              <FaFileDownload />
              <span>Download CV</span>
            </a>
          </motion.div>

          <motion.div className="hero-social" variants={itemVariants}>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="social-link"
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="image-container">
            <div className="image-bg"></div>
            <img 
              src="/my_image.jpg" 
              alt="Tithi Radia" 
              className="profile-image"
            />
          </div>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll Down</p>
      </div>
    </section>
  )
}

export default Hero
