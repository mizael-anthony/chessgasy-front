import { createTheme } from "@mui/material/styles";

/**
 * @description Création Thème personnalisé
 */


// Création de nouvelle couleur
export const Colors = {
    light: '#fff',
    dark: '#343a40',
    darkslategrey: 'rgb(47, 79, 79)',
    midnightblue: '#191970',
    stalegrey: '#708090',
    grey: '#808080',
    darkreact: '#20232a',
    wood: '#DEB887',
    saddlebrown: '#8B4513',
    // Chess figure
    chessblue: '#4C5D73',
    chesscreme: '#F2D7B6',
    chessorangedark: '#D99962',
    chessbrown: '#735439',
    chessroseyoung: '#D9B391',

    // Chess bois
    chess_boiscreme: '#D9AB73',
    chess_boisnosaturation: '#BF7B3F',
    chess_boisbrown: '#8C4014',
    chess_white: '#F2F2F2',
    chess_black: '#0D0D0D',

    // Chess deco
    chess_deco_blue : '#54678C',
    chess_deco_bluelight : '#8F9FBF',
    chess_deco_bluedark : '#333740',
    chess_deco_beigewhite : '#F2EBDF',
    chess_deco_beigedark : '#A68160',

    // Chess horse
    chess_horse_blue: '#3B3659',
    chess_horse_black: '#08080D',
    chess_horse_darkblue: '#111426',
    chess_horse_darksobre: '#D9CA9C',
    chess_horse_beigesobre: '#A69576',




}

// Création du thème
const Theme = createTheme({
    // Ajout de nouvelle couleur dans Theme par défaut
    palette: {
        light: {
            main: Colors.light
        },
        dark: {
            main: Colors.dark
        },
        darkslategrey: {
            main: Colors.darkslategrey
        },
        midnightblue: {
            main: Colors.midnightblue
        },
        stalegrey: {
            main: Colors.stalegrey
        },

        grey: {
            main: Colors.grey
        }
    }


})


export default Theme