import { createTheme, PaletteOptions, Components } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';

const palette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: '#1976d2',
    light: '#63a4ff',
    dark: '#004ba0',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#9c27b0',
    light: '#d05ce3',
    dark: '#6a0080',
    contrastText: '#ffffff',
  },
  background: {
    default: '#f5f5f5',
    paper: '#ffffff',
  },
  text: {
    primary: '#212121',
    secondary: '#555555',
    disabled: '#9e9e9e',
  },
  error: {
    main: '#d32f2f',
    light: '#ff6659',
    dark: '#9a0007',
    contrastText: '#ffffff',
  },
  warning: {
    main: '#ed6c02',
    light: '#ff9800',
    dark: '#b53d00',
    contrastText: '#ffffff',
  },
  info: {
    main: '#0288d1',
    light: '#03a9f4',
    dark: '#01579b',
    contrastText: '#ffffff',
  },
  success: {
    main: '#2e7d32',
    light: '#60ad5e',
    dark: '#005005',
    contrastText: '#ffffff',
  },
  divider: '#e0e0e0',
};

const typography: TypographyOptions = {
  fontFamily: `'Inter', Arial, sans-serif`,
  fontSize: 14,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: { fontSize: '3rem', fontWeight: 700, lineHeight: 1.2 },
  h2: { fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.3 },
  h3: { fontSize: '2rem', fontWeight: 700, lineHeight: 1.3 },
  h4: { fontSize: '1.75rem', fontWeight: 700, lineHeight: 1.3 },
  h5: { fontSize: '1.5rem', fontWeight: 700, lineHeight: 1.4 },
  h6: { fontSize: '1.25rem', fontWeight: 700, lineHeight: 1.4 },
  subtitle1: { fontSize: '1rem', fontWeight: 500, lineHeight: 1.5 },
  subtitle2: { fontSize: '0.875rem', fontWeight: 500, lineHeight: 1.43 },
  body1: { fontSize: '1rem', fontWeight: 400, lineHeight: 1.5 },
  body2: { fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.43 },
  button: { fontSize: '0.875rem', fontWeight: 500, textTransform: 'none' },
  caption: { fontSize: '0.75rem', lineHeight: 1.66 },
  overline: {
    fontSize: '0.75rem',
    lineHeight: 2.66,
    textTransform: 'uppercase',
  },
};

const components: Components = {
  MuiCssBaseline: {
    styleOverrides: {
      '*': { boxSizing: 'border-box' },
      body: {
        margin: 0,
        padding: 0,
        backgroundColor:
          (palette.background && palette.background.default) || '#fff',
        color: (palette.text && palette.text.primary) || '#000',
        fontFamily: typography.fontFamily,
      },
      ul: { listStyle: 'none', margin: 0, padding: 0 },
      ol: { listStyle: 'none', margin: 0, padding: 0 },
      a: { textDecoration: 'none', color: 'inherit' },
    },
  },
  MuiContainer: {
    styleOverrides: {
      root: {
        maxWidth: 1440,
        paddingLeft: 64,
        paddingRight: 64,
        '@media (min-width:1200px)': {
          maxWidth: 1280, // точная ширина для больших экранов
        },
      },
    },
    defaultProps: {
      disableGutters: true,
    },
  },
};

const theme = createTheme({
  palette,
  typography,
  components,
});

export default theme;
