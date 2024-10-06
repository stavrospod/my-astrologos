import React from 'react';
import Link from 'next/link';

const alphabetMapping = {
  'Α': 'a', 'Β': 'b', 'Γ': 'g', 'Δ': 'd', 'Ε': 'e', 'Ζ': 'z', 'Η': 'h', 'Θ': 'th',
  'Ι': 'i', 'Κ': 'k', 'Λ': 'l', 'Μ': 'm', 'Ν': 'n', 'Ξ': 'ks', 'Ο': 'o', 'Π': 'p',
  'Ρ': 'r', 'Σ': 's', 'Τ': 't', 'Υ': 'u', 'Φ': 'f', 'Χ': 'x', 'Ψ': 'ps', 'Ω': 'w'
};

const popularDreams = [
  { title: 'Πτώση', description: 'Συμβολίζει την απώλεια ελέγχου ή φόβους.', letter: 'Π', slug: 'ptosi' },
  { title: 'Πέταγμα', description: 'Αντιπροσωπεύει την ελευθερία και τις φιλοδοξίες.', letter: 'Π', slug: 'petagma' },
  { title: 'Δόντια', description: 'Μπορεί να υποδηλώνει ανησυχίες για την εμφάνιση ή την επικοινωνία.', letter: 'Δ', slug: 'dontia' },
];

const dreamCategories = [
  { name: 'Συναισθήματα', subcategories: ['Φόβος', 'Χαρά', 'Θυμός'], slug: 'synaisthimata' },
  { name: 'Θέματα', subcategories: ['Ζώα', 'Άνθρωποι', 'Τοποθεσίες'], slug: 'themata' },
  { name: 'Εμπειρίες', subcategories: ['Θάνατος', 'Γάμος', 'Ταξίδι'], slug: 'empiries' },
];

const dailyDream = {
  title: 'Θάλασσα',
  interpretation: 'Η θάλασσα στα όνειρα συχνά συμβολίζει το υποσυνείδητο και τα συναισθήματα. Μπορεί να υποδηλώνει ηρεμία ή ταραχή στη ζωή σας, ανάλογα με την κατάσταση της θάλασσας στο όνειρο.'
};

export default function DreamsPage() {
  const alphabet = Object.keys(alphabetMapping);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-purple-900">Ερμηνεία Ονείρων</h1>
      
      <section className="mb-8">
        <p className="text-lg text-center">
          Καλωσήρθατε στον κόσμο των ονείρων! Εξερευνήστε τα κρυμμένα μηνύματα πίσω από τα όνειρά σας και ανακαλύψτε νέες πτυχές του εαυτού σας.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Αλφαβητικό Ευρετήριο Ονείρων</h2>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {alphabet.map((letter) => (
            <Link
              key={letter}
              href={`/oneira/${alphabetMapping[letter]}`}
              className="px-3 py-1 rounded bg-purple-100 hover:bg-purple-200 transition-colors"
            >
              {letter}
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Δημοφιλή Όνειρα</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {popularDreams.map((dream, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold mb-2">{dream.title}</h3>
              <p className="mb-2">{dream.description}</p>
              <Link 
                href={`/oneira/${alphabetMapping[dream.letter]}/${dream.slug}`} 
                className="text-purple-600 hover:text-purple-800 underline"
              >
                Περισσότερα
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Κατηγορίες Ονείρων</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {dreamCategories.map((category, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold mb-2">{category.name}</h3>
              <ul className="list-disc list-inside mb-2">
                {category.subcategories.map((sub, subIndex) => (
                  <li key={subIndex}>{sub}</li>
                ))}
              </ul>
              <Link href={`/oneira/categories/${category.slug}`} className="text-purple-600 hover:text-purple-800 underline">
                Εξερεύνηση κατηγορίας
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8 bg-purple-100 p-6 rounded">
        <h2 className="text-2xl font-semibold mb-4">Ημερήσια Ερμηνεία Ονείρου</h2>
        <h3 className="font-semibold mb-2">{dailyDream.title}</h3>
        <p>{dailyDream.interpretation}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Υποβολή του Ονείρου σας</h2>
        <form className="bg-white p-6 rounded shadow">
          <div className="mb-4">
            <label htmlFor="dreamTitle" className="block text-gray-700 font-bold mb-2">Τίτλος Ονείρου</label>
            <input type="text" id="dreamTitle" name="dreamTitle" className="w-full px-3 py-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="dreamDescription" className="block text-gray-700 font-bold mb-2">Περιγραφή Ονείρου</label>
            <textarea id="dreamDescription" name="dreamDescription" rows={4} className="w-full px-3 py-2 border rounded" required></textarea>
          </div>
          <button type="submit" className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors">
            Υποβολή για Ερμηνεία
          </button>
        </form>
      </section>
    </div>
  );
}