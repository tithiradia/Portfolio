import React from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendar } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: 'Undergraduate Graduate Student Fellowship',
      company: 'CHARUSAT',
      location: 'Gujarat, India',
      period: 'July 2025 - Present',
      type: 'Fellowship',
      responsibilities: [
        'Actively contributing to cutting-edge academic research and development initiatives within the AIML Department',
        'Collaborating with faculty and peers on innovative AI and Machine Learning projects to advance departmental goals',
        'Applying advanced team management and leadership skills to coordinate multi-disciplinary project teams',
        'Developing full-stack applications utilizing the MERN stack (MongoDB, Express.js, React, Node.js) for research and practical implementations',
        'Participating in workshops, seminars, and technical presentations to foster knowledge sharing and academic excellence'
      ]
    },
    {
      title: 'AI Engineer Intern',
      company: 'Phaze AI',
      location: 'Remote',
      period: 'May 2025 - June 2025',
      type: 'Internship',
      responsibilities: [
        'Developed and optimized AI-driven automation workflows leveraging GPT-4o, Python, FastAPI, and n8n to create intelligent decision-making systems',
        'Designed and implemented robust API integrations connecting multiple services for seamless data flow and processing',
        'Engineered scalable backend architectures and data extraction pipelines featuring advanced web scraping capabilities',
        'Built comprehensive data transformation, validation, and storage solutions using modern automation frameworks',
        'Deployed cloud-based APIs and microservices to ensure high availability and performance optimization',
        'Collaborated with cross-functional teams to deliver production-ready AI solutions that enhanced operational efficiency'
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Work Experience
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            My professional journey and achievements
          </motion.p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="timeline-dot"></div>
              <motion.div 
                className="experience-card"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="experience-header">
                  <div>
                    <h3 className="experience-title">{exp.title}</h3>
                    <p className="experience-company">
                      <FaBriefcase className="icon" />
                      {exp.company} • {exp.location}
                    </p>
                  </div>
                  <div className="experience-meta">
                    <span className="experience-period">
                      <FaCalendar className="icon" />
                      {exp.period}
                    </span>
                    <span className={`experience-type ${exp.type.toLowerCase()}`}>
                      {exp.type}
                    </span>
                  </div>
                </div>
                
                <ul className="experience-responsibilities">
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
