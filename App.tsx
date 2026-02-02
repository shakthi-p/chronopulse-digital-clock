import React, { useState } from 'react';
import { useCurrentTime } from './hooks/useCurrentTime';
import { ClockDigits } from './components/ClockDigits';
import { DateDisplay } from './components/DateDisplay';
import { ThemeToggle } from './components/ThemeToggle';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [is24Hour, setIs24Hour] = useState(false);
  const { date, timeParts } = useCurrentTime(is24Hour);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleFormat = () => {
    setIs24Hour(!is24Hour);
  }

  return (
    // Outer wrapper handles the 'dark' class for Tailwind
    <div className={isDarkMode ? 'dark' : ''}>
      <div
        className={`
          relative min-h-screen flex flex-col items-center justify-center overflow-hidden
          transition-colors duration-700 ease-in-out
          ${
            isDarkMode
              ? 'bg-gray-900'
              : 'bg-gray-50'
          }
        `}
      >
        {/* Ambient Background Blobs */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <div className={`absolute top-0 -left-4 w-72 h-72 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob ${isDarkMode ? 'bg-purple-900/50' : 'bg-purple-300'}`}></div>
          <div className={`absolute top-0 -right-4 w-72 h-72 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000 ${isDarkMode ? 'bg-blue-900/50' : 'bg-yellow-300'}`}></div>
          <div className={`absolute -bottom-8 left-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000 ${isDarkMode ? 'bg-indigo-900/50' : 'bg-pink-300'}`}></div>
        </div>

        {/* Controls Header */}
        <div className="absolute top-6 right-6 flex items-center space-x-4 z-50">
           <button 
             onClick={toggleFormat}
             className={`
               px-4 py-2 rounded-full text-sm font-bold tracking-wider transition-all duration-300
               ${isDarkMode 
                 ? 'bg-gray-800/80 text-blue-300 hover:bg-gray-700 border border-gray-700' 
                 : 'bg-white/80 text-indigo-600 hover:bg-white shadow-sm border border-white'}
             `}
           >
             {is24Hour ? '24H' : '12H'}
           </button>
          <ThemeToggle isDark={isDarkMode} toggle={toggleTheme} />
        </div>

        {/* Main Content Container */}
        <main className="relative flex flex-col items-center space-y-10 sm:space-y-14 p-6 z-10">
          
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 
              className={`
                text-3xl sm:text-4xl font-black tracking-tighter transparent-text
                bg-clip-text text-transparent bg-gradient-to-r
                ${isDarkMode ? 'from-blue-400 to-purple-600' : 'from-indigo-600 to-pink-500'}
              `}
            >
              CHRONOPULSE
            </h1>
            <p className={`text-xs font-mono tracking-[0.3em] uppercase ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              System Ready
            </p>
          </div>

          {/* Clock Grid */}
          <div className="flex flex-col items-center">
            
            <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-8">
              {/* Hours */}
              <ClockDigits value={timeParts.hours} label="Hours" isDark={isDarkMode} />

              {/* Separator */}
              <div className={`
                  text-4xl sm:text-6xl md:text-8xl font-mono pb-12 animate-pulse
                  ${isDarkMode ? 'text-blue-500/80' : 'text-gray-300'}
                `}
              >
                :
              </div>

              {/* Minutes */}
              <ClockDigits value={timeParts.minutes} label="Minutes" isDark={isDarkMode} />

              {/* Desktop Seconds Separator */}
              <div className={`
                  hidden sm:block text-4xl sm:text-6xl md:text-8xl font-mono pb-12 animate-pulse
                  ${isDarkMode ? 'text-blue-500/80' : 'text-gray-300'}
                `}
              >
                :
              </div>

              {/* Desktop Seconds */}
              <div className="hidden sm:block">
                 <ClockDigits value={timeParts.seconds} label="Seconds" isDark={isDarkMode} />
              </div>
            </div>

            {/* Mobile Seconds Row */}
            <div className="sm:hidden mt-6 flex items-center space-x-4">
               <div className={`text-4xl font-mono font-bold tabular-nums ${isDarkMode ? 'text-blue-400' : 'text-gray-800'}`}>
                  {timeParts.seconds}
               </div>
               <span className={`text-xs uppercase tracking-widest ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`}>Sec</span>
            </div>

          </div>

          {/* AM/PM Indicator (Only shows in 12h mode) */}
          {!is24Hour && (
            <div
              className={`
                px-6 py-2 rounded-full text-xl font-bold tracking-widest border
                transition-all duration-500
                ${isDarkMode 
                  ? 'border-purple-500/30 text-purple-400 bg-purple-900/20 shadow-[0_0_15px_rgba(168,85,247,0.3)]' 
                  : 'border-indigo-200 text-indigo-500 bg-indigo-50'}
              `}
            >
              {timeParts.ampm}
            </div>
          )}

          {/* Date Display */}
          <div className="mt-8 pt-8 border-t border-gray-200/10 w-full flex justify-center">
            <DateDisplay date={date} isDark={isDarkMode} />
          </div>

        </main>
        
        {/* Footer */}
        <footer className={`absolute bottom-4 text-[10px] uppercase tracking-widest opacity-50 ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`}>
           Precision Timekeeping
        </footer>
      </div>
    </div>
  );
};

export default App;