import React from 'react';
import { Disc3 } from 'lucide-react';
import { ViewState } from '../types';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  return (
    <header class="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div 
          class="flex items-center gap-2 cursor-pointer group"
          onClick={() => onNavigate('home')}
        >
          <Disc3 class="w-6 h-6 text-brand-400 group-hover:text-brand-300 transition-colors" />
          <span class="font-semibold text-lg tracking-tight text-slate-100 group-hover:text-white transition-colors">
            WhitePrint <span class="text-slate-400 font-normal">Mastering</span>
          </span>
        </div>
        <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
          <button onClick={() => onNavigate('home')} class={`hover:text-slate-200 transition-colors ${currentView === 'home' ? 'text-brand-400' : ''}`}>Home</button>
          <button class="hover:text-slate-200 transition-colors">Features</button>
          <button class="hover:text-slate-200 transition-colors">Pricing</button>
        </nav>
        <div>
          <button 
            onClick={() => onNavigate('processing')}
            class="bg-brand-600 hover:bg-brand-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Start Mastering
          </button>
        </div>
      </div>
    </header>
  );
};
