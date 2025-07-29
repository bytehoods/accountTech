import React from 'react';
import Layout from './components/Layout'; // Impor komponen Layout

function App() {
  return (
    <Layout>
      {/* Nanti di sini kita akan meletakkan halaman-halaman kita, 
          misalnya halaman Kelola Kas, Produk, dll. */}
      <h1 className="text-2xl font-bold text-gray-800">
        Selamat Datang di Dashboard AccounTech!
      </h1>
      <p className="mt-2 text-gray-600">
        Halaman konten utama akan muncul di sini.
      </p>
    </Layout>
  );
}

export default App;