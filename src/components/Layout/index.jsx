import React from 'react';
import Navbar from '../Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <main className="app-container pt-12 pb-20 flex-grow">
        {children}
      </main>
      <footer className="border-t border-slate-200 py-8 bg-white mt-auto">
        <div className="app-container text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Shop It. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
