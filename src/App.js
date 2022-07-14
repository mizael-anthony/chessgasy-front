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
import { Routes, Route, useLocation } from 'react-router-dom';
import {Actuality} from './components/pages/Actuality'
import {Club} from './components/pages/Club'
import { Account, ChangePassword, Login, Register } from './components/pages/Account';


function App() {


  let location = useLocation()
  const [title, setTitle] = useState('Acceuil')



  useEffect(() => {
    document.title = `ChessGasy - ${title}`
     
    
  }, [location])



  return (

    <ThemeProvider theme={Theme}>

      <Container

        maxWidth="xl"
        sx={{
          background: Colors.darkslategrey,
          padding: {md:'0px', xs:'0px', sm:'0px'}

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
          <Route path="profil" element={<Account/>}>
            <Route index element={<Login/>}/>
            <Route path="reset-password" element={<ChangePassword/>}/>
            <Route path="register" element={<Register/>}/>
          </Route>
        </Routes>
        <Footer/>





      </Container>


    </ThemeProvider>

  );
}

export default App;
