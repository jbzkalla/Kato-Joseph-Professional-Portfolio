
import React from 'react';
import { useTheme } from './ThemeProvider';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="bg-transparent border-gray-600 hover:bg-gray-800">
          {theme === 'light' ? (
            <i className='bx bx-sun text-yellow-500'></i>
          ) : theme === 'dark' ? (
            <i className='bx bx-moon text-blue-400'></i>
          ) : (
            <i className='bx bx-desktop text-gray-400'></i>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-portfolio-dark border-gray-600">
        <DropdownMenuItem 
          onClick={() => setTheme('light')}
          className="text-white hover:bg-gray-700 cursor-pointer"
        >
          <i className='bx bx-sun mr-2'></i>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme('dark')}
          className="text-white hover:bg-gray-700 cursor-pointer"
        >
          <i className='bx bx-moon mr-2'></i>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme('system')}
          className="text-white hover:bg-gray-700 cursor-pointer"
        >
          <i className='bx bx-desktop mr-2'></i>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggle;
