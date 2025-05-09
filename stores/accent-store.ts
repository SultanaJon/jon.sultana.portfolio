import { AccentColor } from '@/types/accent-color';
import { create } from 'zustand';

export const defaultAccent: AccentColor = {
  name: 'Seagreen',
  primary: '#579E80',
  secondary: '#4E8D73',
};

const accentColors: AccentColor[] = [
  defaultAccent,
  {
    name: 'Blue',
    primary: '#66DBC0',
    secondary: '#5DC6AD',
  },
  {
    name: 'Red',
    primary: '#BC5C67',
    secondary: '#A4515A',
  },
  {
    name: 'Purple',
    primary: '#8C4E8D',
    secondary: '#6F3E70',
  },
  {
    name: 'Pink',
    primary: '#C56DB5',
    secondary: '#B063A2',
  },
];

export type AccentState = {
  accentColor: AccentColor;
  accentColors: AccentColor[];
};

export type AccentActions = {
  setAccentColor: (accent: AccentColor) => void;
};

export const useAccentStore = create<AccentState & AccentActions>((set) => ({
  accentColor: defaultAccent,
  setAccentColor: (accentColor: AccentColor) => {
    set({ accentColor: accentColor });

    // Update the variable for the accent color
    let root = document.documentElement;
    root.style.setProperty('--primary', accentColor.primary);
    root.style.setProperty('--secondary', accentColor.secondary);
  },
  accentColors: accentColors,
}));
