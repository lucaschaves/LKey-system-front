import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from './styles/global';
import { CourseProvider } from './hooks/Course';

const App: React.FC = () => (
  <>
    <CourseProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </CourseProvider>
    <GlobalStyle />
  </>
);

export default App;
