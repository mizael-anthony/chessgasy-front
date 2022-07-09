import { Box, Button, FormControl, TextField, Typography, Paper, Avatar, Grid } from "@mui/material"
import { Link, Outlet } from "react-router-dom"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Colors } from "../../styles/theme/Theme";
import { useEffect } from "react";


export function Account({changePosition}) {
    useEffect(()=>{
        changePosition('static')
    })

    return (
        <>
            <Grid>
                <Paper elevation={10} style={{ padding: 30, height: '70vh', width: 350, margin: '20px auto' }}>
                    <Outlet />
                </Paper>

            </Grid>


        </>
    )
}


export const Login = () => {
    return (
        <Box>
            <Grid align={'center'}>
                <Avatar  style={{backgroundColor:Colors.darkslategrey, width:56, height:56}}><LockOutlinedIcon/></Avatar>
                <Typography variant="h4">Connexion</Typography>
            </Grid>
            <TextField
                placeholder="Entrer votre nom d'utilisateur"
                label="Nom d'utilisateur"
                fullWidth
                required
                style={{margin:'7px auto'}}
            />
            <TextField
                placeholder="Entrer votre mot de passe"
                label="Mot de passe"
                fullWidth
                required
                type={'password'}
                style={{margin:'7px auto'}}

            />

                
            <Typography textAlign={'center'} variant="h6" style={{margin:'5px auto'}} >
                <Link to="reset-password">Mot de passe oublié?</Link>
            </Typography>


            <Button variant="contained" type={'submit'} style={{margin:'3px auto'}} fullWidth >
            
                Se connecter
            </Button>

            
            <Button variant="contained" color="error" style={{margin:'3px auto'}} fullWidth>
                <Link to="register" style={{textDecoration:'none', color:'white'}}>
                    Créer un nouveau compte
                </Link>
            </Button>


        </Box>

    )
}

export const Register = () => {
    return (
        <div>Register</div>
    )
}


export const Logout = () => {
    return (
        <div>Logout</div>
    )
}

export const ChangePassword = () => {
    return (
        <Box
            sx={{ display: 'flex', justifyContent: 'center' }}
        >
            <FormControl>
                <Typography variant="h2">Renouvellement mot de passe</Typography>

                <TextField
                    helperText="Entrer votre nouveau mot de passe"
                    label="Nouveau mot de passe"
                />
                <TextField
                    helperText="Confirmer votre nouveau mot de passe"
                    label="Confirmation du mot de passe"
                />
                <Button variant="contained">Terminer</Button>
            </FormControl>
        </Box>
    )
}
