import { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material';
import Theme, { Colors } from './styles/theme/Theme';
import NavBar from './components/navbar/NavBar';
import Home from './components/pages/Home';
import { Player } from './components/pages/Player';
import Infos from './components/pages/Infos';
import { Tournament } from './components/pages/Tournament';
import Footer from './components/footer/Footer';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Actuality } from './components/pages/Actuality'
import { Club } from './components/pages/Club'
import { Account, ChangePassword, Login, UserProfil, } from './components/pages/Account';
import { Reset, ResetPassword, VerifyEmail, } from './components/pages/Reset';
import { StepperItems } from './helpers/StepperItems';
import constate from "constate"
import NotFound from './components/pages/NotFound';
import { API } from './api/API';


function usePlayer() {

  const [player, setPlayer] = useState({
    username: '', email: '', password1: '', password2: '',
    photo: '', sex: '', birthday: '', contact: '', id_fide: '',
    last_name: '', first_name: '', title: '', standard_elo: 0, rapid_elo: 0, blitz_elo: 0,
    province: '', region: '', town: '', quarter: '',
    isCompleted: false,

  })

  useEffect(() => {
    const token = localStorage.getItem('user_token')
    if (token) {
      API.getUserInfos(token)
        .then(success => {
          // console.log(success)
          const data = success.data
          const place = data.place

          API.getPlayer(data.username)
            .then(player => {
              console.log(player)

            })
            .catch(error => {
              console.log(error)

            })

          changePlayer({ ...player, ...data, ...place })


        })
        .catch(error => {
          console.log(error)
        })



    }
  }, [])




  const changePlayer = (p) => setPlayer(p)


  return { player, changePlayer }
}

export const [PlayerProvider, usePlayerContext] = constate(usePlayer)

function App() {



  useEffect(() => {
    document.title = `ChessGasy | Acceuil`

  })



  return (
    <ThemeProvider theme={Theme}>

      <Container

        maxWidth="xl"
        sx={{
          background: Colors.darkslategrey,
          padding: { md: '0px', xs: '0px', sm: '0px' }

        }

        }>
        <PlayerProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="news" element={<Actuality />} />
            <Route path="tournaments" element={<Tournament />} />
            <Route path="clubs" element={<Club />} />
            <Route path="players" element={<Player />} />
            <Route path="infos" element={<Infos />} />
            <Route path="user" element={<Account />}>
              <Route index element={localStorage.getItem('user_token') ? <UserProfil /> : <Login />} />
              <Route path='login' element={<Login />} />
              <Route path='profil' element={<UserProfil />} />
              <Route path="change-password" element={<ChangePassword />} />
              <Route path="register" element={<StepperItems />} />
              <Route path="reset-password" element={<Reset />}>
                <Route index element={<VerifyEmail />} />
                <Route path="confirm-password/:uid/:token" element={<ResetPassword />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </PlayerProvider>





      </Container>


    </ThemeProvider>
    // </dataContext.Provider>
  );
}

export default App;
