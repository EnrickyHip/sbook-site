export type ThemeMode = 'LIGHT' | 'DARK';

export const lightTheme = {
  colors: {
    background: {
      primary: '#693F81',
      primaryLighter: '#8753A5',
      primaryDarker: '#5D3772',
      primaryMate: '#443A4B',
      secondary: '#F9F9F9',
      secondaryDarker: '#DDDDDD',
      secondaryAlternative: '#E9E9E9',
    },
    text: {
      primary: '#444',
      primaryDarker: '#000',
      secondary: '#F5F5F5',
      secondaryDarker: '#DDDDDD',
      colorHover: '#DDDDDD',
      selected: '#703292',
    },
    border: 'rgb(200, 200, 200)',
  },
};

export type Theme = typeof lightTheme;

export const darkTheme: Theme = {
  colors: {
    background: {
      primary: '#693F81',
      primaryLighter: '#8753A5',
      primaryDarker: '#5D3772',
      primaryMate: '#443A4B',
      secondary: '#12171F',
      secondaryDarker: '#111111',
      secondaryAlternative: '#2D2D2D',
    },
    text: {
      primary: '#F5F5F5',
      primaryDarker: '#DDDDDD',
      secondary: '#252525',
      secondaryDarker: '#111111',
      colorHover: '#DDDDDD',
      selected: '#B589CE',
    },
    border: 'rgb(85, 85, 85)',
  },
};
