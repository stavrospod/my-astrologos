import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// This would typically come from your API or database
const getTagData = (tag: string) => {
  // Mock data
  const tags = {
    'ermis-anadromes': {
      name: 'Ερμής Ανάδρομος',
      description: 'Άρθρα σχετικά με τον Ερμή Ανάδρομο και πώς επηρεάζει τη ζωή μας.',
      articles: [
        { title: "Πώς να Επιβιώσετε στον Ερμή Ανάδρομο", image: "/images/mercury-retrograde-survival.jpg", slug: "epiviwsi-ermi-anadromo" },
        { title: "Ο Ερμής Ανάδρομος και οι Επιπτώσεις στην Επικοινωνία", image: "/images/mercury-communication.jpg", slug: "ermis-anadromes-epikoinonia" },
        // Add more articles
      ]
    },
    'panselinos': {
      name: 'Πανσέληνος',
      description: 'Εξερευνήστε την επίδραση της πανσελήνου στα ζώδια και τη ζωή μας.',
      articles: [
        { title: "Η Επίδραση της Πανσελήνου στα Ζώδια", image: "/images/fullmoon-zodiac.jpg", slug: "panselinos-zodia" },
        { title: "Τελετουργικά Πανσελήνου για Κάθε Ζώδιο", image: "/images/fullmoon-rituals.jpg", slug: "panselinos-teletourgika" },
        // Add more articles
      ]
    },
    // Add more tags
  };

  return tags[tag as keyof typeof tags];
};

export default function TagPage({ params }: { params: { tag: string } }) {
  const tagData = getTagData(params.tag);

  if (!tagData) {
    return <div>Tag not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-purple-900">{tagData.name}</h1>
      <p className="text-lg mb-8 text-gray-600">{tagData.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tagData.articles.map((article, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image src={article.image} alt={article.title} width={400} height={250} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <Link href={`/arthra/${article.slug}`} className="text-purple-600 hover:underline">
                Διαβάστε Περισσότερα
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}