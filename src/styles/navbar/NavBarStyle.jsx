import { Box, List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme/Theme";
import '@fontsource/montez'


// Container
export const NavBarContainer = styled(Box)(() => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px',



}))


// Header
export const NavBarHeader = styled(Typography)(() => ({

    padding: '2px',
    flexGrow: 1,
    fontSize: '3em',
    fontFamily: '"Montez", "cursive"',
    color: Colors.stalegrey,
    letterSpacing: '.3rem',

}))

// List
export const LinkList = styled(List)(({ type }) => ({

    display: type === 'row' ? 'flex' : 'block',
    flexGrow: 3,
    fontSize: '1em',
    justifyContent : 'center',
    alignItems : 'center',
    color: Colors.stalegrey


}))


// Action Mobile
export const ActionContainerMobile = styled(Box)(() => ({


    display : 'flex',
    background : Colors.dark,
    position : 'fixed',
    bottom : 0,
    left : 0,
    width : '100%',
    alignItems : 'center',
    zIndex : 99,
    borderTop : ` 1px solid ${Colors.light}`





}))
