const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Cheikh Hassana <span className="text-blue-600">Diop</span>
        </h1>
        
        <h2 className="text-xl text-gray-600 mb-6">
          Développeur Full-Stack
        </h2>
        
        <p className="text-gray-500 mb-8">
          Je crée des solutions web modernes et performantes
        </p>
        
        <div className="flex gap-4 justify-center">
          <a 
            href="#projets" 
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Voir mes projets
          </a>
          <a 
            href="#contact" 
            className="px-6 py-2 border border-gray-300 rounded hover:border-blue-500"
          >
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;