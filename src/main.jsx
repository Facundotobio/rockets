import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme.js';
import LoginForm from './components/LoginForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About.jsx';

const root = document.getElementById('root');
const rootElement = ReactDOM.createRoot(root);

rootElement.render(
  <React.StrictMode>

    <ChakraProvider theme={theme}>     
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/spacex" element={<App />} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
  