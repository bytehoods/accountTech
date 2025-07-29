import React from 'react';

const Sidebar = () => {
  return (
    // Container utama sidebar dengan latar belakang gelap dan lebar tetap
    <aside className="w-64 bg-gray-800 text-white flex flex-col">
      {/* Judul Aplikasi */}
      <div className="h-16 flex items-center justify-center text-2xl font-bold border-b border-gray-700">
        AccounTech
      </div>

      {/* Kontainer untuk menu navigasi */}
      <nav className="flex-1 px-2 py-4 space-y-2">
        {/* Menu Dashboard */}
        <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-md">
          <span className="mr-3">📊</span> Dashboard
        </a>

        {/* Kategori Menu Akuntansi */}
        <div>
          <h3 className="px-4 pt-4 pb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Akuntansi
          </h3>
          <a href="#" className="flex items-center px-4 py-2 mt-1 text-gray-300 hover:bg-gray-700 rounded-md">
            <span className="mr-3">💰</span> Kelola Kas
          </a>
          <a href="#" className="flex items-center px-4 py-2 mt-1 text-gray-300 hover:bg-gray-700 rounded-md">
            <span className="mr-3">🔄</span> Transaksi
          </a>
        </div>

        {/* Kategori Menu Produksi & Inventori */}
        <div>
          <h3 className="px-4 pt-4 pb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Produksi & Inventori
          </h3>
          <a href="#" className="flex items-center px-4 py-2 mt-1 text-gray-300 hover:bg-gray-700 rounded-md">
            <span className="mr-3">🧪</span> Bahan Baku
          </a>
          <a href="#" className="flex items-center px-4 py-2 mt-1 text-gray-300 hover:bg-gray-700 rounded-md">
            <span className="mr-3">📦</span> Produk
          </a>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;