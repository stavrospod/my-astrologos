import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// This would typically come from your API or database
const getCategoryData = (category: string) => {
  // Mock data
  const categories = {
    'zodia': {
      name: 'Ζώδια',
      description: 'Άρθρα σχετικά με τα 12 ζώδια, τα χαρακτηριστικά και τις προβλέψεις τους.',
      articles: [
        { title: "Τα Χαρακτηριστικά του Ζωδίου Λέων", image: "/images/leo.jpg", slug: "xaraktiristika-leon" },
        { title: "Πώς Επηρεάζει ο Άρης τον Κριό", image: "/images/aries-mars.jpg", slug: "aris-krios" },
        // Add more articles
      ]
    },
    'oneira': {
      name: 'Ερμηνεία Ονείρων',
      description: 'Εξερευνήστε τη σημασία των ονείρων σας και πώς να τα ερμηνεύσετε.',
      articles: [
        { title: "Τι Σημαίνει όταν Ονειρεύεστε ότι Πέφτετε", image: "/images/falling-dream.jpg", slug: "oneiro-ptosi" },
        { title: "Σύμβολα στα Όνειρα και η Σημασία τους", image: "/images/dream-symbols.jpg", slug: "symvola-oneiron" },
        // Add more articles
      ]
    },
    'astrologia-kathimerini-zoi': {
      name: 'Αστρολογία & Καθημερινή Ζωή',
      description: 'Ανακαλύψτε πώς η αστρολογία μπορεί να επηρεάσει την καθημερινότητά σας.',
      articles: [
        { title: "Πώς να Χρησιμοποιήσετε την Αστρολογία στην Καριέρα σας", image: "/images/astrology-career.jpg", slug: "astrologia-kariera" },
        { title: "Αστρολογικές Συμβουλές για Καλύτερες Σχέσεις", image: "/images/astrology-relationships.jpg", slug: "astrologia-sxeseis" },
        // Add more articles
      ]
    }
  };

  return categories[category as keyof typeof categories];
};

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categoryData = getCategoryData(params.category);

  if (!categoryData) {
    return <div>Category not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-purple-900">{categoryData.name}</h1>
      <p className="text-lg mb-8 text-gray-600">{categoryData.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoryData.articles.map((article, index) => (
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