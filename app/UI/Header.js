import Link from 'next/link';
import React from 'react'

export const Header = () => {
  return (
    <div className="bg-white shadow-md">

        {/* Navigation */}
      <nav className="sticky top-0 bg-white shadow-sm py-4">
        <div className="max-w-6xl mx-auto px-4 flex justify-between">
          <Link href="/" className="font-bold text-xl bg-blue-600 rounded rounded-32 px-4">C.H.D.</Link>
          
          <div className="flex gap-6">
            <Link href="/Home#apropos" className="hover:text-blue-600">À propos</Link>
            <Link href="/Home#projets" className="hover:text-blue-600">Projets</Link>
            <Link href="/Home#skills" className="hover:text-blue-600">Competences</Link>
            <Link href="/Home#contact" className="hover:text-blue-600">Contact</Link>
          </div>
        </div>
      </nav>
      </div>
  );
}
