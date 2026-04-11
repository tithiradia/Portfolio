import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCertificate, FaAward, FaGraduationCap, FaCode, FaCloud, FaDatabase, FaBrain, FaTimes, FaEye } from 'react-icons/fa'
import './Certificates.css'

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  const certificates = [
    {
      icon: <FaCode />,
      title: 'Data Structure and Algorithms using JAVA',
      issuer: 'NPTEL (IIT Madras)',
      date: 'October 2024',
      credentialId: 'NPTEL24CS93156',
      skills: ['Data Structures', 'Algorithms', 'Java Programming', 'Problem Solving'],
      description: 'Elite + Silver Medal certified course covering fundamental data structures, algorithm design techniques, complexity analysis, and practical implementation in Java programming language',
      pdfPath: '/certificates/dsa-java-nptel.pdf'
    },
    {
      icon: <FaDatabase />,
      title: 'Database Management System',
      issuer: 'NPTEL (IIT Kharagpur)',
      date: 'September 2024',
      credentialId: 'NPTEL24CS84237',
      skills: ['SQL', 'Database Design', 'DBMS Concepts', 'Query Optimization'],
      description: 'Comprehensive study of database management systems covering relational models, SQL queries, normalization, ACID properties, transactions, and database administration',
      pdfPath: '/certificates/dbms-nptel.pdf'
    },
    {
      icon: <FaBrain />,
      title: 'Machine Learning with Python',
      issuer: 'IBM (Coursera)',
      date: 'July 2024',
      skills: ['Machine Learning', 'Python', 'Scikit-learn', 'Model Evaluation'],
      description: 'Professional certificate covering supervised and unsupervised learning algorithms, regression, classification, clustering techniques, and model deployment using Python and scikit-learn',
      pdfPath: '/certificates/ibm-ml-python.pdf'
    },
    {
      icon: <FaBrain />,
      title: 'Introduction to Deep Learning & Neural Networks with Keras',
      issuer: 'IBM (Coursera)',
      date: 'June 2024',
      skills: ['Deep Learning', 'Keras', 'Neural Networks', 'Model Training'],
      description: 'Specialized course covering neural network fundamentals, backpropagation algorithms, convolutional neural networks, recurrent networks, and practical implementation using Keras framework',
      pdfPath: '/certificates/ibm-keras-coursera.pdf'
    },
    {
      icon: <FaCloud />,
      title: 'Microsoft Certified: Azure AI Fundamentals',
      issuer: 'Microsoft',
      date: 'November 2024',
      skills: ['Azure AI Services', 'Machine Learning', 'Computer Vision', 'Natural Language Processing'],
      description: 'Official Microsoft certification demonstrating foundational knowledge of AI workloads, machine learning principles, computer vision capabilities, and conversational AI on Microsoft Azure platform',
      pdfPath: '/certificates/azure-ai-fundamentals.pdf'
    },
    {
      icon: <FaBrain />,
      title: 'Getting Started with Deep Learning',
      issuer: 'NVIDIA Deep Learning Institute',
      date: 'August 2024',
      skills: ['Deep Learning', 'Neural Networks', 'TensorFlow', 'GPU Computing'],
      description: 'Hands-on workshop covering deep learning fundamentals, neural network architectures, training techniques, and practical implementation using NVIDIA GPU-accelerated computing',
      pdfPath: '/certificates/nvidia-deep-learning.pdf'
    },
    {
      icon: <FaBrain />,
      title: 'Develop Generative AI Applications: Get Started',
      issuer: 'IBM (Coursera)',
      date: 'March 2026',
      skills: ['Generative AI', 'Prompt Engineering', 'AI Workflows'],
      description: 'Introductory course on building generative AI applications, covering core concepts, responsible AI practices, and practical workflows for integrating foundation models into solutions',
      pdfPath: '/certificates/ibm-develop-generative-ai.pdf'
    },
    {
      icon: <FaBrain />,
      title: 'Build RAG Applications: Get Started',
      issuer: 'IBM (Coursera)',
      date: 'March 2026',
      skills: ['RAG', 'Retrievers', 'LLM Integration'],
      description: 'Hands-on course focused on designing and implementing retrieval augmented generation (RAG) applications using large language models and custom knowledge sources',
      pdfPath: '/certificates/ibm-build-rag-applications.pdf'
    },
    {
      icon: <FaDatabase />,
      title: 'Vector Databases for RAG: An Introduction',
      issuer: 'IBM (Coursera)',
      date: 'April 2026',
      skills: ['Vector Databases', 'Embeddings', 'Similarity Search'],
      description: 'Course introducing vector databases for retrieval augmented generation workloads, including embeddings, indexing strategies, and semantic similarity search',
      pdfPath: '/certificates/ibm-vector-databases-intro.pdf'
    },
    {
      icon: <FaDatabase />,
      title: 'Advanced RAG with Vector Databases and Retrievers',
      issuer: 'IBM (Coursera)',
      date: 'April 2026',
      skills: ['Advanced RAG', 'Vector Indexing', 'Hybrid Retrieval'],
      description: 'Advanced course on building production-ready RAG systems using vector databases and retrievers, covering optimization, evaluation, and robust retrieval strategies',
      pdfPath: '/certificates/ibm-advanced-rag-vector-databases.pdf'
    }
  ]

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Certifications & Courses
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Continuous learning and skill development through verified certifications
          </motion.p>
        </div>

        {/* Certificates Grid */}
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="certificate-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="certificate-card-inner">
                <div className="certificate-header">
                  <div className="certificate-icon">{cert.icon}</div>
                  <FaAward className="verified-badge" />
                </div>

                <div className="certificate-body">
                  <h3 className="certificate-title">{cert.title}</h3>
                  <p className="certificate-issuer">{cert.issuer}</p>
                  <p className="certificate-date">Issued: {cert.date}</p>
                  <p className="certificate-description">{cert.description}</p>

                  <div className="certificate-skills">
                    {cert.skills.map((skill, i) => (
                      <span key={i} className="skill-tag">{skill}</span>
                    ))}
                  </div>

                  <div className="certificate-footer">
                    <div className="credential-id">
                      <span className="credential-label">Certificate ID:</span>
                      <span className="credential-value">{cert.credentialId}</span>
                    </div>
                    <button 
                      className="view-btn"
                      onClick={() => setSelectedCertificate(cert)}
                    >
                      <FaEye />
                      <span>View Certificate</span>
                    </button>
                  </div>
                </div>

                <div className="certificate-ribbon">
                  <FaCertificate />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Preview Modal */}
        <AnimatePresence>
          {selectedCertificate && (
            <motion.div 
              className="certificate-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCertificate(null)}
            >
              <motion.div 
                className="certificate-modal"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="modal-close"
                  onClick={() => setSelectedCertificate(null)}
                >
                  <FaTimes />
                </button>

                <div className="modal-header">
                  <div className="modal-icon">{selectedCertificate.icon}</div>
                  <div>
                    <h3 className="modal-title">{selectedCertificate.title}</h3>
                    <p className="modal-issuer">{selectedCertificate.issuer}</p>
                  </div>
                </div>

                <div className="modal-body">
                  <div className="pdf-viewer">
                    <iframe
                      src={selectedCertificate.pdfPath}
                      title={selectedCertificate.title}
                      width="100%"
                      height="100%"
                    />
                  </div>
                  <div className="modal-info">
                    <p><strong>Issued:</strong> {selectedCertificate.date}</p>
                    <p><strong>Credential ID:</strong> {selectedCertificate.credentialId}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div 
          className="certificates-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FaGraduationCap className="cta-icon" />
          <h3 className="cta-title">Committed to Continuous Learning</h3>
          <p className="cta-text">
            Constantly upgrading skills and staying current with industry trends through 
            verified certifications and hands-on learning
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Certificates
