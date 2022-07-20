import { useCallback, useEffect, useReducer, useState } from 'react'
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
import { Account, ChangePassword, Login, Register, UserProfil } from './components/pages/Account';
import { StepperItems } from './helpers/StepperItems';
import { createContext } from 'react'
import constate from "constate"

// function reducer(oldState,action){
//   console.log(oldState,action);
//   return {
//     ...oldState,
//     ...action.data
//   }
// }

// export const dataContext = createContext({
//   data:{
//     nom: "",
//   prenom: ""
//   },
//   info:{nom:"",prenom:""},
//   setInfo:()=>{}
// })

// const data = {
//   nom: "rolio", prenom: "warol"
// }

function usePlayer() {
  const [player, setPlayer] = useState({
    username: '', email: '', password1: '', password2: '',
    photo: '', sex: '', birthday:'', contact:'', id_fide: '',
    last_name: '', first_name: '', title:'', standard_elo: 0, rapid_elo: 0, blitz_elo: 0, 
    province:'', region:'', town:'', quarter:'', isCompleted:false,
  })
  // const changePlayer = useCallback((...p) => setPlayer(...p))
  const changePlayer = (p) => setPlayer(p)

  
  return { player, changePlayer }
}




export const [PlayerProvider, usePlayerContext] = constate(usePlayer)

function App() {
  // console.log(process.env)
  // const [info,dispatch]=useReducer(reducer,{nom:"rolio",prenom:"warol"})
  // const emiter=useCallback((...arg)=>dispatch(...arg),[info])
  // console.log(info);

  let location = useLocation()
  const [title, setTitle] = useState('Acceuil')




  useEffect(() => {
    document.title = `ChessGasy - ${title}`


  }, [location])



  return (
    // <dataContext.Provider value={{data,info,setInfo:emiter}} >
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
            <Route path="profil" element={<Account />}>
              <Route index element={<UserProfil />} />
              <Route path='login' element={<Login />} />
              <Route path="reset-password" element={<ChangePassword />} />
              <Route path="register" element={<StepperItems />} />
              <Route path="user" element={<UserProfil />} />

            </Route>
          </Routes>
          <Footer />
        </PlayerProvider>





      </Container>


    </ThemeProvider>
    // </dataContext.Provider>
  );
}

export default App;
