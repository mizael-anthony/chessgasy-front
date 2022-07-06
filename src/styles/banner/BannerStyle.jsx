import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme/Theme";

// Container
export const BannerContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%', 
    padding: '0px 0px',
    background: Colors.grey,
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center'
    }
}))

// Image
export const BannerImage = styled("img")(({src, theme}) => ({
    src : `url(${src})`,
    width : '100%',
    height: '800px',
    [theme.breakpoints.down('md')]:{
        height: '350px'
    },
    [theme.breakpoints.down('sm')]:{
        height: '300px'
    },
}))

// Content
export const BannerContent = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 420,
    padding: '30px'
}))

// Title
export const BannerTitle = styled(Typography)(({ theme }) => ({
    lineHeight: 1.5,
    fontSize: '72px',
    marginBottom: '20px',
    [theme.breakpoints.down('md')]: {
        fontSize: '50px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '42px',
    }
}))

// Description
export const BannerDescription = styled(Typography)(({ theme }) => ({
    lineHeight: 1.25,
    letterSpacing: 1.25,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
        lineHeight: 1.15,
        letterSpacing: 1.15,
        marginBottom: '1.5em',
    }

}))
