'use client';
import { useState } from 'react';

export default function Connect() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <section id="connect" className="py-20 bg-light text-dark relative overflow-hidden">
      {/* Interactive background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary to-secondary opacity-10"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent opacity-30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary opacity-30 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold mb-12 text-center text-primary">Let's Connect</h2>
        <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-lg text-primary font-semibold">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 transition-all duration-300"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-lg text-primary font-semibold">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 transition-all duration-300"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-lg text-primary font-semibold">Message</label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 transition-all duration-300"
              required
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-secondary transition-colors duration-300 transform hover:scale-105">
            Send Message
          </button>
          {status && <p className="mt-4 text-center text-primary font-semibold">{status}</p>}
        </form>
      </div>
    </section>
  );
}