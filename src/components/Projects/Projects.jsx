import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      title: 'VaaniMitra – Interactive Tutor for Indian Languages',
      category: 'ai',
      description: 'An AI-powered multilingual Indian language learning platform with web and Flutter apps featuring level-based handwriting, vocabulary, and conversational learning modules.',
      image: 'vaanimitra',
      tags: ['MongoDB', 'Flutter', 'Python', 'JavaScript', 'IndicTrans2', 'Levenshtein'],
      github: 'https://github.com/Puja-Rachchh/VaaniMitra_Mobile_App',
      demo: null,
      featured: true,
      highlights: [
        'Integrated IndicTrans2 translation model for accurate multi-language translation',
        'Implemented Levenshtein distance algorithm for pronunciation assessment',
        'Designed interactive UX with letter tracing and accuracy-based progression'
      ]
    },
    {
      title: 'AI-Powered Feedback Analysis System',
      category: 'ai',
      description: 'An intelligent automation system built with n8n that collects user feedback through interactive conversations, analyzes sentiment and quality, and provides actionable improvement suggestions.',
      image: 'feedback',
      tags: ['n8n', 'Python', 'NLP', 'Automation', 'AI', 'Sentiment Analysis'],
      github: 'https://github.com',
      demo: null,
      featured: true,
      highlights: [
        'Automated conversational feedback collection with intelligent question flow',
        'AI-powered sentiment analysis to categorize feedback quality',
        'Generated actionable insights and improvement recommendations',
        'Seamless workflow automation reducing manual analysis time'
      ]
    },
    {
      title: 'Image Captioning with Deep Learning',
      category: 'ai',
      description: 'Advanced deep learning model that generates descriptive captions for images using VGG16 and LSTM networks, trained on the Flickr8k dataset achieving impressive BLEU scores.',
      image: 'imagecaption',
      tags: ['Python', 'TensorFlow', 'CNN', 'LSTM', 'NLP', 'VGG16'],
      github: 'https://github.com',
      demo: null,
      featured: true,
      highlights: [
        'Trained VGG16 model for robust image feature extraction',
        'Implemented CNN-LSTM architecture for image-to-text generation',
        'Achieved BLEU score of 0.546880 over 45 training epochs',
        'Applied NLP techniques for natural language caption generation'
      ]
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
