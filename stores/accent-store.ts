import { AccentColor } from '@/types/AccentColor';
import { create } from 'zustand';

export const defaultAccent: AccentColor = {
  name: 'Teal',
  primary: '#14b8a6',
  secondary: '#12a191',
};

const accentColors: AccentColor[] = [
  {
    name: 'Green',
    primary: '#3ED248',
    secondary: '#2fc839',
  },
  defaultAccent,
  {
    name: 'Blue',
    primary: '#4872E7',
    secondary: '#3161e4',
  },
  {
    name: 'Indigo',
    primary: '#6B50E4',
    secondary: '#583ae1',
  },
  {
    name: 'Purple',
    primary: '#A248E7',
    secondary: '#9731e4',
  },
  {
    name: 'Yellow',
    primary: '#E7E148',
    secondary: '#e4dd31',
  },
  {
    name: 'Orange',
    primary: '#E79D48',
    secondary: '#e49131',
  },
  {
    name: 'Red',
    primary: '#E74848',
    secondary: '#e43131',
  },
  {
    name: 'Pink',
    primary: '#E748A2',
    secondary: '#e43197',
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
