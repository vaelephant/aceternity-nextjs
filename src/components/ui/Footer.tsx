// Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="mx-auto mt-32 w-full max-w-container px-4 sm:px-6 lg:px-8">
      <div className="border-t border-slate-900/5 py-10">
        {/* 这里可以放置其他的SVG或图标 */}
        <p className="mt-5 text-center text-sm leading-6 text-slate-500">© 2024 DR.SEEK Inc. All rights reserved.</p>
        <div className="mt-16 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
          <a href="#">Privacy policy</a>
          {/* 这里可以添加更多链接 */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
