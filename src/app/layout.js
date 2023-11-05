import './globals.css'
import { Roboto } from 'next/font/google'
import { Providers } from './providers'
import NavBar from './components/Navbar'

const font = Roboto({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'StockLib',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <body 
        className={`${font.className} bg-black`}
      >
        <Providers>
          <NavBar/>
          <div className='p-3'>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
