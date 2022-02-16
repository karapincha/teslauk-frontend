const palette = {
  B: {
    paletteName: 'Brand',
    base: '#E31937',
    darkest: '#6E0C2E',
    10: '#FCE8EB',
    50: '#F9D1D7',
    100: '#F7BAC3',
    200: '#F18C9B',
    300: '#EB5E73',
    400: '#E6304B',
    500: '#E31937',
    600: '#CB0825',
    700: '#980017',
    800: '#6E0C2E',
  },
  A: {
    paletteName: 'Accent',
    base: '#FFB800',
    darkest: '#C77700',
    10: '#FFF5D1',
    50: '#FFEBA3',
    100: '#FFDC5F',
    200: '#FFD748',
    300: '#FFCD1A',
    400: '#FFC700',
    500: '#FFB800',
    600: '#FFA800',
    700: '#ED920A',
    800: '#C77700',
  },
  N: {
    paletteName: 'Neutral',
    base: '#273040',
    darkest: '#040D1F',
    10: '#F8FBFD',
    50: '#ECF2F6',
    100: '#E5EDF4',
    200: '#D8E1EC',
    300: '#C2D0DE',
    400: '#A1AFC1',
    500: '#728197',
    600: '#4B5669',
    700: '#273040',
    800: '#040D1F',
  },
  R: {
    paletteName: 'Red',
    base: '#E31C1F',
    darkest: '#3E0808',
    10: '#FCEAEB',
    50: '#F7C1C2',
    100: '#F29899',
    200: '#ED6E70',
    300: '#E84547',
    400: '#E31C1F',
    500: '#BA1719',
    600: '#911214',
    700: '#670D0E',
    800: '#3E0808',
  },
  G: {
    paletteName: 'Green',
    base: '#07D851',
    darkest: '#00453F',
    10: '#E6FCEE',
    50: '#B3F6CB',
    100: '#B3F6CB',
    200: '#67EC97',
    300: '#4EE985',
    400: '#2BF171',
    500: '#07D851',
    600: '#007653',
    700: '#005F4C',
    800: '#00453F',
  },
  P: {
    paletteName: 'Purple',
    base: '#5B68D9',
    darkest: '#3D376C',
    10: '#FEF6FF',
    50: '#F3E5F5',
    100: '#E1BEE7',
    200: '#CE93D8',
    300: '#BA68C8',
    400: '#AB47BC',
    500: '#9C27B0',
    600: '#8E24AA',
    700: '#7B1FA2',
    800: '#6A1B9A',
  },
  white: '#fff',
  black: '#000',
}

module.exports = {
  palette: { ...palette },
  brand: { B: palette.B },
  contrast: { dark: palette.N.darkest, light: palette.white },
  primary: { B: palette.B.base, N: palette.N.base },
}
