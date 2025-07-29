import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header'; // Hapus komentar di baris ini

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header /> {/* Hapus komentar di baris ini */}

        <main className="p-4 md:p-6 flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;