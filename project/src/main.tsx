import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider, createTheme } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import '@mantine/core/styles.css';
import './index.css';
import App from './App';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
});

const mantineTheme = createTheme({
  primaryColor: 'teal',
  fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
  defaultRadius: 'md',
});

// Deze component leest het thema uit onze Context en geeft het door aan Mantine
function Root() {
  const { theme } = useTheme();

  return (
    <MantineProvider theme={mantineTheme} forceColorScheme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Root />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
);