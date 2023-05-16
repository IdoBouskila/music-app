import { Rubik } from 'next/font/google';
import { SongProvider } from '../context/SongProvider';
import './globals.css';
import Sidebar from '@/components/Sidebar';

export const metadata = {
  title: 'Music platform 🎶',
  description: 'Discover new artists and music. Find top trending songs, artists information, and album tracklists.',
}

const rubik = Rubik({
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={ rubik.className }>
      <body>
        <SongProvider>
          <div className='wrapper'>
            <Sidebar />
            
            <div className='main-container'>
              <SearchBar />

              <main>
                { children }
              </main>
          </div>
        </SongProvider>
      </body>
    </html>
  )
}
