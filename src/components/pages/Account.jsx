import { Box, Button, FormControl, TextField, Typography } from "@mui/material"
import { Link, Outlet } from "react-router-dom"


export function Account() {
    return (
        <>
            <Outlet />
        </>
    )
}


export const Login = () => {
    return (
        <Box
            sx={{ display: 'flex', justifyContent: 'center' }}
        >
            <FormControl>
            <Typography variant="h2">Connexion</Typography>
                <TextField
                    helperText="Entrer votre nom d'utilisateur"
                    label="Nom d'utilisateur"
                />
                <TextField
                    helperText="Entrer votre mot de passe"
                    label="Mot de passe"
                />
                <Typography>
                    Vous avez oublié votre mot de passe?
                    <Link to="reset-password">Changer votre mot de passe</Link>
                </Typography>
                <Typography>
                    Vous n'avez pas encore de compte?
                    <Link to="register">Créer un nouveau compte</Link>
                </Typography>
                <Button variant="contained">Se connecter</Button>
            </FormControl>
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
