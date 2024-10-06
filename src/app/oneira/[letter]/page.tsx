import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const alphabetMapping = {
  'a': 'Α', 'b': 'Β', 'g': 'Γ', 'd': 'Δ', 'e': 'Ε', 'z': 'Ζ', 'h': 'Η', 'i': 'Ι',
  'k': 'Κ', 'l': 'Λ', 'm': 'Μ', 'n': 'Ν', 'o': 'Ο', 'p': 'Π', 'r': 'Ρ', 's': 'Σ',
  't': 'Τ', 'u': 'Υ', 'f': 'Φ', 'x': 'Χ', 'ps': 'Ψ', 'w': 'Ω'
};

// This would typically come from your database
const dreamKeywords = {
  'Α': [
    { word: 'Άγγελος', slug: 'aggelos' },
    { word: 'Αγάπη', slug: 'agapi' },
    { word: 'Αέρας', slug: 'aeras' },
    // ... other words
  ],
  'Β': [
    { word: 'Βροχή', slug: 'vrochi' },
    { word: 'Βουνό', slug: 'vouno' },
    // ... other words
  ],
  'Π': [
    { word: 'Πτώση', slug: 'ptosi' },
  // ... other letters
  ]
};

export default function DreamLetterPage({ params }: { params: { letter: string } }) {
  const greekLetter = alphabetMapping[params.letter];
  const keywords = dreamKeywords[greekLetter];

  if (!keywords) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-purple-900">
        Λέξεις-κλειδιά ονείρων που αρχίζουν από "{greekLetter}"
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {keywords.map((keyword, index) => (
          <div key={index} className="bg-white p-4 rounded shadow hover:shadow-md transition-shadow">
            <Link href={`/oneira/${params.letter}/${keyword.slug}`} className="text-purple-700 hover:text-purple-900">
              {keyword.word}
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link href="/oneira" className="text-purple-600 hover:text-purple-800 underline">
          Επιστροφή στην αρχική σελίδα ονείρων
        </Link>
      </div>
    </div>
  );
}