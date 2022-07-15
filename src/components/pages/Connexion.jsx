import {
    Typography, Box, Button, TextField, Avatar, Grid, FormControl, Stack,
    InputLabel, OutlinedInput, InputAdornment,
} from "@mui/material"
import { Colors } from "../../styles/theme/Theme"
import PersonIcon from '@mui/icons-material/Person';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import { useState } from "react";

export default function Connexion() {
    const [passwordValue, showPasswordValue] = useState(false)
    const [confirmPasswordValue, showConfirmedPasswordValue] = useState(false)


    const handleClickShowPassword = () => {
        showPasswordValue(!passwordValue)
    }

    const handleClickShowConfirmedPassword = () => {
        showConfirmedPasswordValue(!confirmPasswordValue)
    }


    return (
        <Box sx={{ padding: '30px' }}>

            <form>
                <Stack spacing={2}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Avatar style={{ backgroundColor: Colors.darkslategrey, width: 98, height: 98 }}>
                            <PersonIcon />
                        </Avatar>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            variant="contained"
                            component="label"
                        >
                            Changer de profil
                            <input
                                type="file"
                                hidden
                            />
                        </Button>
                    </Box>

                    <TextField
                        label="Nom d'utilisateur"
                        placeholder="Entrer votre nom d'utilisateur"
                        required
                    />


                    <TextField
                        label="Adresse electronique"
                        placeholder="Entrer votre adresse mail"
                        required
                    />

                    <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                        <InputLabel>Mot de passe</InputLabel>
                        <OutlinedInput
                            type={passwordValue ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                        {passwordValue ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                            placeholder="Entrer votre mot de passe"
                        />
                    </FormControl>

                    <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                        <InputLabel>Confirmation mot de passe</InputLabel>
                        <OutlinedInput
                            type={confirmPasswordValue ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleClickShowConfirmedPassword}
                                        edge="end"
                                    >
                                        {confirmPasswordValue ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                            placeholder="Répeter votre mot de passe"
                        />
                    </FormControl>


                </Stack>

            </form>

        </Box >
    )
}
