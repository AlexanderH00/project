import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const Experience = () => {
  const workExperience = [
    {
      title: "Ground Handling Service Agent",
      company: "Dortmund Handling Service (DHS)",
      period: "March 2023 - Present",
      location: "Frankfurt Airport",
      description: [
        "Managed passenger check-in, boarding, and baggage processes for multiple airlines",
        "Resolved complex customer issues while maintaining high service standards",
        "Coordinated with various airport departments to ensure smooth flight operations",
        "Handled special service requests and provided assistance to passengers with reduced mobility",
        "Maintained accurate documentation and compliance with aviation regulations"
      ]
    },
    {
      title: "Sales Assistant",
      company: "LaGrace Communication Company",
      period: "September 2021 - February 2022",
      location: "Kharkiv, Ukraine",
      description: [
        "Provided exceptional customer service in a fast-paced retail environment",
        "Maintained product knowledge to effectively assist customers with purchases",
        "Processed sales transactions and managed inventory",
        "Contributed to store merchandising and visual displays",
        "Consistently met and exceeded sales targets"
      ]
    },
    {
      title: "IT Support (Intern)",
      company: "Ashard Energy Company Limited",
      period: "February 2021 - April 2021",
      location: "Port Harcourt, Rivers State, Nigeria",
      description: [
        "Provided technical support to end-users, troubleshooting hardware and software issues",
        "Assisted with network maintenance and security updates",
        "Documented technical procedures and created user guides",
        "Participated in the implementation of new IT systems"
      ]
    }
  ];

  const education = [
    {
      degree: "MSc in Computer Science",
      institution: "Philipps-Universität Marburg",
      period: "2023 - Present",
      location: "Marburg, Hessen, Germany",
    },
    {
      degree: "BSc in Computer Science",
      institution: "Kharkiv National University of Radio Electronics",
      period: "2018 - 2022",
      location: "Kharkiv, Ukraine",
      description: "Specialized in Machine Learning and Data Science. Thesis: Simulation of Resource Consumption Dynamics in Distributed Systems Using Cellular Automata."
    }
  ];

  const skills = {
    technical: [
      "JavaScript/TypeScript", "React.js", "Node.js", "Python", 
      "TensorFlow", "SQL/NoSQL Databases", "RESTful APIs", 
      "Git", "Docker", "AWS", "HTML/CSS", "Tailwind CSS"
    ],
    soft: [
      "Problem Solving", "Team Collaboration", "Communication", 
      "Time Management", "Adaptability", "Critical Thinking"
    ],
    languages: [
      "English (Fluent)", "German (B1)"
    ]
  };

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Experience</h1>
        <p className="text-slate-300 mb-8 max-w-3xl">
          My professional journey includes a mix of technical roles and customer-facing positions,
          which have helped me develop a well-rounded skill set in both technology and communication.
        </p>
      </motion.div>

      {/* Work Experience */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
            <Briefcase size={24} />
          </div>
          <h2 className="text-2xl font-bold text-white">Work Experience</h2>
        </div>

        <div className="space-y-8">
          {workExperience.map((job, index) => (
            <motion.div
              key={index}
              className="relative pl-8 border-l-2 border-slate-700"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
              <div className="card">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <p className="text-blue-400">{job.company}</p>
                  </div>
                  <div className="text-slate-400 mt-2 md:mt-0 text-sm md:text-right">
                    <p>{job.period}</p>
                    <p>{job.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.description.map((item, i) => (
                    <li key={i} className="text-slate-300 flex items-start gap-2">
                      <div className="min-w-[6px] h-1.5 rounded-full bg-blue-500 mt-2"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
            <GraduationCap size={24} />
          </div>
          <h2 className="text-2xl font-bold text-white">Education</h2>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="relative pl-8 border-l-2 border-slate-700"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
              <div className="card">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-blue-400">{edu.institution}</p>
                  </div>
                  <div className="text-slate-400 mt-2 md:mt-0 text-sm md:text-right">
                    <p>{edu.period}</p>
                    <p>{edu.location}</p>
                  </div>
                </div>
                <p className="text-slate-300">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
            <Award size={24} />
          </div>
          <h2 className="text-2xl font-bold text-white">Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.technical.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.soft.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((language, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm"
                >
                  {language}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resume Download */}
      <motion.section
        className="bg-slate-800 rounded-lg p-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-xl font-semibold mb-4">Download My Resume</h2>
        <p className="text-slate-300 mb-4">
          For a complete overview of my experience and qualifications, you can download my resume.
        </p>
        <a 
          href="/Alexander_Harry_Resume.pdf" target="_blank" download
          className="btn btn-primary inline-flex items-center gap-2"
        >
          Download Resume
        </a>
      </motion.section>
    </div>
  );
};

export default Experience;