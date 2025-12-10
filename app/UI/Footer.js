import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Section contact rapide */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact rapide</h3>
            <p className="text-gray-300 mb-2">Email: contact@exemple.com</p>
            <p className="text-gray-300">Téléphone: 06 12 34 56 78</p>
          </div>
          
          {/* Liens utiles */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><Link href="/Home#apropos" className="text-gray-300 hover:text-white">À propos</Link></li>
              <li><Link href="/Home#projets" className="text-gray-300 hover:text-white">Projets</Link></li>
              <li><Link href="/Home#contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-moi</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-white">GitHub</a>
              <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a>
              <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
            </div>
          </div>
        </div>
        
        {/* Ligne de séparation */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} John Doe. Tous droits réservés.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Développé avec React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
