import React from 'react';

interface ClockDigitsProps {
  value: string;
  label: string;
  isDark: boolean;
}

export const ClockDigits: React.FC<ClockDigitsProps> = ({ value, label, isDark }) => {
  return (
    <div className="flex flex-col items-center group">
      <div
        className={`
          relative flex items-center justify-center
          w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44
          rounded-3xl border
          backdrop-blur-xl transition-all duration-500
          ${
            isDark
              ? 'bg-gray-800/40 border-gray-700/50 text-blue-400 shadow-neon-blue'
              : 'bg-white/40 border-white/50 text-gray-800 shadow-glass-light hover:bg-white/60'
          }
        `}
      >
        <span className="text-5xl sm:text-7xl md:text-8xl font-mono font-bold tracking-wider tabular-nums select-none">
          {value}
        </span>
        
        {/* Decorative inner shine for glass effect */}
        <div className={`absolute inset-0 rounded-3xl pointer-events-none ${isDark ? 'bg-gradient-to-br from-white/5 to-transparent' : 'bg-gradient-to-br from-white/40 to-transparent'}`} />
      </div>
      
      <span
        className={`
          mt-4 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase
          transition-colors duration-300
          ${isDark ? 'text-gray-500 group-hover:text-blue-400' : 'text-gray-500 group-hover:text-indigo-600'}
        `}
      >
        {label}
      </span>
    </div>
  );
};