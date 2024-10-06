import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const zodiacSigns = [
  { name: 'Κριός', slug: 'krios' },
  { name: 'Ταύρος', slug: 'tavros' },
  { name: 'Δίδυμοι', slug: 'didymoi' },
  { name: 'Καρκίνος', slug: 'karkinos' },
  { name: 'Λέων', slug: 'leon' },
  { name: 'Παρθένος', slug: 'parthenos' },
  { name: 'Ζυγός', slug: 'zygos' },
  { name: 'Σκορπιός', slug: 'skorpios' },
  { name: 'Τοξότης', slug: 'toxotis' },
  { name: 'Αιγόκερως', slug: 'aigokeros' },
  { name: 'Υδροχόος', slug: 'ydrochoos' },
  { name: 'Ιχθύες', slug: 'ichthyes' }
];

const alphabetMapping = {
  'Α': 'a', 'Β': 'b', 'Γ': 'g', 'Δ': 'd', 'Ε': 'e', 'Ζ': 'z', 'Η': 'h', 'Θ': 'th',
  'Ι': 'i', 'Κ': 'k', 'Λ': 'l', 'Μ': 'm', 'Ν': 'n', 'Ξ': 'ks', 'Ο': 'o', 'Π': 'p',
  'Ρ': 'r', 'Σ': 's', 'Τ': 't', 'Υ': 'u', 'Φ': 'f', 'Χ': 'x', 'Ψ': 'ps', 'Ω': 'w'
};

const featuredArticles = [
  { title: 'Πώς ο Ερμής Ανάδρομος Επηρεάζει το Ζώδιό σας', slug: 'ermis-anadromes-zodia' },
  { title: 'Η Σημασία της Σελήνης στο Ωροσκόπιό σας', slug: 'selini-oroskopio' },
  { title: 'Τα Μυστικά της Αστρολογικής Συμβατότητας', slug: 'astrological-compatibility' }
];

const popularZodiacArticles = [
  { title: 'Πώς να Αξιοποιήσετε την Ενέργεια της Πανσελήνου', slug: 'panselinos-energia' },
  { title: 'Οι Πλανήτες και η Επιρροή τους στη Ζωή σας', slug: 'planites-epiroi' }
];

const dreamOfTheDay = {
  title: 'Πτώση',
  slug: 'ptosi',
  interpretation: 'Τα όνειρα πτώσης συχνά συμβολίζουν ανασφάλεια ή απώλεια ελέγχου στη ζωή σας. Μπορεί να υποδεικνύουν φόβους ή άγχη που πρέπει να αντιμετωπίσετε.',
};

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative h-96 mb-12 rounded-lg overflow-hidden">
        <Image 
          src="/images/homepage/hero-banner.png" 
          alt="Astrology and Dreams" 
          layout="fill" 
          objectFit="cover" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-4 text-center">Ανακαλύψτε τον εαυτό σας μέσα από τα ζώδια και τα όνειρα</h1>
          <div className="flex space-x-4">
            <Link href="/zodia" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
              Ζώδια
            </Link>
            <Link href="/oneira" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Ερμηνεία Ονείρων
            </Link>
          </div>
        </div>
      </section>

      {/* Daily Zodiac Predictions */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Ημερήσιες Προβλέψεις</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {zodiacSigns.map((sign) => (
            <Link key={sign.slug} href={`/provlepseis/imerisies/${sign.slug}`} className="bg-purple-100 hover:bg-purple-200 p-4 rounded text-center">
              {sign.name}
            </Link>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link href="/provlepseis" className="text-purple-600 hover:underline">
            Διαβάστε τις προβλέψεις για όλα τα ζώδια
          </Link>
        </div>
      </section>

      {/* Dream Interpretation Section */}
      <section className="mb-12 bg-blue-100 p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Τι σημαίνουν τα όνειρά σας;</h2>
        <p className="mb-4">Εξερευνήστε τη σημασία των ονείρων σας μέσω του αλφαβητικού μας ευρετηρίου.</p>
        <div className="flex flex-wrap justify-center gap-2">
          {Object.keys(alphabetMapping).map((letter) => (
            <Link key={letter} href={`/oneira/${alphabetMapping[letter]}`} className="bg-white hover:bg-gray-100 px-3 py-1 rounded">
              {letter}
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Content */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Προτεινόμενα Άρθρα</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredArticles.map((article, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <Link href={`/arthra/${article.slug}`} className="text-purple-600 hover:underline">
                Διαβάστε περισσότερα
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Zodiac Articles */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Δημοφιλή Άρθρα για Ζώδια</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {popularZodiacArticles.map((article, index) => (
            <div key={index} className="bg-purple-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <Link href={`/arthra/${article.slug}`} className="text-purple-600 hover:underline">
                Διαβάστε περισσότερα
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Dream of the Day */}
      <section className="mb-12 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Όνειρο της Ημέρας</h2>
        <div className="flex flex-col md:flex-row items-center">
          <Image 
            src={`/images/dreams/${dreamOfTheDay.slug}.png`}
            alt={dreamOfTheDay.title} 
            width={300} 
            height={200} 
            className="rounded-lg mb-4 md:mb-0 md:mr-6"
          />
          <div>
            <h3 className="text-xl font-semibold mb-2">{dreamOfTheDay.title}</h3>
            <p>{dreamOfTheDay.interpretation}</p>
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <section className="bg-purple-600 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Εγγραφείτε στο newsletter</h2>
        <p className="mb-4">Λάβετε τις προβλέψεις σας και συμβουλές αστρολογίας καθημερινά στο email σας.</p>
        <form className="flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            placeholder="Το email σας" 
            className="flex-grow px-4 py-2 rounded text-black" 
            required 
          />
          <button type="submit" className="bg-white text-purple-600 px-6 py-2 rounded font-bold hover:bg-gray-100">
            Εγγραφή
          </button>
        </form>
      </section>
    </div>
  );
}