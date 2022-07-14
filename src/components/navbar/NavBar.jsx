import { useMediaQuery } from "@mui/material"
import { useTheme } from "@mui/material"
import NavBarDesktop from "./NavBarDesktop"
import NavBarMobile from "./NavBarMobile"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export default function NavBar() {

    // Utiliser le thème par défaut pour savoir la taille de l'écran actuelle
    const theme = useTheme()

    // Vérifier la taille de l'écran si Desktop ou Mobile
    /**
     * @returns true|false
     */
    const matches = useMediaQuery(theme.breakpoints.down('md'))

    // Url de chaque menu
    const urls = {
        'home': '/',
        'news': 'news',
        'tournaments': 'tournaments',
        'clubs': 'clubs',
        'players': 'players',
        'infos': 'infos',
        'profil': 'profil',
    }

    // Modifier position à chaque onglet
    let location = useLocation()
    const [position, setPosition] = useState('absolute')

    useEffect(() => {
        if (location.pathname.includes("profil")) setPosition('static')
        else setPosition('absolute')
    }, [location])



    return (
        <>
            {matches ? <NavBarMobile url={urls} position={position} /> : <NavBarDesktop url={urls} position={position} />}
        </>
    )







}