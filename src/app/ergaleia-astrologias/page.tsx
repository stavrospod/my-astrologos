import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Εργαλεία Αστρολογίας - MyAstrologos.gr',
  description: 'Χρησιμοποιήστε τα αστρολογικά μας εργαλεία για να ανακαλύψετε περισσότερα για τον εαυτό σας και το μέλλον σας στο MyAstrologos.gr',
}

export default function ErgaleiaAstrologiasPage() {
  const tools = [
    { 
      name: 'Υπολογισμός Ωροσκοπίου', 
      description: 'Δημιουργήστε το προσωπικό σας αστρολογικό χάρτη.',
      link: '/ergaleia-astrologias/ypologismos-oroskopiou'
    },
    { 
      name: 'Συμβατότητα Ζωδίων', 
      description: 'Ανακαλύψτε πόσο ταιριάζετε με το ταίρι σας.',
      link: '/ergaleia-astrologias/symvatotita-zodion'
    },
    { 
      name: 'Πλανητικές Θέσεις', 
      description: 'Δείτε τις τρέχουσες θέσεις των πλανητών.',
      link: '/ergaleia-astrologias/planitikes-theseis'
    },
    { 
      name: 'Υπολογισμός Σεληνιακής Φάσης', 
      description: 'Μάθετε τη φάση της σελήνης για οποιαδήποτε ημερομηνία.',
      link: '/ergaleia-astrologias/ypologismos-seliniakis-fasis'
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Εργαλεία Αστρολογίας</h1>
      <p className="mb-6">Εξερευνήστε τα αστρολογικά μας εργαλεία για να αποκτήσετε βαθύτερη κατανόηση του εαυτού σας και του κόσμου γύρω σας.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map((tool, index) => (
          <Link href={tool.link} key={index} className="bg-purple-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{tool.name}</h2>
            <p className="mb-4">{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}