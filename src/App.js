import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import AllUser from './components/AllUser';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

function App(props) {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path='/' element={<AllUser />} />
          <Route path='/add-user' element={<AddUser />} />
          <Route path={`/edit-user/:id`} element={<EditUser />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
