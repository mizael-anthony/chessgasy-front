import { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material';
import Theme, { Colors } from './styles/theme/Theme';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import {
  Routes, Route

} from "react-router-dom";

import Players from './components/pages/player/Players';
import Infos from './components/pages/info/Infos';
import Actualities from './components/pages/actuality/Actualities'
import Home from './components/pages/home/Home'
import Tournaments from './components/pages/tournament/Tournaments'
import Clubs from './components/pages/club/Clubs';

function App() {

  useEffect(() => {
    document.title = "ChessGasy - Acceuil"
  }, [])



  return (

    <ThemeProvider theme={Theme}>

      <Container
        maxWidth="xl"
        sx={{
          background: Colors.light
        }

        }>

        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="news" element={<Actualities/>}/>
          <Route path="tournaments" element={<Tournaments/>}/>
          <Route path="clubs" element={<Clubs/>}/>
          <Route path="players" element={<Players/>}/>
          <Route path="infos" element={<Infos/>}/>
        </Routes>
        <Footer />


        {/* <NavBarExample></NavBarExample> */}


      </Container>


    </ThemeProvider>

  );
}

export default App;
