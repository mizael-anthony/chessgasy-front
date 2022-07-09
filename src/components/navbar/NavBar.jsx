import { useMediaQuery } from "@mui/material"
import { useTheme } from "@mui/material"
import NavBarDesktop from "./NavBarDesktop"
import NavBarMobile from "./NavBarMobile"
import { useState } from "react"


export default function NavBar({position}) {

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



    return (
        <>
            {matches ? <NavBarMobile url={urls} position={position} /> : <NavBarDesktop url={urls} position={position} />}
        </>
    )







}