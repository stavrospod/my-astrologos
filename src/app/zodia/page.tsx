import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Τα Μυστικά των Ζωδίων - MyAstrologos.gr',
  description: 'Εξερευνήστε τα κρυμμένα μυστικά και τις αστρικές δυνάμεις των 12 ζωδίων στο MyAstrologos.gr.',
};

const zodiacSigns = [
  { name: 'Κριός', dates: '21 Μαρτίου - 19 Απριλίου', element: 'Φωτιά', slug: 'krios' },
  { name: 'Ταύρος', dates: '20 Απριλίου - 20 Μαΐου', element: 'Γη', slug: 'tavros' },
  { name: 'Δίδυμοι', dates: '21 Μαΐου - 20 Ιουνίου', element: 'Αέρας', slug: 'didymoi' },
  { name: 'Καρκίνος', dates: '21 Ιουνίου - 22 Ιουλίου', element: 'Νερό', slug: 'karkinos' },
  { name: 'Λέων', dates: '23 Ιουλίου - 22 Αυγούστου', element: 'Φωτιά', slug: 'leon' },
  { name: 'Παρθένος', dates: '23 Αυγούστου - 22 Σεπτεμβρίου', element: 'Γη', slug: 'parthenos' },
  { name: 'Ζυγός', dates: '23 Σεπτεμβρίου - 22 Οκτωβρίου', element: 'Αέρας', slug: 'zygos' },
  { name: 'Σκορπιός', dates: '23 Οκτωβρίου - 21 Νοεμβρίου', element: 'Νερό', slug: 'skorpios' },
  { name: 'Τοξότης', dates: '22 Νοεμβρίου - 21 Δεκεμβρίου', element: 'Φωτιά', slug: 'toxotis' },
  { name: 'Αιγόκερως', dates: '22 Δεκεμβρίου - 19 Ιανουαρίου', element: 'Γη', slug: 'aigokeros' },
  { name: 'Υδροχόος', dates: '20 Ιανουαρίου - 18 Φεβρουαρίου', element: 'Αέρας', slug: 'ydrochoos' },
  { name: 'Ιχθύες', dates: '19 Φεβρουαρίου - 20 Μαρτίου', element: 'Νερό', slug: 'ichthyes' },
];

const getElementColor = (element: string) => {
  switch (element) {
    case 'Φωτιά': return 'bg-red-100 text-red-800';
    case 'Γη': return 'bg-green-100 text-green-800';
    case 'Αέρας': return 'bg-blue-100 text-blue-800';
    case 'Νερό': return 'bg-indigo-100 text-indigo-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

export default function ZodiaPage() {
  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-indigo-100 to-purple-200">
      <h1 className="text-4xl font-bold mb-6 text-center text-indigo-900">Τα Μυστικά των Ζωδίων</h1>
      <p className="mb-8 text-center text-lg text-indigo-800">Ανακαλύψτε τις κρυμμένες αλήθειες και τις κοσμικές δυνάμεις που κρύβονται πίσω από κάθε ζώδιο του αστρολογικού κύκλου.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {zodiacSigns.map((sign) => (
          <Link href={`/zodia/${sign.slug}`} key={sign.slug}>
            <div key={sign.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-purple-200">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-900">{sign.name}</h2>
            <p className="text-indigo-700 mb-2">{sign.dates}</p>
            <p className={`text-sm font-medium px-2 py-1 rounded-full inline-block ${getElementColor(sign.element)}`}>
              {sign.element}
            </p>
            </div>
          </Link>
        ))}
        {zodiacSigns.map((sign) => (
          <div key={sign.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-purple-200">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-900">{sign.name}</h2>
            <p className="text-indigo-700 mb-2">{sign.dates}</p>
            <p className={`text-sm font-medium px-2 py-1 rounded-full inline-block ${getElementColor(sign.element)}`}>
              {sign.element}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}