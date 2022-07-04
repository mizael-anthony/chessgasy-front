
import { useTheme } from "@mui/material"
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from "../../styles/banner/BannerStyle"


export default function Banner() {

    // Utiliser le thème par défaut pour savoir la taille de l'écran actuelle
    const theme = useTheme()
    // Un Site Malagasy pour gérer le Jeu d'Echecs d'un Pays

    return (
        <BannerContainer>
            <BannerImage src="./wallhaven-2kg97y.jpg"/>
            <BannerContent>

                <BannerTitle variant="h3">
                    ChessGasy
                </BannerTitle>

                <BannerDescription variant="subtitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eos architecto quos enim. Dignissimos porro corporis laborum laudantium minima recusandae, eius assumenda culpa magnam harum repudiandae incidunt voluptate quae nostrum?
                </BannerDescription>
            
            </BannerContent>
        </BannerContainer>
    )
}

