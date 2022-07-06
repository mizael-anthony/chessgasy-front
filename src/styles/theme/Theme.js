import { createTheme } from "@mui/material/styles";

/**
 * @description Création Thème personnalisé
 */


// Création de nouvelle couleur
export const Colors = {
    light : '#fff',
    dark : '#343a40',
    darkslategrey : 'rgb(47, 79, 79)',
    midnightblue : '#191970',
    stalegrey : '#708090',
    grey : '#808080',
    darkreact: '#20232a',
    wood: '#DEB887',
    saddlebrown: '#8B4513'

}

// Création du thème
const Theme = createTheme({
    // Ajout de nouvelle couleur dans Theme par défaut
    palette : {
        light : {
            main : Colors.light
        },
        dark : {
            main : Colors.dark
        },
        darkslategrey : {
            main : Colors.darkslategrey
        },
        midnightblue : {
            main : Colors.midnightblue
        },
        stalegrey : {
            main : Colors.stalegrey
        },
        
        grey : {
            main : Colors.grey
        }
    }


})


export default Theme