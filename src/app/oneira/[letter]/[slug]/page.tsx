import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// This would typically come from your database
const dreamInterpretations = {
  'aggelos': {
    word: 'Άγγελος',
    letter: 'a',
    generalInterpretation: 'Τα όνειρα με αγγέλους συχνά συμβολίζουν καθοδήγηση, προστασία ή πνευματική επίγνωση.',
    positiveAspects: 'Μπορεί να υποδηλώνει θεϊκή παρέμβαση, εσωτερική γαλήνη ή ηθική καθοδήγηση.',
    negativeAspects: 'Σε ορισμένες περιπτώσεις, μπορεί να αντανακλά φόβους για θάνατο ή ανησυχίες για ηθικά διλήμματα.',
    culturalInsights: 'Οι άγγελοι έχουν διαφορετικές σημασίες σε διάφορους πολιτισμούς και θρησκείες, επηρεάζοντας την ερμηνεία.',
    variations: 'Η εμφάνιση του αγγέλου, οι ενέργειές του, και το συναίσθημα που προκαλεί μπορούν να αλλάξουν την ερμηνεία.',
  },
  'agapi': {
    word: 'Αγάπη',
    letter: 'a',
    // ... interpretation details
  },
  'ptosi': {
    word: 'Πτώση',
    letter: 'p',
    generalInterpretation: 'Τα όνειρα με πτώση συχνά συμβολίζουν απώλεια ελέγχου ή φόβους.',
    positiveAspects: 'Μπορεί να υποδεικνύει την ανάγκη για αλλαγή ή απελευθέρωση από κάτι.',
    negativeAspects: 'Συχνά αντανακλά άγχη ή ανασφάλειες στην πραγματική ζωή.',
    culturalInsights: 'Σε πολλούς πολιτισμούς, τα όνειρα πτώσης θεωρούνται κοινά και συχνά συνδέονται με μεταβατικές περιόδους της ζωής.',
    variations: 'Το περιβάλλον της πτώσης και το συναίσθημα κατά τη διάρκειά της μπορούν να αλλάξουν σημαντικά την ερμηνεία.',
  },
  // ... other dream interpretations
};

// Function to get random dreams
const getRandomDreams = (currentSlug: string, count: number) => {
  const otherDreams = Object.entries(dreamInterpretations)
    .filter(([slug]) => slug !== currentSlug)
    .map(([slug, interpretation]) => ({ slug, word: interpretation.word, letter: interpretation.letter }));
  return otherDreams.sort(() => 0.5 - Math.random()).slice(0, count);
};

export default function DreamKeywordPage({ params }: { params: { letter: string; slug: string } }) {
  const interpretation = dreamInterpretations[params.slug];

  if (!interpretation) {
    notFound();
  }

  const randomDreams = getRandomDreams(params.slug, 5);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Image */}
      <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
        <Image
          src={`/images/dreams/${params.slug}.png`}
          alt={interpretation.word}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">{interpretation.word}</h1>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800">Γενική Ερμηνεία</h2>
        <p className="mb-4">{interpretation.generalInterpretation}</p>
        
        <h2 className="text-2xl font-semibold mb-4 text-purple-800">Θετικές Πτυχές</h2>
        <p className="mb-4">{interpretation.positiveAspects}</p>
        
        <h2 className="text-2xl font-semibold mb-4 text-purple-800">Αρνητικές Πτυχές</h2>
        <p className="mb-4">{interpretation.negativeAspects}</p>
        
        <h2 className="text-2xl font-semibold mb-4 text-purple-800">Πολιτιστικές ή Ψυχολογικές Γνώσεις</h2>
        <p className="mb-4">{interpretation.culturalInsights}</p>
        
        <h2 className="text-2xl font-semibold mb-4 text-purple-800">Παραλλαγές</h2>
        <p>{interpretation.variations}</p>
      </div>

      {/* Random Dreams Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Εξερευνήστε κι άλλα όνειρα</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {randomDreams.map((dream, index) => (
            <Link 
              key={index} 
              href={`/oneira/${dream.letter}/${dream.slug}`}
              className="bg-purple-100 p-3 rounded text-center hover:bg-purple-200 transition-colors"
            >
              {dream.word}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link href={`/oneira/${params.letter}`} className="text-purple-600 hover:text-purple-800 underline mr-4">
          Επιστροφή στη λίστα ονείρων για "{params.letter.toUpperCase()}"
        </Link>
        <Link href="/oneira" className="text-purple-600 hover:text-purple-800 underline">
          Επιστροφή στην αρχική σελίδα ονείρων
        </Link>
      </div>
    </div>
  );
}