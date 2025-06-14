import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Interactive Schedule Planner for Academic Courses",
      description: "A web application that allows students to plan their academic schedules with a drag-and-drop interface, conflict detection, and course recommendations.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      image: "https://images.pexels.com/photos/3243090/pexels-photo-3243090.jpeg",
    },
    {
      title: "Web-Based Restaurant Data Display Application",
      description: "A web application that displays restaurant data with filtering and sorting capabilities, using React and a RESTful API.",
      technologies: ["React", "JavaScript", "CSS", "RESTful API"],
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
      github: "https://github.com/AlexanderH00/Restaurant-Data-Display-Application",
    },
    {
      title: "Personal Portfolio Website",
      description: "A responsive portfolio website showcasing my projects and skills, built with React and Tailwind CSS.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
      github: "https://github.com/AlexanderH00/project",
      live: "alexanderharry.com"
    },
    {
      title: "CIFAR-10 Image Classification Using CNN",
      description: "A machine learning project that uses convolutional neural networks to classify images from the CIFAR-10 dataset.",
      technologies: ["Python", "TensorFlow", "Keras", "NumPy", "Matplotlib"],
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg",
      github: "https://github.com/AlexanderH00/Neural-Networks-Image-Classification",
    },
    {
      title: "COVID-19 Interactive Data Visualization Dashboard",
      description: "An interactive dashboard that visualizes COVID-19 data using D3.js and React.",
      technologies: ["React", "D3.js", "JavaScript", "CSS", "REST API"],
      image: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg",
      github: "https://github.com/AlexanderH00/COVID-19-Interactive-Dashboard-main",
    },
    {
      title: "Industrial Robot Operation Simulation Platform",
      description: "A simulation platform for industrial robot operations, developed as part of a university project.",
      technologies: ["C++", "OpenGL", "Python", "Qt"],
      image: "https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg",
    }
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Projects</h1>
        <p className="text-slate-300 mb-8 max-w-3xl">
          Here are some of the projects I've worked on. Each project represents different skills and technologies 
          I've used throughout my career. Click on a project to learn more about it.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-slate-300 mb-4 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4 mt-auto">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-1"
                  >
                    <Github size={16} /> Code
                  </a>
                )}
                {project.live && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-1"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-slate-800 rounded-lg p-6 mt-8"
      >
        <h2 className="text-xl font-semibold mb-4">More Projects</h2>
        <p className="text-slate-300 mb-4">
          I'm constantly working on new projects and improving existing ones. Check out my GitHub profile for more of my work.
        </p>
        <a 
          href="https://github.com/AlexanderH00" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-outline inline-flex items-center gap-2"
        >
          <Github size={16} /> View GitHub Profile
        </a>
      </motion.div>
    </div>
  );
};

export default Projects;