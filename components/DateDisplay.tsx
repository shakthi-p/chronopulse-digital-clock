import React from 'react';

interface DateDisplayProps {
  date: Date;
  isDark: boolean;
}

export const DateDisplay: React.FC<DateDisplayProps> = ({ date, isDark }) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const formattedDate = date.toLocaleDateString(undefined, options);

  return (
    <div
      className={`
        text-lg sm:text-xl md:text-2xl font-medium tracking-wide
        transition-colors duration-500
        ${isDark ? 'text-blue-200' : 'text-indigo-600'}
      `}
    >
      {formattedDate}
    </div>
  );
};