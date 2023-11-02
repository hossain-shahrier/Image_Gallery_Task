import React from 'react';
import Navbar from './components/navbar';
import Gallery from './components/gallery';

const Main: React.FC = () => {
  return (
    <main className="h-full">
      <Navbar />
      <Gallery />
    </main>
  );
};

export default Main;
