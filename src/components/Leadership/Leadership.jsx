import React from 'react'
import { motion } from 'framer-motion'
import { FaTrophy, FaUsers, FaCalendarAlt, FaStar, FaMedal, FaChartLine } from 'react-icons/fa'
import './Leadership.css'

const Leadership = () => {
  const leadershipRoles = [
    {
      icon: <FaUsers />,
      role: 'Student Placement Coordinator',
      organization: 'Training & Placement Cell, CHARUSAT',
      period: 'March 2026 - Present',
      description: 'Coordinating campus recruitment drives and managing communication between 100+ students and companies',
      achievements: [
        'Collaborated with recruiters and managed schedules and eligibility criteria',
        'Organized placement activities for 100+ students',
        'Maintained accurate records of student participation and recruitment outcomes',
        'Facilitated smooth communication between companies and students'
      ]
    },
    {
      icon: <FaTrophy />,
      role: 'Core Member - Innovators Club',
      organization: 'CHARUSAT',
      period: 'July 2025 - Present',
      description: 'Actively involved in conceptualizing, planning, and executing department-level innovative events',
      achievements: [
        'Planned and executed department-level innovative events',
        'Promoted creative thinking among students',
        'Enhanced technical awareness through engaging activities',
        'Collaborated with team members to ensure successful event delivery'
      ]
    }
  ]

  const leadershipStats = [
    { icon: <FaCalendarAlt />, number: '8+', label: 'Events Organized' },
    { icon: <FaUsers />, number: '100+', label: 'Students Coordinated' },
    { icon: <FaStar />, number: '2', label: 'Active Leadership Roles' },
    { icon: <FaMedal />, number: '10+', label: 'Companies Connected' }
  ]

  const skills = [
    { name: 'Team Management', level: 90 },
    { name: 'Event Planning', level: 85 },
    { name: 'Communication', level: 92 },
    { name: 'Problem Solving', level: 88 },
    { name: 'Strategic Thinking', level: 85 },
    { name: 'Conflict Resolution', level: 80 }
  ]

  return (
    <section id="leadership" className="leadership">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Leadership & Event Management
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Leading teams and managing events with passion and dedication
          </motion.p>
        </div>

        {/* Leadership Stats */}
        <motion.div 
          className="leadership-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {leadershipStats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Leadership Roles Timeline */}
        <div className="leadership-content">
          <motion.div 
            className="leadership-timeline"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="content-heading">Leadership Roles & Responsibilities</h3>
            {leadershipRoles.map((role, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="timeline-icon">{role.icon}</div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h4 className="timeline-role">{role.role}</h4>
                    <span className="timeline-period">{role.period}</span>
                  </div>
                  <p className="timeline-organization">{role.organization}</p>
                  <p className="timeline-description">{role.description}</p>
                  <ul className="timeline-achievements">
                    {role.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Leadership Skills */}
          <motion.div 
            className="leadership-skills"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="content-heading">Leadership Skills</h3>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="leadership-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FaChartLine className="cta-icon" />
          <h3 className="cta-title">Ready to Lead Your Next Project?</h3>
          <p className="cta-text">
            Looking for a dedicated leader with proven event management and team coordination skills
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Leadership
