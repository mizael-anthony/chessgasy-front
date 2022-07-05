import { AppBar, Box, List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme/Theme";



// Container
export const NavBarContainer = styled(Box)(() => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px 8px'


}))


// Header
export const NavBarHeader = styled(Typography)(() => ({

    padding: '4px',
    flexGrow: 1,
    fontSize: '3em',
    color: Colors.stalegrey


}))

// List
export const LinkList = styled(List)(({ type }) => ({

    display: type === 'row' ? 'flex' : 'block',
    padding: '3px',
    flexGrow: 1,
    fontSize: '1em',
    color: Colors.stalegrey


}))


// Action Mobile
export const ActionContainerMobile = styled(Box)(() => ({


    display : 'flex',
    background : Colors.light,
    position : 'fixed',
    bottom : 0,
    left : 0,
    width : '100%',
    alignItems : 'center',
    zIndex : 99,
    borderTop : ` 1px solid ${Colors.midnightblue}`





}))
