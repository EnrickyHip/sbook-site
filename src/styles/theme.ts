export type ThemeMode = 'LIGHT' | 'DARK';

const globalColors = {
  white: '#fff',
  gray0: 'rgb(245, 245, 245)',
  gray1: 'rgb(235, 235, 235)',
  gray2: 'rgb(221, 221, 223)',
  gray3: 'rgb(201, 201, 203)',
  gray4: 'rgb(181, 181, 184)',
  gray5: 'rgb(161, 161, 164)',
  gray6: 'rgb(141, 141, 144)',
  gray7: 'rgb(121, 121, 124)',
  gray8: 'rgb(101, 101, 104)',
  gray9: 'rgb(81, 81, 84)',
  gray10: 'rgb(61, 61, 64)',
  gray11: 'rgb(41, 41, 44)',
  gray12: 'rgb(21, 21, 24)',
  deepBlack: 'rgb(0, 0, 0)',
  error: '#CF5959',
};

export const lightTheme = {
  borderRadius: '8px',
  colors: {
    ...globalColors,
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
  borderRadius: '8px',
  colors: {
    ...globalColors,
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
