import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="flex items-center justify-between h-16 px-4 md:px-6">
        {/* Sisi Kiri Header, bisa untuk judul halaman atau tombol menu mobile */}
        <div>
          <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
        </div>

        {/* Sisi Kanan Header, untuk profil pengguna, notifikasi, dll. */}
        <div>
          <div className="w-10 h-10 bg-gray-300 rounded-full">
            {/* Placeholder untuk foto profil */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;