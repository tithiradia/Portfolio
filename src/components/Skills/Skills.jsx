import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaReact, FaNodeJs, FaPython, FaDatabase, FaGitAlt, FaDocker,
  FaHtml5, FaCss3Alt, FaJs, FaAws
} from 'react-icons/fa'
import { 
  SiTypescript, SiMongodb, SiPostgresql, SiRedis, SiTailwindcss,
  SiNextdotjs, SiExpress, SiGraphql, SiKubernetes, SiJenkins
} from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const skills = [
    { name: 'Python', icon: <FaPython />, level: 90 },
    { name: 'Machine Learning', icon: <FaDatabase />, level: 85 },
    { name: 'TensorFlow', icon: <FaReact />, level: 80 },
    { name: 'SQL', icon: <FaDatabase />, level: 85 },
    { name: 'HTML/CSS', icon: <FaHtml5 />, level: 88 },
    { name: 'JavaScript', icon: <FaJs />, level: 82 },
    { name: 'React', icon: <FaReact />, level: 78 },
    { name: 'Git', icon: <FaGitAlt />, level: 90 },
    { name: 'MongoDB', icon: <SiMongodb />, level: 75 },
    { name: 'Node.js', icon: <FaNodeJs />, level: 70 }
  ]

  const tools = [
    'Jupyter Notebook', 'VS Code', 'Git & GitHub', 'Google Colab', 
    'Kaggle', 'Pandas', 'NumPy', 'Scikit-learn', 'Power BI',
    'Tableau', 'MongoDB'
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Technologies and tools I work with
          </motion.p>
        </div>

        <motion.div
          className="skills-grid-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="skill-header">
                  <div className="skill-icon">{skill.icon}</div>
                  <span className="skill-name">{skill.name}</span>
                </div>
                <div className="skill-bar-container">
                  <motion.div 
                    className="skill-bar"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                  >
                    <span className="skill-percentage">{skill.level}%</span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="tools-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="tools-title">Tools & Libraries</h3>
          <div className="tools-grid">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                className="tool-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
