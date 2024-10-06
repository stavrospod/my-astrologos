import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Mock data for articles
const featuredArticle = {
  title: "Η Επίδραση της Πανσελήνου στα Ζώδια",
  excerpt: "Ανακαλύψτε πώς η πανσέληνος επηρεάζει κάθε ζώδιο και πώς μπορείτε να αξιοποιήσετε αυτή την ενέργεια.",
  image: "/images/fullmoon.jpg",
  slug: "epidrasi-panselinou-zodia"
};

const articles = [
  { title: "Τα Όνειρα και η Σημασία τους στην Αστρολογία", category: "Ερμηνεία Ονείρων", image: "/images/dreams.jpg", slug: "oneira-simasia-astrologia" },
  { title: "Πώς ο Ερμής Ανάδρομος Επηρεάζει τη Ζωή σας", category: "Αστρολογία & Καθημερινή Ζωή", image: "/images/mercury-retrograde.jpg", slug: "ermis-anadromes-zoi" },
  { title: "Τα Χαρακτηριστικά του Ζωδίου Λέων", category: "Ζώδια", image: "/images/leo.jpg", slug: "xaraktiristika-leon" },
  // Add more articles as needed
];

const categories = [
  { name: 'Ζώδια', slug: 'zodia' },
  { name: 'Ερμηνεία Ονείρων', slug: 'oneira' },
  { name: 'Αστρολογία & Καθημερινή Ζωή', slug: 'astrologia-kathimerini-zoi' }
];

const popularTags = [
  { name: "Ερμής ανάδρομος", slug: "ermis-anadromes" },
  { name: "Πανσέληνος", slug: "panselinos" },
  { name: "Ωροσκόπος", slug: "oroskopios" },
  { name: "Συμβατότητα ζωδίων", slug: "symvatotita-zodion" }
];

export default function ArticlesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-purple-900">Άρθρα για Ζώδια & Όνειρα</h1>
      
      {/* Banner */}
      <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
        <Image src="/images/arthra/astrology-banner.png" alt="Astrology and Dreams" layout="fill" objectFit="cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-3xl font-bold text-white">Εξερευνήστε τον Κόσμο της Αστρολογίας και των Ονείρων</h2>
        </div>
      </div>

      {/* Featured Article */}
      <div className="bg-purple-100 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Προτεινόμενο Άρθρο</h2>
        <div className="flex flex-col md:flex-row items-center">
          <Image src={featuredArticle.image} alt={featuredArticle.title} width={300} height={200} className="rounded-lg mb-4 md:mb-0 md:mr-6" />
          <div>
            <h3 className="text-xl font-semibold mb-2">{featuredArticle.title}</h3>
            <p className="mb-4">{featuredArticle.excerpt}</p>
            <Link href={`/arthra/${featuredArticle.slug}`} className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors">
              Διαβάστε Περισσότερα
            </Link>
          </div>
        </div>
      </div>

      {/* Article Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {categories.map((category) => (
          <div key={category.slug} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
            <Link href={`/arthra/category/${category.slug}`} className="text-purple-600 hover:underline">
              Δείτε όλα τα άρθρα
            </Link>
          </div>
        ))}
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {articles.map((article, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image src={article.image} alt={article.title} width={400} height={250} className="w-full h-48 object-cover" />
            <div className="p-4">
              <span className="text-sm text-purple-600 mb-2 block">{article.category}</span>
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <Link href={`/arthra/${article.slug}`} className="text-purple-600 hover:underline">
                Διαβάστε Περισσότερα
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Sidebar */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Δημοφιλείς Ετικέτες</h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <Link key={tag.slug} href={`/arthra/tag/${tag.slug}`} className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm hover:bg-purple-300 transition-colors">
              {tag.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}