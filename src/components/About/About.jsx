import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaGraduationCap, FaLightbulb, FaRocket, FaUsers } from 'react-icons/fa'
import './About.css'

const About = () => {
  const highlights = [
    {
      icon: <FaCode />,
      title: 'Quick Learner',
      description: 'Rapidly adapting to new technologies and frameworks with hands-on practice'
    },
    {
      icon: <FaRocket />,
      title: 'Innovation Driven',
      description: 'Building AI-powered solutions with cutting-edge technologies'
    },
    {
      icon: <FaUsers />,
      title: 'Leadership & Management',
      description: 'Successfully managed and coordinated multiple technical and cultural events'
    },
    {
      icon: <FaLightbulb />,
      title: 'Problem Solving',
      description: 'Finding creative solutions to complex challenges'
    },
    {
      icon: <FaGraduationCap />,
      title: 'Continuous Learning',
      description: 'Always staying updated with latest technologies'
    }
  ]

  const stats = [
    { number: '5+', label: 'Academic Projects' },
    { number: '8+', label: 'Technologies Learned' },
    { number: '10+', label: 'Certifications' },
    { number: '5+', label: 'Hackathons Participated' },
    { number: '10+', label: 'Events Managed' }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Get to know more about my journey and expertise
          </motion.p>
        </div>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="about-heading">
              Passionate Developer & Creative Problem Solver
            </h3>
            <p className="about-paragraph">
              I am an aspiring AI Engineer currently pursuing my Bachelor’s degree in 
              Artificial Intelligence and Machine Learning. I am passionate about 
              building intelligent systems that can solve real-world problems using 
              data, algorithms, and modern AI technologies. My interests lie in 
              machine learning, deep learning, computer vision, and data-driven problem 
              solving.
            </p>
            <p className="about-paragraph">
              I am a curious and passionate learner who continuously explores new 
              technologies, research advancements, and industry practices in the 
              field of Artificial Intelligence. I enjoy experimenting with new tools, 
              improving my technical skills, and applying theoretical knowledge to 
              real-world applications. I believe that continuous learning and innovation 
              are key to growing in the rapidly evolving AI landscape.
            </p>
            <p className="about-paragraph">
              Beyond technical skills, I have demonstrated strong leadership abilities 
              through managing various technical and cultural events. This experience 
              has enhanced my teamwork, communication, and organizational skills, 
              which I believe are essential for collaborative AI projects.
            </p>
            <p className="about-paragraph">
              My goal is to contribute to impactful AI-driven solutions that can 
              improve efficiency, enhance decision-making, and create meaningful 
              technological advancements. I am always eager to collaborate, 
              learn from new challenges, and expand my expertise in artificial 
              intelligence, machine learning, and data science.
            </p>
          </motion.div>

          <motion.div 
            className="about-highlights"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="highlights-grid">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="highlight-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="highlight-icon">{item.icon}</div>
                  <h4 className="highlight-title">{item.title}</h4>
                  <p className="highlight-description">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="about-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
