import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';

// This would typically come from an API or database
const getZodiacData = async (zodiac: string) => {
  // Simulating an API call
  const data = {
    "krios": {
      "name": "Κριός",
      "dates": "21 Μαρτίου - 19 Απριλίου",
      "element": "Φωτιά",
      "planet": "Άρης",
      "characteristics": "Ο Κριός είναι δυναμικός, θαρραλέος και ενθουσιώδης. Έχει ηγετικές ικανότητες και αγαπά τις προκλήσεις.",
      "male": "Ο άνδρας Κριός είναι φιλόδοξος, ανταγωνιστικός και ανεξάρτητος. Αναζητά την περιπέτεια και την αδρεναλίνη στη ζωή του.",
      "female": "Η γυναίκα Κριός είναι δυναμική, αποφασιστική και αυτόνομη. Έχει ισχυρή προσωπικότητα και δεν φοβάται να εκφράσει τη γνώμη της.",
      "dailySummary": "Σήμερα, η ενέργειά σας είναι υψηλή και μπορείτε να επιτύχετε πολλά. Εστιάστε στους στόχους σας.",
      "tomorrowSummary": "Αύριο θα έχετε την ευκαιρία να κάνετε νέες γνωριμίες που μπορεί να αποδειχθούν σημαντικές για το μέλλον.",
      "weeklySummary": "Αυτή την εβδομάδα, επικεντρωθείτε στην προσωπική σας ανάπτυξη και μην φοβηθείτε να αναλάβετε νέες προκλήσεις.",
      "monthlySummary": "Ο μήνας αυτός θα φέρει σημαντικές ευκαιρίες στην καριέρα σας. Να είστε ανοιχτοί σε νέες προτάσεις."
    },
    // ... other zodiac signs would be included here
  };
  return data[zodiac as keyof typeof data];
};

export async function generateMetadata({ params }: { params: { zodiac: string } }): Promise<Metadata> {
  const zodiacData = await getZodiacData(params.zodiac);
  if (!zodiacData) return {};

  return {
    title: `${zodiacData.name} - Χαρακτηριστικά και Προβλέψεις`,
    description: `Ανακαλύψτε τα χαρακτηριστικά του ζωδίου ${zodiacData.name}, πληροφορίες για άνδρες και γυναίκες ${zodiacData.name}, και δείτε τις προβλέψεις.`,
    keywords: `${zodiacData.name}, ζώδια, αστρολογία, χαρακτηριστικά, προβλέψεις`
  };
}

export default async function ZodiacPage({ params }: { params: { zodiac: string } }) {
  const zodiacData = await getZodiacData(params.zodiac);

  if (!zodiacData) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-center text-purple-900">{zodiacData.name}</h1>
      <p className="text-xl text-center mb-8 text-gray-600">{zodiacData.dates}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Section title="Γενικά Χαρακτηριστικά">
          <p>{zodiacData.characteristics}</p>
          <p className="mt-2"><strong>Στοιχείο:</strong> {zodiacData.element}</p>
          <p><strong>Πλανήτης:</strong> {zodiacData.planet}</p>
        </Section>

        <Section title={`Ο άνδρας ${zodiacData.name}`}>
          <p>{zodiacData.male}</p>
        </Section>

        <Section title={`Η γυναίκα ${zodiacData.name}`}>
          <p>{zodiacData.female}</p>
        </Section>

        <Section title="Προβλέψεις">
          <h3 className="text-lg font-semibold mb-2">Ημερήσια Πρόβλεψη</h3>
          <p>{zodiacData.dailySummary}</p>
          <Link href={`/provlepseis/imerisies/${params.zodiac}`} className="text-blue-600 hover:underline block mt-2">
            Δείτε την πλήρη ημερήσια πρόβλεψη
          </Link>

          <h3 className="text-lg font-semibold mb-2 mt-4">Αυριανή Πρόβλεψη</h3>
          <p>{zodiacData.tomorrowSummary}</p>
          <Link href={`/provlepseis/imerisies/${params.zodiac}/auriani-provlepsh`} className="text-blue-600 hover:underline block mt-2">
            Δείτε την πλήρη αυριανή πρόβλεψη
          </Link>

          <h3 className="text-lg font-semibold mb-2 mt-4">Εβδομαδιαία Πρόβλεψη</h3>
          <p>{zodiacData.weeklySummary}</p>
          <Link href={`/provlepseis/evdomadiaies/${params.zodiac}`} className="text-blue-600 hover:underline block mt-2">
            Δείτε την πλήρη εβδομαδιαία πρόβλεψη
          </Link>

          <h3 className="text-lg font-semibold mb-2 mt-4">Μηνιαία Πρόβλεψη</h3>
          <p>{zodiacData.monthlySummary}</p>
          <Link href={`/provlepseis/miniaies/${params.zodiac}`} className="text-blue-600 hover:underline block mt-2">
            Δείτε την πλήρη μηνιαία πρόβλεψη
          </Link>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-purple-800">{title}</h2>
      {children}
    </div>
  );
}