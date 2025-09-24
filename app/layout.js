// app/layout.js
import './globals.css';
import './styles/custom.css';
import { Inter } from 'next/font/google';
import MovingStars from './components/MovingStars'; // Import the new component

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Fabin Nocx - Front-end Developer',
  description: 'Fabin Nocx personal portfolio showcasing projects and skills.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add the Devicon CDN link here */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className={inter.className}>
        {/* Render the MovingStars component as the background */}
        <MovingStars />
        {/*
          Your main content is rendered within a div that has a higher
          z-index to ensure it appears on top of the moving stars.
        */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}