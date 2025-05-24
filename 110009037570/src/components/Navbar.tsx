import { useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { toast } from 'sonner';

export default function Navbar({ onToggleSidebar }: { onToggleSidebar: () => void }) {
  const { theme, toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [language, setLanguage] = useState('en');

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-white/50 shadow-sm flex items-center px-6 z-50">
      <button 
        onClick={onToggleSidebar}
        className="mr-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100/50 transition-colors text-gray-600 hover:text-gray-900"
      >
        <i className="fa-solid fa-bars text-lg"></i>
      </button>
      
      <div className="relative flex-1 max-w-xl">
        <input
          type="text"
          placeholder="搜索AI知识、数据集或项目..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-2.5 rounded-full border border-gray-200/80 bg-white/80 focus:outline-none focus:ring-2 focus:ring-pink-500/30 focus:border-transparent shadow-sm transition-all duration-200"
        />
        <i className="fa-solid fa-search absolute left-4 top-3.5 text-gray-400"></i>
        <div className="absolute right-3 top-2.5 flex items-center space-x-1">
          <kbd className="px-1.5 py-0.5 text-xs rounded bg-gray-100 text-gray-500">⌘</kbd>
          <kbd className="px-1.5 py-0.5 text-xs rounded bg-gray-100 text-gray-500">K</kbd>
        </div>
      </div>
      
      <div className="flex items-center space-x-3 ml-6">
        <button 
          onClick={() => toast.info('Notifications coming soon')}
          className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100/50 transition-colors text-gray-600 hover:text-gray-900"
        >
          <i className="fa-regular fa-bell text-lg"></i>
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-pink-500 rounded-full border-2 border-white"></span>
        </button>
        
        <div className="relative">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="appearance-none bg-transparent border-none focus:outline-none text-gray-700 pr-6 pl-3 py-1.5 rounded-full hover:bg-gray-100/50 transition-colors"
          >
            <option value="en">EN</option>
            <option value="zh">中文</option>
          </select>
          <i className="fa-solid fa-chevron-down absolute right-2 top-3 text-xs text-gray-500 pointer-events-none"></i>
        </div>
        
        <button 
          onClick={toggleTheme}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100/50 transition-colors text-gray-600 hover:text-gray-900"
        >
          {theme === 'dark' ? (
            <i className="fa-solid fa-sun text-lg"></i>
          ) : (
            <i className="fa-solid fa-moon text-lg"></i>
          )}
        </button>
        
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 flex items-center justify-center text-white font-medium">
          AI
        </div>
      </div>
    </header>
  );
}