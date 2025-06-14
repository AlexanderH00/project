import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, LineChart, Cpu, Languages, Briefcase } from 'lucide-react';
import { Button } from '../components/Button'; // <-- Use custom Button!
import { Link } from 'react-router-dom';

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const skills = [
    { 
      icon: <Code size={24} />, 
      title: "Frontend Development", 
      items: ["React.js", "TypeScript", "HTML/CSS", "Tailwind CSS", "JavaScript"] 
    },
    { 
      icon: <Database size={24} />, 
      title: "Backend Development", 
      items: ["Node.js", "Express", "MongoDB", "SQL", "RESTful APIs"] 
    },
    { 
      icon: <LineChart size={24} />, 
      title: "Data Visualization", 
      items: ["D3.js", "Chart.js", "Tableau", "Power BI"] 
    },
    { 
      icon: <Cpu size={24} />, 
      title: "Machine Learning", 
      items: ["Python", "TensorFlow", "Scikit-learn", "Neural Networks"] 
    },
    { 
      icon: <Languages size={24} />, 
      title: "Languages", 
      items: ["English (Fluent)", "German (B1)"] 
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Hi, I'm <span className="text-blue-500">Alexander Harry</span>
              <br />Software Developer
            </h1>
            <p className="text-slate-300 text-lg md:text-xl">
              Passionate about creating innovative solutions through code. Specializing in web development, 
              machine learning, and data visualization.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button to="/projects" variant="primary" className="flex items-center gap-2">
                View Projects <ArrowRight size={16} />
              </Button>
              <Button to="/contact" variant="outline">
                Get in Touch
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-1"
          >
            <div className="bg-slate-900 rounded-2xl p-6 h-full">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Briefcase className="text-blue-400" size={24} />
                  <div>
                    <h3 className="font-medium text-white">Software Developer</h3>
                    
                  </div>
                </div>
                
                <div className="border-t border-slate-800 pt-4">
                  <h3 className="font-medium text-white mb-2">Education</h3>
                  <p className="text-slate-300">MSc in Computer Science</p>
                  <p className="text-slate-400 text-sm">Philipps-Universität Marburg</p>
                </div>
                
                <div className="border-t border-slate-800 pt-4">
                  <h3 className="font-medium text-white mb-2">Specialization</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs">Web Development</span>
                    <span className="px-2 py-1 bg-purple-500/10 text-purple-400 rounded text-xs">Machine Learning</span>
                    <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded text-xs">Data Visualization</span>
                    <span className="px-2 py-1 bg-orange-500/10 text-orange-400 rounded text-xs">UI/UX Design</span>
                  </div>
                </div>
                
                <div className="border-t border-slate-800 pt-4">
                  <h3 className="font-medium text-white mb-2">Contact</h3>
                  <p className="text-slate-300">alexharry27@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <motion.h2 
          className="section-title"
          {...fadeIn}
        >
          Skills & Expertise
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-lg">{skill.title}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="text-slate-300 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section>
        <motion.div 
          className="flex justify-between items-center mb-6"
          {...fadeIn}
        >
          <h2 className="section-title mb-0">Featured Projects</h2>
          <Link to="/projects" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
            View all <ArrowRight size={16} />
          </Link>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-2">Interactive Schedule Planner</h3>
            <p className="text-slate-300 mb-4">
              A web application for academic course scheduling with drag-and-drop interface and conflict detection.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs">React</span>
              <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded text-xs">Node.js</span>
              <span className="px-2 py-1 bg-purple-500/10 text-purple-400 rounded text-xs">MongoDB</span>
            </div>
            <Link to="/projects" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
              Learn more <ArrowRight size={16} />
            </Link>
          </motion.div>
          
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-2">CIFAR-10 Image Classification</h3>
            <p className="text-slate-300 mb-4">
              A machine learning project using convolutional neural networks for image classification.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs">Python</span>
              <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded text-xs">TensorFlow</span>
              <span className="px-2 py-1 bg-purple-500/10 text-purple-400 rounded text-xs">Keras</span>
            </div>
            <Link to="/projects" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
              Learn more <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Interested in working together?</h2>
          <p className="text-blue-100 mb-6">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          <Button to="/contact" variant="primary">
            Get in Touch
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;