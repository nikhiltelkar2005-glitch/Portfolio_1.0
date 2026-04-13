import { ExternalLink, Eye, Github, ExternalLink as ExtLinkIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Projects.css'
import './Contact.css'

const Projects = () => {
  const projects = [
    {
      title: "Weather App",
      description: "A weather app that shows current and forecasted weather",
      tech: ["HTML/CSS", "OpenWeather API", "JavaScript"],
      github: "https://github.com",
      link: "https://weather.com",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Voice-Base-Navigation Chrome Extension",
      description: "A Chrome extension that allows users to navigate using voice commands. (Since It is a chrome extension there is no demo link, but you can use it through my git repo.)",
      tech: ["JavaScript", "Manifest.js", "Voice Commands"],
      github: "https://github.com",
      link: "#",
      image: "https://images.unsplash.com/photo-1588508065123-287b28e0139b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Tic-Tac-Toe",
      description: "A fun Game of X's and O's",
      tech: ["Javascript", "HTML/CSS"],
      github: "https://github.com",
      link: "#",
      image: "https://images.unsplash.com/photo-1621252178220-dca0df7cf9e3?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "IdeaVault",
      description: "An AI-powered platform that turns startup ideas into detailed PRDs in minutes, with collaborative editing, similarity search, and idea management to speed up product development.",
      tech: ["React 18", "TypeScript", "Tailwind CSS", "Shadcn/UI", "Framer Motion", "React Hook Form"],
      github: "https://github.com",
      link: "#",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "College Placement Predictor",
      description: "I Trained it on 10,000 students data, cleaned it, processed it, trained the ML model on it, Firstly i used linear Regression achieved 90% Accuracy, the used RFA (Random Forest Algorithm) and gained 99% Accuracy (Model is not Overfitting because of good database).",
      tech: ["Python", "scikit-learn", "pandas", "joblib"],
      github: "https://github.com",
      link: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Omegle for University",
      description: "A university-verified video chat platform that connects students in real-time using WebRTC and Socket.io. It ensures secure access through Clerk authentication, allowing only verified university users to join. Built with Next.js and hosted on Railway, it offers a safe, peer-to-peer chatting experience for students.",
      tech: ["Next.js", "WebRTC", "Socket.io", "Clerk JS"],
      github: "https://github.com",
      link: "#",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2074&auto=format&fit=crop"
    },
    {
      title: "Schedulo",
      description: "A productivity app that helps users organize tasks and projects",
      tech: ["Next JS", "Neon DB", "Clerk JS", "Postgresql", "Tailwind CSS", "Google Auth", "Google Cloud API"],
      github: "https://github.com",
      link: "#",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop"
    },
    {
      title: "Real Estate E-commerce",
      description: "A sleek and modern frontend built to showcase properties and real estate services with an emphasis on design, animations, and responsiveness.",
      tech: ["React", "Tailwind CSS", "Web3Forms", "ClerkJS", "React Toastify", "Framer Motion"],
      github: "https://github.com",
      link: "#",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop"
    },
    {
      title: "Portfolio 1.0",
      description: "My First Portfolio Website built on React and Tailwind CSS.",
      tech: ["React", "Tailwind CSS", "Vite", "Lucide React", "Email JS", "Framer Motion"],
      github: "https://github.com",
      link: "#",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop"
    }
  ]

  return (
    <div className="projects-section">
      <div className="projects-container">
        
        {/* Header Section */}
        <div className="projects-header">
          <h2 className="projects-title">My Projects</h2>
          <div className="projects-title-underline"></div>
          <p className="projects-subtitle">
            Explore my latest projects and discover the range of skills and technologies I work with.<br/>
            Each project represents a unique challenge and solution.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="projects-grid">
          {projects.map((project, i) => (
            <div key={i} className="project-card">
              
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-image-overlay">
                  <a href={project.link} className="project-icon-btn"><Eye size={20} /></a>
                  <a href={project.github} className="project-icon-btn"><Github size={20} /></a>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech-list">
                  {project.tech.map((tech, j) => (
                    <span key={j} className="project-tech-badge">{tech}</span>
                  ))}
                </div>

                <a href={project.link} className="project-footer-link">
                  View Project <ExternalLink size={16} />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="contact-cta-banner">
          <h3 className="contact-cta-title">Liked My Work? Let's Connect!</h3>
          <p className="contact-cta-text">I'm always excited to collaborate on new projects and discuss innovative ideas.</p>
          <Link to="/contact" className="contact-cta-btn">
            Let's Talk <ExternalLink size={18} />
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Projects
