import { ExternalLink, Eye, Github, ExternalLink as ExtLinkIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Projects.css'
import './Contact.css'

const Projects = () => {
  const projects = [
    {
      title: "Portfolio 1.0",
      description: "My personal portfolio website built to showcase my projects and skills.",
      tech: ["React", "Tailwind CSS", "Vite", "Lucide React", "Framer Motion"],
      github: "https://github.com/nikhiltelkar2005-glitch/Portfolio_1.0",
      link: "https://portfolio-1-0-brown-pi.vercel.app",
      image: "/portfolio.png"
    },
    {
      title: "Gramora",
      description: "An innovative web platform built with modern technologies.",
      tech: ["React", "Node.js", "Express"],
      github: "https://github.com/nikhiltelkar2005-glitch/Gramora",
      link: "https://gramora.vercel.app",
      image: "/gramora.png"
    },
    {
      title: "OtakuFlow",
      description: "A dedicated platform for anime and manga enthusiasts to track and discover new content.",
      tech: ["React", "API Integration", "Tailwind CSS"],
      github: "https://github.com/nikhiltelkar2005-glitch/OtakuFlow",
      link: "https://otaku-flow.vercel.app",
      image: "/otakuflow.png"
    },
    {
      title: "Zenith Hackron",
      description: "Project developed for the Hackron 2026 hackathon, tackling specific problem statements.",
      tech: ["React", "Next.js", "Hackathon"],
      github: "https://github.com/nikhiltelkar2005-glitch/Zenith-Hackron",
      link: "https://zenith-hackron.vercel.app",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Rock Paper Scissors",
      description: "A classic interactive web-based game of Rock, Paper, Scissors.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/nikhiltelkar2005-glitch/ROCK_Paper_Scissors_Game",
      link: "https://rock-paper-scissors-game-cyan-mu.vercel.app",
      image: "/rock-paper-scissors.jpg"
    },
    {
      title: "Book Media Library",
      description: "A digital library application to manage and discover books and other media.",
      tech: ["React", "JavaScript", "CSS"],
      github: "https://github.com/nikhiltelkar2005-glitch/Book-Media-Library",
      link: "https://book-media-library.vercel.app",
      image: "/book-media.png"
    },
    {
      title: "Travel Booking Website",
      description: "A comprehensive travel booking platform allowing users to find and book their perfect trips.",
      tech: ["React", "Tailwind CSS", "Frontend"],
      github: "https://github.com/nikhiltelkar2005-glitch/Travel_booking_website",
      link: "https://nirman-2-0.vercel.app",
      image: "/travel-booking.jpg"
    },
    {
      title: "CultStory",
      description: "A web application for sharing and discovering cultural stories and experiences.",
      tech: ["React", "JavaScript", "HTML/CSS"],
      github: "https://github.com/nikhiltelkar2005-glitch/CultStory",
      link: "https://cultstory.vercel.app",
      image: "/cultstory.png"
    },
    {
      title: "E-commerce Website",
      description: "A full-featured e-commerce storefront with product listings, cart functionality, and checkout.",
      tech: ["React", "Commerce", "State Management"],
      github: "https://github.com/nikhiltelkar2005-glitch/E-commerce_website",
      link: "https://e-commerce-website-five-puce.vercel.app",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop"
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
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-icon-btn"><Eye size={20} /></a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-icon-btn"><Github size={20} /></a>
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

                {/* Mobile action buttons (visible on screens < 1024px) */}
                <div className="project-mobile-actions">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-mobile-action-btn demo">
                    <Eye size={16} /> Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-mobile-action-btn code">
                    <Github size={16} /> Code
                  </a>
                </div>

                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-footer-link">
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
