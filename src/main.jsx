import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme.js';
import LoginButton from './components/LoginButton';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const root = document.getElementById('root');
const rootElement = ReactDOM.createRoot(root);

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>     
    <Router>
        <Routes>
          <Route path="/" element={<LoginButton />} />
          <Route path="/spacex" element={<App />} />
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  root
)
  