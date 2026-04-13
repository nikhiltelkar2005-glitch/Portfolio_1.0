import { motion } from 'framer-motion'
import './Skills.css'

const Skills = () => {
  const skills = [
    { name: 'React', icon: 'https://img.icons8.com/color/144/react-native.png' },
    { name: 'Next.js', icon: 'https://img.icons8.com/nolan/144/nextjs.png' },
    { name: 'JavaScript', icon: 'https://img.icons8.com/color/144/javascript--v1.png' },
    { name: 'TypeScript', icon: 'https://img.icons8.com/color/144/typescript.png' },
    { name: 'HTML/CSS', icon: 'https://img.icons8.com/color/144/html-5.png', icon2: 'https://img.icons8.com/color/144/css3.png' },
    { name: 'Framer Motion', icon: 'https://img.icons8.com/color/144/framer.png' },
    { name: 'Tailwind CSS', icon: 'https://img.icons8.com/color/144/tailwindcss.png' },
    { name: 'NeonDB', icon: 'https://img.icons8.com/color/144/database.png' },
    { name: 'AI', icon: 'https://img.icons8.com/color/144/brain.png' },
    { name: 'AI Agents', icon: 'https://img.icons8.com/fluency/144/robot-2.png' },
    { name: 'PostgreSQL', icon: 'https://img.icons8.com/color/144/postgreesql.png' },
    { name: 'WebRTC', icon: 'https://img.icons8.com/fluency/144/globe-earth.png' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  }

  return (
    <section className="skills-section" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="skills-header"
      >
        <h2 className="skills-title">My Skills</h2>
        <p className="skills-subtitle">Here are some of the technologies I've been working with</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="skills-grid"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            className="skill-card group"
          >
            <div className="skill-icon-container">
              <img
                src={skill.icon}
                alt={skill.name}
                className="skill-icon"
                onError={(e) => { e.target.src = 'https://img.icons8.com/color/144/code.png' }}
              />
              {skill.icon2 && (
                <img
                  src={skill.icon2}
                  alt={skill.name}
                  className="skill-icon"
                  onError={(e) => { e.target.src = 'https://img.icons8.com/color/144/code.png' }}
                />
              )}
            </div>
            <h3 className="skill-name">{skill.name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Skills
