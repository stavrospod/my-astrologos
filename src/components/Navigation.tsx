'use client'

import { useState } from 'react'
import Link from 'next/link'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-purple-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          MyAstrologos.gr
        </Link>
        <button 
          className="sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <ul className={`${isOpen ? 'block' : 'hidden'} sm:flex space-x-4 items-center`}>
          <li><Link href="/" className="hover:text-purple-200">Αρχική</Link></li>
          <li><Link href="/zodia" className="hover:text-purple-200">Ζώδια</Link></li>
          <li><Link href="/provlepseis" className="hover:text-purple-200">Προβλέψεις</Link></li>
          <li><Link href="/oneira" className="hover:text-purple-200">Όνειρα</Link></li>
          <li><Link href="/arthra" className="hover:text-purple-200">Άρθρα για Ζώδια & Όνειρα</Link></li>
          <li><Link href="/epikoinonia" className="hover:text-purple-200">Επικοινωνία</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation