import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-800 via-blue-500 to-blue-500 flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        {/* Logo ou Initiales */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-blue-900 text-black rounded-full flex items-center justify-center text-3xl font-semibold mx-auto p-16 border-4">
            C.H.D.
          </div>
        </div>
        
        {/* Titre principal */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Cheikh Hassana Diop
        </h1>
        
        {/* Sous-titre */}
        <h2 className="text-xl md:text-2xl text-green-400 mb-6">
          Développeur Full-Stack & Concepteur Web
        </h2>
        
        {/* Description courte */}
        <p className="text-yellow-500 mb-10 max-w-lg mx-auto">
          Je transforme des idées en solutions digitales élégantes et performantes.
          Spécialisé dans le développement frontend et backend.
        </p>
        
        {/* Bouton de redirection */}
        <div className="space-y-4">
          <Link
            href="/Home" // ou "#portfolio" selon ton routage
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Accéder à mon portfolio
          </Link>
          
          <p className="text-gray-400 text-sm">
            Découvrez mes projets, compétences et contactez-moi
          </p>
        </div>
        
        {/* Indicateur de scroll (optionnel) */}
        <div className="mt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center mx-auto">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;