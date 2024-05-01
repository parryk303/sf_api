import { AppContextConsumer, AppContextProvider } from '@client/shared/contexts';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@client/assets/fonts/fontface.css';
import ReactDOM from 'react-dom/client';
import MainModule from './modules';
import React from 'react';

function App() {
  return (
    <>
      <AppContextProvider>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          limit={1}
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick
          pauseOnHover
        />
        <AppContextConsumer>
          {({ theme, themeVariant }) => {
            document.body.style.backgroundColor =
              theme[themeVariant]?.palette?.background.default;
            return (
              <ThemeProvider theme={{ ...theme[themeVariant] }}>
                <CssBaseline />
                <MainModule />
              </ThemeProvider>
            );
          }}
        </AppContextConsumer>
      </AppContextProvider>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
