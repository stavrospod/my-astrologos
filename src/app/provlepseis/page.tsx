'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const predictions = [
  { 
    title: 'Ημερήσιες Προβλέψεις', 
    description: 'Ανακαλύψτε τι σας επιφυλάσσει η σημερινή μέρα με τις λεπτομερείς ημερήσιες προβλέψεις μας.',
    path: 'imerisies'
  },
  { 
    title: 'Εβδομαδιαίες Προβλέψεις', 
    description: 'Προετοιμαστείτε για την εβδομάδα που έρχεται με τις εμπεριστατωμένες εβδομαδιαίες προβλέψεις μας.',
    path: 'evdomadiaies'
  },
  { 
    title: 'Μηνιαίες Προβλέψεις', 
    description: 'Σχεδιάστε το μήνα σας με βάση τις εκτενείς μηνιαίες αστρολογικές μας προβλέψεις.',
    path: 'miniaies'
  },
];

const zodiacSigns = [
  'krios', 'tavros', 'didymoi', 'karkinos', 'leon', 'parthenos',
  'zygos', 'skorpios', 'toxotis', 'aigokeros', 'ydrochoos', 'ichthyes'
];

const zodiacSignsGreek = [
  'Κριός', 'Ταύρος', 'Δίδυμοι', 'Καρκίνος', 'Λέων', 'Παρθένος',
  'Ζυγός', 'Σκορπιός', 'Τοξότης', 'Αιγόκερως', 'Υδροχόος', 'Ιχθύες'
];

export default function PredictionsPage() {
  const [selectedPrediction, setSelectedPrediction] = useState<string | null>(null);
  const router = useRouter();

  const togglePrediction = (title: string) => {
    if (selectedPrediction === title) {
      setSelectedPrediction(null);
    } else {
      setSelectedPrediction(title);
    }
  };

  const handleZodiacSelection = (zodiacIndex: number) => {
    if (selectedPrediction) {
      const predictionPath = predictions.find(p => p.title === selectedPrediction)?.path;
      const zodiacSign = zodiacSigns[zodiacIndex];
      router.push(`/provlepseis/${predictionPath}/${zodiacSign}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-purple-900">Αστρολογικές Προβλέψεις</h1>
      <p className="mb-8 text-center text-lg text-gray-700">
        Ανακαλύψτε τι σας επιφυλάσσουν τα άστρα με τις προβλέψεις μας.
      </p>
      
      <div className="max-w-2xl mx-auto space-y-4">
        {predictions.map((prediction) => (
          <div key={prediction.title}>
            <button 
              onClick={() => togglePrediction(prediction.title)}
              className="w-full bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-purple-200 text-center text-xl font-semibold text-purple-800 hover:bg-purple-50"
            >
              {prediction.title}
            </button>
            {selectedPrediction === prediction.title && (
              <div className="mt-4 p-4 bg-purple-50 rounded-lg">
                <p className="text-gray-700 mb-4">{prediction.description}</p>
                <h3 className="text-lg font-semibold mb-2 text-purple-800">Επιλέξτε το ζώδιό σας:</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                  {zodiacSignsGreek.map((sign, index) => (
                    <button 
                      key={sign}
                      onClick={() => handleZodiacSelection(index)}
                      className="bg-white py-2 px-1 rounded shadow hover:bg-purple-100 transition-colors duration-300 text-purple-700 text-sm sm:text-base"
                    >
                      {sign}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}