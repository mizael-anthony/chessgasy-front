import { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material';
import Theme, { Colors } from './styles/theme/Theme';
import NavBar from './components/navbar/NavBar';
import Home from './components/pages/Home';
import {Player} from './components/pages/Player';
import Infos from './components/pages/Infos';
import {Tournament} from './components/pages/Tournament';
import Footer from './components/footer/Footer';
import { Routes, Route } from 'react-router-dom';
import {Actuality} from './components/pages/Actuality'
import {Club} from './components/pages/Club'


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

        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="news" element={<Actuality/>}/>
          <Route path="tournaments" element={<Tournament/>}/>
          <Route path="clubs" element={<Club/>}/>
          <Route path="players" element={<Player/>}/>
          <Route path="infos" element={<Infos/>}/>
        </Routes>
        <Footer/>





      </Container>


    </ThemeProvider>

  );
}

export default App;
