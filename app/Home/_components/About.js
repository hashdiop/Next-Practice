const About = () => {
  return (
    <section id="apropos" className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          À propos de moi
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Mon parcours</h3>
              <p className="text-gray-600">
                Développeur web passionné avec 5 ans d&aposexpérience dans la création
                d&aposapplications modernes et performantes.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Spécialisations</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Frontend : React, Vue.js</li>
                <li>• Backend : Node.js, Python</li>
                <li>• Bases de données : MongoDB, PostgreSQL</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Expérience</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-medium">Lead Developer - TechCorp</p>
                <p className="text-gray-500 text-sm">2022 - Présent</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-medium">Développeur Full-Stack - StartUpX</p>
                <p className="text-gray-500 text-sm">2020 - 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;