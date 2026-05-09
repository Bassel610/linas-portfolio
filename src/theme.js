import { createTheme } from '@mui/material/styles';
import { COLORS } from './constants/colors';

const theme = createTheme({
  palette: {
    primary: { main: COLORS.primary, dark: COLORS.primaryDark, light: COLORS.primaryLight, contrastText: '#FFFFFF' },
    secondary: { main: COLORS.secondary, dark: '#D4D5CF', light: '#F5F6F0', contrastText: COLORS.textPrimary },
    background: { default: COLORS.background, paper: COLORS.surface },
    text: { primary: COLORS.textPrimary, secondary: COLORS.textSecondary },
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
    h1: { fontSize: '3rem', fontWeight: 700, lineHeight: 1.2, '@media (max-width:600px)': { fontSize: '2rem' } },
    h2: { fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.2, '@media (max-width:600px)': { fontSize: '1.75rem' } },
    h3: { fontSize: '2rem', fontWeight: 600, lineHeight: 1.3, '@media (max-width:600px)': { fontSize: '1.5rem' } },
    h4: { fontSize: '1.5rem', fontWeight: 600, lineHeight: 1.4 },
    h5: { fontSize: '1.25rem', fontWeight: 600, lineHeight: 1.4 },
    h6: { fontSize: '1.125rem', fontWeight: 600, lineHeight: 1.4 },
    body1: { fontSize: '1rem', lineHeight: 1.6, color: COLORS.textSecondary },
    body2: { fontSize: '0.875rem', lineHeight: 1.6, color: COLORS.textSecondary },
    button: { textTransform: 'none', fontWeight: 500 },
  },
  spacing: 8,
  shape: { borderRadius: 8 },
  breakpoints: { values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 } },
  components: {
    MuiButton: { styleOverrides: { root: { borderRadius: 8, padding: '12px 24px', fontSize: '1rem', fontWeight: 500, textTransform: 'none', boxShadow: 'none', '&:hover': { boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' } } } },
    MuiCard: { styleOverrides: { root: { borderRadius: 12, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', '&:hover': { boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.15)' } } } },
    MuiTextField: { styleOverrides: { root: { '& .MuiOutlinedInput-root': { borderRadius: 8 } } } },
    MuiPaper: { styleOverrides: { root: { borderRadius: 12 } } },
  },
});

export default theme;
