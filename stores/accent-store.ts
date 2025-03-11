import { AccentColor } from '@/types/AccentColor';
import { create } from 'zustand';

export const defaultAccent: AccentColor = {
  name: 'Teal',
  color: `#14b8a6`,
};

const accentColors = [
  {
    name: 'Green',
    color: `#3ED248`,
  },
  defaultAccent,
  {
    name: 'Blue',
    color: `#4872E7`,
  },
  {
    name: 'Indigo',
    color: `#6B50E4`,
  },
  {
    name: 'Purple',
    color: `#A248E7`,
  },
  {
    name: 'Yellow',
    color: `#E7E148`,
  },
  {
    name: 'Orange',
    color: `#E79D48`,
  },
  {
    name: 'Red',
    color: `#E74848`,
  },
  {
    name: 'Pink',
    color: `#E748A2`,
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
    root.style.setProperty('--primary', accentColor.color);
  },
  accentColors: accentColors,
}));
