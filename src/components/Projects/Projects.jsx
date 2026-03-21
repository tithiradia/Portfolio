import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaCode, FaPlay, FaTimes } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [selectedVideoProject, setSelectedVideoProject] = useState(null)

  const projects = [
    {
      title: 'VaaniMitra – Interactive Tutor for Indian Languages',
      category: 'ai',
      description: 'An AI-powered multilingual Indian language learning platform with web and Flutter apps featuring level-based handwriting, vocabulary, and conversational learning modules.',
      image: 'vaanimitra',
      tags: ['MongoDB', 'Flutter', 'Python', 'JavaScript', 'IndicTrans2', 'Levenshtein'],
      github: 'https://github.com/Puja-Rachchh/VaaniMitra_Mobile_App',
      demo: null,
      videoUrl: 'https://drive.google.com/file/d/1zBxZ3xZlQyUbLdiYJZ5ETifvFWeFH5Jd/view?usp=drivesdk',
      featured: true,
      highlights: [
        'Integrated IndicTrans2 translation model for accurate multi-language translation',
        'Implemented Levenshtein distance algorithm for pronunciation assessment',
        'Designed interactive UX with letter tracing and accuracy-based progression'
      ]
    },
    {
      title: 'Voicely – AI Feedback Collection & Analysis Chatbot',
      category: 'ai',
      description: 'An AI-powered feedback collection chatbot built with n8n and a custom web-based chat interface to enable real-time, conversational feedback gathering and automated analysis.',
      image: 'feedback',
      tags: ['n8n', 'HTML', 'CSS', 'JavaScript', 'Chatbot', 'Automation'],
      github: 'https://github.com',
      demo: null,
      videoUrl: 'https://drive.google.com/file/d/1xLts0ZkaS8nzdt47y9lviXc30nhm2aMs/view?usp=drive_link',
      featured: true,
      highlights: [
        'Developed conversational chatbot flows in n8n for structured, multi-step feedback collection',
        'Integrated an AI agent with session-based memory to handle issues, suggestions, and follow-up questions',
        'Implemented webhook-based communication and Google Sheets integration for organized feedback storage',
        'Enabled structured reporting and actionable insights through automated feedback summarization'
      ]
    },
    {
      title: 'Intern Activity Intelligence & Productivity Analytics Platform',
      category: 'ai',
      description: 'An end-to-end analytics platform to track and evaluate intern productivity from daily activity reports using ML-ready features and a data warehouse for reporting.',
      image: 'imagecaption',
      tags: ['Python', 'Machine Learning', 'Data Engineering', 'SQL', 'Pandas', 'PySpark', 'Data Warehouse'],
      github: 'https://github.com',
      demo: null,
      videoUrl: '',
      featured: true,
      highlights: [
        'Designed a unified productivity dataset of 16,856+ records across 20 interns over 72 days',
        'Engineered 10+ analytical features including score_pct, completion_rate, score_vs_cohort, and activity_category',
        'Performed deep EDA to uncover performance gaps across technologies and identify data quality issues',
        'Built ML-ready features and a Star Schema warehouse for scalable performance and productivity reporting'
      ]
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const getVideoEmbedUrl = (url) => {
    if (!url) return ''
    if (url.includes('drive.google.com')) {
      return url.replace('/view', '/preview')
    }
    return url
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Some of my recent work and side projects
          </motion.p>
        </div>

        <motion.div 
          className="filter-buttons"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              layout
            >
              {project.featured && (
                <div className="featured-badge">Featured</div>
              )}
              
              <div className="project-image">
                <div className={`project-placeholder ${project.image}`}>
                  <FaCode />
                  <span>{project.title}</span>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    {project.github && (
                      <a 
                        href={project.github} 
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View GitHub repository"
                      >
                        <FaGithub />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View live demo"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                {project.highlights && (
                  <ul className="project-highlights">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                )}
                
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">{tag}</span>
                  ))}
                </div>

                {project.videoUrl && (
                  <button
                    className="project-video-btn"
                    onClick={() => setSelectedVideoProject(project)}
                  >
                    <FaPlay />
                    <span>Watch Video</span>
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedVideoProject && (
            <motion.div
              className="project-video-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedVideoProject(null)}
            >
              <motion.div
                className="project-video-modal"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="project-video-modal-close"
                  onClick={() => setSelectedVideoProject(null)}
                  aria-label="Close video"
                >
                  <FaTimes />
                </button>

                <h3 className="project-video-title">{selectedVideoProject.title}</h3>

                <div className="project-video-wrapper">
                  <iframe
                    src={getVideoEmbedUrl(selectedVideoProject.videoUrl)}
                    title={selectedVideoProject.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects
