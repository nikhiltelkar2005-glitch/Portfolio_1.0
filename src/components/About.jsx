import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* About Me Title Section */}
        <div className="about-title-container">
          <h2 className="about-main-title">
            About Me
          </h2>
          <div className="about-title-underline"></div>
        </div>

        {/* About Me Content Split */}
        <div className="about-bio-layout">
          <div className="about-bio-text">
            <h3 className="about-subtitle">Who I Am</h3>
            <p className="about-paragraph">
              Hi, I'm Nikhil  an aspiring software developer passionate about building practical and user focused web applications.
            </p>
            <p className="about-paragraph">
              I'm currently building projects including a real time chatting platform, a blog publishing website, and a Reddit style community platform for my college all centered around interaction, usability, and clean design.
            </p>
            <p className="about-paragraph">
              I have experience with C, C++, Python, and modern web technologies like HTML, CSS, JavaScript, React, and Node.js. I enjoy exploring different parts of development and continuously improving my skills by building and experimenting.
            </p>
            <p className="about-paragraph">
              I'm particularly interested in creating applications that are not just functional, but also intuitive and engaging to use.
            </p>
            <p className="about-paragraph">
              I believe that good software is built through consistency, curiosity, and attention to detail and that's what I aim to bring into every project I work on.
            </p>
          </div>

          <div className="about-bio-image-wrapper">
            <div className="about-image-container">
              <div className="about-image-glow"></div>

              <div className="about-image-card">
                <img
                  src="/developer.png"
                  alt="Developer Coding"
                  className="about-dev-image"
                />
                <div className="about-image-overlay"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Projects */}
        <div className="about-section-container">
          <div className="about-card">
            <div className="about-card-glow"></div>
            <h3 className="about-section-title">Upcoming Projects (currently working on)</h3>

            <ul className="about-list">
              <li className="about-list-item">
                <div className="about-list-icon"><ArrowRight size={18} /></div>
                <div className="about-list-content">
                  <h4>Postly</h4>
                  <p>
                    Building a modern blog publishing platform designed for seamless content creation and sharing. Focused on clean design, user experience, and efficient content management, the platform enables users to express ideas and connect through engaging digital content.
                  </p>
                </div>
              </li>

              <li className="about-list-item">
                <div className="about-list-icon"><ArrowRight size={18} /></div>
                <div className="about-list-content">
                  <h4>Rabbit</h4>
                  <p>
                    Building an anonymous, Reddit-style community platform designed exclusively for my college. Rabbit allows users to share thoughts, ask questions, and engage in discussions without revealing their identity, creating a space for open and honest communication within the campus.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* My Approach */}
        <div className="about-large-margin">
          <div className="about-card">
            <h3 className="about-section-title">My Approach</h3>
            <ul className="about-approach-list">
              {[
                "User centered design is at the core of everything I create",
                "I prioritize performance and accessibility in all my projects",
                "Clean, maintainable code is essential for successful long-term projects",
                "Continuous learning and staying updated with latest technologies",
                "Leveraging AI to finish projects faster and enhance productivity by 10x"
              ].map((item, idx) => (
                <li key={idx} className="about-list-item">
                  <div className="about-list-icon"><ArrowRight size={18} /></div>
                  <span className="about-approach-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Achievements */}
        <div className="about-large-margin">
          <h2 className="about-section-title-large">Achievements</h2>

          <div className="about-grid">
            <div className="about-card">
              <div className="about-achievement-header">
                <h4 className="about-achievement-title">HACKRON – 24-Hour Hackathon</h4>
              </div>
              <p className="about-achievement-organization">Newton School of Technology</p>
              <p className="about-achievement-text">
                Participated in HACKRON, a 24-hour hackathon where I collaborated with a team to build a solution based on Agentic AI. Focused on developing an AI-driven system for MSMEs aimed at automating repetitive tasks and improving operational efficiency through rapid problem-solving.
              </p>
            </div>

            <div className="about-card">
              <div className="about-small-glow"></div>
              <div className="about-achievement-header">
                <h4 className="about-achievement-title">8-Hour Hackathon</h4>
              </div>
              <p className="about-achievement-organization">Vedam School of Technology</p>
              <p className="about-achievement-text">
                Participated in an 8-hour hackathon, collaborating with a team to develop a solution within a constrained timeframe. The experience strengthened my ability to think critically, adapt quickly, and deliver results efficiently in a high-pressure environment.
              </p>
            </div>

            <div className="about-card">
              <div className="about-achievement-header">
                <h4 className="about-achievement-title">Trading Simulation</h4>
              </div>
              <p className="about-achievement-organization">Vedam School of Technology</p>
              <p className="about-achievement-text">
                Gained hands-on exposure to market dynamics, trading strategies, and risk management through this trading simulation. This experience enhanced my analytical thinking and ability to make informed decisions in dynamic environments.
              </p>
            </div>

            <div className="about-card">
              <div className="about-achievement-header">
                <h4 className="about-achievement-title">Competitive Programming</h4>
              </div>
              <p className="about-achievement-organization">
                <a href="https://codeforces.com/profile/NICKCODE17" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'none', color: 'inherit' }}>
                  Codeforces <ExternalLink size={14} />
                </a>
              </p>
              <p className="about-achievement-text">
                Actively practicing competitive programming on Codeforces, currently holding a rating of 841 and consistently working to improve. Through regular contests, I am developing strong algorithmic thinking and the ability to perform under pressure.
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="about-section-container">
          <h2 className="about-section-title-large">Education</h2>

          <div className="about-stack-list">
            <div className="about-card">
              <div className="about-small-glow"></div>
              <div className="about-achievement-header">
                <h4 className="about-edu-title">Bachelor's in Information Technology</h4>
                <span className="about-edu-year">2025-2029</span>
              </div>
              <p className="about-edu-org">Newton School of Technology</p>
              <p className="about-edu-text">
                Pursuing a comprehensive undergraduate program focused on core and emerging areas of Information Technology, including software development, data structures, algorithms, web technologies, and real-world project-based learning.
              </p>
            </div>

            <div className="about-card">
              <div className="about-achievement-header">
                <h4 className="about-edu-title">Higher Secondary Education</h4>
                <span className="about-edu-year">2022-2024</span>
              </div>
              <p className="about-edu-org">Dr. Shamanur Shivashankarappa National Public School & PU College</p>
              <p className="about-edu-text">
                I completed my higher secondary education (11th and 12th grade) from Dr. Shamanur Shivashankarappa National Public School & PU College between 2022 and 2024. During this time, I focused on building a strong academic foundation while also preparing for competitive exams alongside my studies at Aakash Institute. This phase helped me develop discipline, problem-solving skills, and a deeper interest in technology and engineering.
              </p>
            </div>

            <div className="about-card">
              <div className="about-achievement-header">
                <h4 className="about-edu-title">Primary & Secondary Education</h4>
                <span className="about-edu-year">2011-2022</span>
              </div>
              <p className="about-edu-org">Bapuji Higher Primary CBSE English Medium School</p>
              <p className="about-edu-text">
                I completed my primary and secondary education (1st to 10th grade) at Bapuji Higher Primary CBSE English Medium School from 2011 to 2022. During these formative years, I developed a strong academic foundation, curiosity for learning, and essential problem solving skills that later shaped my interest in technology and development.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
