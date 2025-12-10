'use client'
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Message envoyé!');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Contact
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2">Nom</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            
            <div>
              <label className="block mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            
            <div>
              <label className="block mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Envoyer
            </button>
          </form>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Coordonnées</h3>
              <p className="text-gray-600">Email: contact@exemple.com</p>
              <p className="text-gray-600">Téléphone: 06 12 34 56 78</p>
              <p className="text-gray-600">Paris, France</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Liens</h3>
              <div className="flex gap-4">
                <a href="#" className="text-blue-600 hover:underline">GitHub</a>
                <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
                <a href="#" className="text-blue-600 hover:underline">CV PDF</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;