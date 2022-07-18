
import { useTheme } from "@mui/material"
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from "../../styles/banner/BannerStyle"


export default function Banner() {

    // Utiliser le thème par défaut pour savoir la taille de l'écran actuelle
    const theme = useTheme()
    // Un Site Malagasy pour gérer le Jeu d'Echecs d'un Pays

    return (
        <BannerContainer>
            <BannerImage src="./img/wallhaven-2kg97y.jpg"/>
            
        </BannerContainer>
    )
}

