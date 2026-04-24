import React, { useState } from 'react';
import { ViewState } from './types';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { ProcessingView } from './components/ProcessingView';
import { ResultView } from './components/ResultView';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  const handleNavigate = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Navbar currentView={currentView} onNavigate={handleNavigate} />
      
      <main class="flex-grow flex flex-col">
        {currentView === 'home' && (
          <HomeView onStart={() => handleNavigate('processing')} />
        )}
        
        {currentView === 'processing' && (
          <ProcessingView onComplete={() => handleNavigate('result')} />
        )}
        
        {currentView === 'result' && (
          <ResultView onReset={() => handleNavigate('home')} />
        )}
      </main>

      <footer class="border-t border-slate-800 py-8 mt-auto">
        <div class="max-w-6xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} WhitePrint Mastering. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default App;
