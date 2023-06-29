import './globals.css'
import { Poppins } from 'next/font/google'
import { CartContextProvider } from '@/context/CartContext'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const poppins = Poppins({ subsets: ['latin'] , weight:["400"]})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} flex flex-col justify-between bg-gray-300 min-h-screen w-full h-full`}>
        <CartContextProvider>
          <Navbar />
          {children}
          <Footer />
        </CartContextProvider>        
      </body>
    </html>
  )
}
