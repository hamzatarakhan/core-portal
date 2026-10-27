import React, { useState } from 'react';
import { Moon, Sun, User, ChevronDown, Bell, Settings, LogOut, Keyboard } from 'lucide-react';

interface HeaderProps {
  title: string;
  description?: string;
}

export function Header({ title, description }: HeaderProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="h-16 border-b border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-800 flex items-center justify-between px-6 shrink-0 transition-colors duration-200">
      <div className="flex flex-col">
        <h1 className="text-lg font-medium text-gray-800 dark:text-gray-100 leading-tight">{title}</h1>
        {description && (
          <p className="text-[11px] text-gray-500 dark:text-gray-400 font-normal">{description}</p>
        )}
      </div>
      
      {/* Theme toggle, notifications and profile menu are inactive for the client preview */}
      <div className="flex items-center gap-6 pointer-events-none select-none" ref={el => el?.setAttribute('inert', '')}>
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-full transition-all"
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          
          <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-full transition-all relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-gray-900"></span>
          </button>
        </div>
        
        <div className="relative">
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-2 cursor-pointer group p-1 pr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs font-bold ring-2 ring-white dark:ring-gray-900 shadow-sm">
              A
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover:text-blue-600 transition-colors">Administrator</span>
              <ChevronDown size={14} className={`text-gray-400 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
            </div>
          </button>

          {isProfileOpen && (
            <>
              <div 
                className="fixed inset-0 z-10" 
                onClick={() => setIsProfileOpen(false)}
              ></div>
              <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 py-2 z-20 animate-in fade-in zoom-in-95 duration-100">
                <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-700 mb-1">
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Signed in as</p>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">admin@salespoint.lp</p>
                </div>
                <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 transition-colors text-left">
                  <User size={16} />
                  My Profile
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 transition-colors text-left">
                  <Keyboard size={16} />
                  <span className="flex-1">Shortcuts</span>
                  <span className="text-[11px] font-medium text-gray-400 bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded">CTRL+K</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 transition-colors text-left">
                  <Settings size={16} />
                  Preferences
                </button>
                <div className="border-t border-gray-100 dark:border-gray-700 my-1"></div>
                <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-gray-700 transition-colors text-left">
                  <LogOut size={16} />
                  Log out
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}