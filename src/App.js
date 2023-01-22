import { CssBaseline, ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes/routes';
import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
      <CssBaseline/>
    </ThemeProvider>
  );
}

export default App;
