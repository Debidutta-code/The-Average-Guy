"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = () => {
  const pathname = usePathname();
  if (pathname === '/') return null;

  const pathSegments = pathname.split('/').filter(segment => segment !== '');

  return (
    <nav className="bg-slate-50 pt-28 pb-6 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm font-medium">
          <li>
            <Link href="/" className="text-slate-500 hover:text-primary transition-colors flex items-center">
              <Home size={16} className="mr-1" />
              <span>Home</span>
            </Link>
          </li>
          {pathSegments.map((segment, index) => {
            const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
            const isLast = index === pathSegments.length - 1;
            const title = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');

            return (
              <li key={href} className="flex items-center space-x-2">
                <ChevronRight size={14} className="text-slate-400" />
                {isLast ? (
                  <span className="text-slate-900 font-bold">{title}</span>
                ) : (
                  <Link href={href} className="text-slate-500 hover:text-primary transition-colors">
                    {title}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
