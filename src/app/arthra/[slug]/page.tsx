import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// This would typically come from an API or database
const getArticleData = async (slug: string) => {
  // Simulating API call
  const articles = {
    'epidrasi-panselinou-zodia': {
      title: "Η Επίδραση της Πανσελήνου στα Ζώδια",
      publishDate: "15 Οκτωβρίου 2024",
      author: "Μαρία Αστρολόγου",
      content: `
        <h2>Εισαγωγή</h2>
        <p>Η πανσέληνος είναι ένα από τα πιο εντυπωσιακά και ενεργειακά φορτισμένα φαινόμενα στον ουρανό. Κάθε ζώδιο επηρεάζεται διαφορετικά από αυτήν την έντονη ενέργεια.</p>

        <h2>Πώς Επηρεάζεται το Κάθε Ζώδιο</h2>
        <h3>Κριός</h3>
        <p>Για τους Κριούς, η πανσέληνος φέρνει έντονα συναισθήματα και την ανάγκη για δράση. Είναι μια ιδανική περίοδος για να ξεκινήσετε νέα projects.</p>

        <h3>Ταύρος</h3>
        <p>Οι Ταύροι μπορεί να αισθανθούν μια έντονη ανάγκη για σταθερότητα και ασφάλεια. Είναι καλή στιγμή να επανεξετάσετε τις οικονομικές σας υποθέσεις.</p>

        <!-- Add more zodiac signs here -->

        <h2>Συμπέρασμα</h2>
        <p>Η πανσέληνος προσφέρει μια μοναδική ευκαιρία για ενδοσκόπηση και ανανέωση. Αξιοποιήστε αυτή την ενέργεια για να κάνετε θετικές αλλαγές στη ζωή σας.</p>
      `,
      relatedArticles: [
        { title: "Ο Ρόλος του Ασκένταντ στο Ωροσκόπιό σας", slug: "rolos-askendant-oroskopio" },
        { title: "Πώς να Ερμηνεύσετε τα Όνειρά σας", slug: "pos-na-ermineusete-oneira" },
        { title: "Οι Πλανήτες και η Επιρροή τους στη Ζωή μας", slug: "planites-epiroi-zoi" }
      ],
    },
    // Add more articles here
  };

  return articles[slug as keyof typeof articles];
};

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const articleData = await getArticleData(params.slug);

  if (!articleData) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-center text-purple-900">{articleData.title}</h1>
        
        {/* Header Image */}
        <div className="relative h-96 mb-6">
          <Image 
            src={`/images/arthra/${params.slug}.png`}
            alt={articleData.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        
        <div className="mb-6 text-gray-600 text-center">
          <span>Δημοσιεύτηκε στις {articleData.publishDate} από {articleData.author}</span>
        </div>
        
        <div className="mb-6 flex justify-center space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Κοινοποίηση στο Facebook</button>
          <button className="bg-blue-400 text-white px-4 py-2 rounded">Κοινοποίηση στο Twitter</button>
        </div>
      </div>
      
      <article className="prose lg:prose-xl mb-8 mx-auto" dangerouslySetInnerHTML={{ __html: articleData.content }} />
      
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Σχετικά Άρθρα</h3>
        <ul className="space-y-2">
          {articleData.relatedArticles.map((article, index) => (
            <li key={index}>
              <Link href={`/arthra/${article.slug}`} className="text-purple-600 hover:underline">
                {article.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Σχόλια</h3>
        {/* Add your comments component here */}
        <p>Σύντομα θα μπορείτε να αφήσετε σχόλια!</p>
      </div>
    </div>
  );
}