import { create } from '@storybook/theming/create'
import logo from './storybook-logo.svg'

export default create({
  base: 'light',

  colorPrimary: '#016FD4',
  colorSecondary: '#040D1F',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#E5EDF4',
  appBorderRadius: 0,

  // Typography
  fontBase: '"Inter", sans-serif',
  fontCode: '"Roboto Mono", monospace',

  // Text colors
  textColor: '#273040',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#273040',
  barSelectedColor: '#016FD4',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: 'silver',
  inputTextColor: '#273040',
  inputBorderRadius: 4,

  brandTitle: 'Karapincha',
  brandImage: logo,
})
