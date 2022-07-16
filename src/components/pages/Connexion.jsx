import {
    Box, Button, TextField, Grid, FormControl, Stack,
    InputLabel, OutlinedInput, InputAdornment,
} from "@mui/material"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import { Controller, useForm } from "react-hook-form";


export default function Connexion() {
    const [passwordValue, showPasswordValue] = useState(false)
    const [confirmPasswordValue, showConfirmedPasswordValue] = useState(false)


    const handleClickShowPassword = () => {
        showPasswordValue(!passwordValue)
    }

    const handleClickShowConfirmedPassword = () => {
        showConfirmedPasswordValue(!confirmPasswordValue)
    }


    const { watch, register, formState:{errors} } = useForm({mode:'all'})

    return (
        <Box sx={{ padding: '30px' }}>
            <Stack spacing={2}>
                <TextField
                    label="Nom d'utilisateur"
                    placeholder="Entrer votre nom d'utilisateur"
                    {...register("userName", {
                        required:{
                            value: true,
                            message: "Le nom d'utilisateur est obligatoire."
                        },
                        minLength:{
                            value: 4,
                            message: "Le nom d'utilisateur doit être au mininum 4 caractères."
                        }
                    })}
                />
                {errors.userName && <small>{errors.userName.message}</small>}


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


        </Box >
    )
}
