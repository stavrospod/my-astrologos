import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import pool from '@/utils/db';

const getTomorrowPredictionData = async (type: string, zodiac: string) => {
  console.log(`Fetching tomorrow's prediction for type: ${type}, zodiac: ${zodiac}`);
  try {
    const client = await pool.connect();
    console.log('Connected to database');
    const query = `
      SELECT * FROM predictions 
      WHERE type = $1 AND zodiac = $2 
        AND date = ((CURRENT_DATE AT TIME ZONE 'Europe/Athens') + INTERVAL '1 day')::date
      LIMIT 1
    `;
    console.log('Executing query:', query);
    const result = await client.query(query, [type, zodiac]);
    client.release();

    if (result.rows.length === 0) {
      console.log('No prediction found for tomorrow');
      return null;
    }

    console.log('Raw date from database:', result.rows[0].date);
    console.log('Full prediction data:', JSON.stringify(result.rows[0], null, 2));

    return result.rows[0];
  } catch (err) {
    console.error('Error fetching tomorrow\'s prediction data:', err);
    return null;
  }
};

export async function generateMetadata({ params }: { params: { type: string; zodiac: string } }): Promise<Metadata> {
  const predictionData = await getTomorrowPredictionData(params.type, params.zodiac);
  if (!predictionData) return {};

  const predictionTypes = {
    imerisies: 'Ημερήσια',
    evdomadiaies: 'Εβδομαδιαία',
    miniaies: 'Μηνιαία'
  };

  return {
    title: `${predictionData.zodiac} - Αυριανή ${predictionTypes[params.type as keyof typeof predictionTypes]} Πρόβλεψη`,
    description: `Διαβάστε τις αυριανές αστρολογικές προβλέψεις για το ζώδιο ${predictionData.zodiac}. Αγάπη, καριέρα, υγεία και περισσότερα.`,
    keywords: `${predictionData.zodiac}, πρόβλεψη, ζώδια, αγάπη, καριέρα, υγεία, αστρολογία, αύριο`
  };
}

export default async function TomorrowPredictionPage({ params }: { params: { type: string; zodiac: string } }) {
  console.log('Rendering TomorrowPredictionPage with params:', params);
  const predictionData = await getTomorrowPredictionData(params.type, params.zodiac);

  if (!predictionData) {
    console.log('No prediction data for tomorrow, calling notFound()');
    notFound();
  }

  const predictionTypes = {
    imerisies: 'Ημερήσια',
    evdomadiaies: 'Εβδομαδιαία',
    miniaies: 'Μηνιαία'
  };

  const formattedDate = new Date(predictionData.date).toLocaleDateString('el-GR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Europe/Athens'
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-center text-purple-900">
        {predictionData.zodiac} - Αυριανή {predictionTypes[params.type as keyof typeof predictionTypes]} Πρόβλεψη
      </h1>
      <p className="text-xl text-center mb-2 text-gray-600">{formattedDate}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PredictionSection title="Γενικά" content={predictionData.general} />
        <PredictionSection title="Αγάπη" content={predictionData.love} />
        <PredictionSection title="Καριέρα" content={predictionData.career} />
        <PredictionSection title="Υγεία" content={predictionData.health} />
      </div>

      <div className="mt-8 bg-purple-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-purple-800">Επιπλέον Πληροφορίες</h2>
        <div className="grid grid-cols-2 gap-4">
          <InfoItem label="Τυχερός Αριθμός" value={predictionData.lucky_number} />
          <InfoItem label="Τυχερό Χρώμα" value={predictionData.lucky_color} />
          <InfoItem label="Διάθεση" value={predictionData.mood} />
          <InfoItem 
            label="Πιθανό ταίρι" 
            value={
              <Link href={`/provlepseis/${params.type}/${predictionData.compatibility.toLowerCase()}`} className="text-blue-600 hover:underline">
                {predictionData.compatibility}
              </Link>
            } 
          />
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link 
          href={`/provlepseis/${params.type}/${params.zodiac}`}
          className="text-blue-600 hover:underline"
        >
          Επιστροφή στη σημερινή πρόβλεψη
        </Link>
      </div>
    </div>
  );
}

function PredictionSection({ title, content }: { title: string; content: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-3 text-purple-800">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <span className="font-medium text-purple-700">{label}:</span> {value}
    </div>
  );
}