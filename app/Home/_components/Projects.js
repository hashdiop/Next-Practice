const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Plateforme complète avec panier et paiement',
      tech: ['React', 'Node.js', 'MongoDB'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Application de Gestion',
      description: 'Gestion de projets en équipe',
      tech: ['Vue.js', 'Python', 'PostgreSQL'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Portfolio Artistique',
      description: 'Site portfolio avec galerie dynamique',
      tech: ['Next.js', 'Tailwind'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projets" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Mes Projets
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="border rounded-lg p-6 hover:shadow-md">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-gray-100 px-3 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <a href={project.github} className="text-blue-600 hover:underline">
                  Code
                </a>
                <a href={project.demo} className="text-blue-600 hover:underline">
                  Démo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;