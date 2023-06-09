import './globals.css'
import { Poppins } from 'next/font/google'



const poppins = Poppins({ 
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins'
 })

export const metadata = {
  title: 'Salescopy.se',
  description: 'Skapa autogenererade annonser',
}



export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        {children}
        
        </body>
    </html>
  )
}
