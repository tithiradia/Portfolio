import React from 'react'
import { motion } from 'framer-motion'
import { FaTrophy, FaMedal, FaAward, FaStar, FaCrown, FaGem, FaRocket, FaFire } from 'react-icons/fa'
import './Achievements.css'

const Achievements = () => {
  const achievements = [
    {
      icon: <FaTrophy />,
      title: 'Top 50 Nationally - NEF Innovation Awards',
      organization: 'National Entrepreneurship Foundation',
      date: '2026',
      description: 'VaaniMitra project selected among the Top 50 nationally from 700+ submissions in the NEF Innovation Awards',
      category: 'Technical',
      highlights: [
        'Selected from 700+ project submissions nationwide',
        'Presented project in offline jury round held in Pune',
        'Recognized for innovative AI-based multilingual learning solution'
      ]
    },
    {
      icon: <FaAward />,
      title: 'College Representative - Vadodara Makerfest',
      organization: 'Vadodara Makerfest',
      date: '2026',
      description: 'Selected to represent the college at Vadodara Makerfest for presenting VaaniMitra, an AI-based multilingual Indian language learning project',
      category: 'Technical',
      highlights: [
        'Chosen among multiple innovative projects from the college',
        'Presented AI-based multilingual learning platform',
        'Showcased innovative approach to Indian language learning'
      ]
    }
  ]

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Achievements & Awards
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Celebrating milestones and recognitions throughout my journey
          </motion.p>
        </div>

        {/* Achievements Grid */}
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="achievement-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="achievement-card-header">
                <div className="achievement-icon-wrapper">
                  <div className="achievement-icon">{achievement.icon}</div>
                  <span className="achievement-category">{achievement.category}</span>
                </div>
                <span className="achievement-date">{achievement.date}</span>
              </div>
              
              <div className="achievement-card-body">
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-organization">{achievement.organization}</p>
                <p className="achievement-description">{achievement.description}</p>
                
                <ul className="achievement-highlights">
                  {achievement.highlights.map((highlight, i) => (
                    <li key={i}>
                      <FaGem className="highlight-icon" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="achievement-badge">
                <FaFire />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
