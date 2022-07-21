import {
    Box, TextField, FormControl, Stack,
    InputLabel, OutlinedInput, InputAdornment, FormHelperText,
} from "@mui/material"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState, useContext, useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import { useForm } from "react-hook-form";
import { usePlayerContext } from "../../App";

export default function Connection() {
    const [isUpdated, setIsUpdated] = useState(false)

    const [passwordValue, showPasswordValue] = useState(false)
    const [confirmPasswordValue, showConfirmedPasswordValue] = useState(false)

    const handleClickShowPassword = () => {
        showPasswordValue(!passwordValue)
    }

    const handleClickShowConfirmedPassword = () => {
        showConfirmedPasswordValue(!confirmPasswordValue)
    }

    const { player, changePlayer } = usePlayerContext()


    const { watch, register, formState: { errors, isValid }, getValues } = useForm({
        mode: 'all', defaultValues: {
            ...player
        }
    })

    useEffect(() => {
        if (isValid) {
            changePlayer({ ...player, ...getValues(), isCompleted: true })

        }
        else {
            changePlayer({ ...player, isCompleted: false });
        }
        setIsUpdated(false)
    }, [isUpdated, isValid])

    return (
        <Box sx={{ padding: '30px' }}>
            <Stack spacing={2}>
                <TextField
                    label="Nom d'utilisateur"
                    placeholder="Entrer votre nom d'utilisateur"
                    {...register("username", {
                        required: {
                            value: true,
                            message: "Veuillez entrer votre nom d'utilisateur."
                        },
                        onChange: e => setIsUpdated(true)


                    })}
                    error={errors.username ? true : false}
                    helperText={errors.username && errors.username.message}

                />

                <TextField
                    label="Adresse electronique"
                    placeholder="Entrer votre adresse mail"
                    {...register("email", {
                        required: {
                            value: true,
                            message: "Veuillez entrer votre adresse mail."
                        },
                        pattern: {
                            value: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
                            message: "Adresse mail invalide."
                        },
                        onChange: e => setIsUpdated(true)


                    })}
                    error={errors.email ? true : false}
                    helperText={errors.email && errors.email.message}
                />

                <FormControl error={errors.password1 ? true : false} sx={{ m: 1, width: '100%' }} variant="outlined">
                    <InputLabel>Mot de passe</InputLabel>
                    <OutlinedInput
                        label="Mot de passe"
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
                        placeholder="Entrer votre mot de passe"
                        {...register("password1", {
                            required: {
                                value: true,
                                message: "Veuillez entrer votre mot de passe s'il vous plait."
                            },
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*[;.@$!%*#?&])[A-Za-z\d;.@$!%*#?&]{8,}$/,
                                message: "Le mot de passe doit contenir au moins 8 caractères mélangés."
                            },
                            onChange: e => setIsUpdated(true)

                        })}

                    />
                    <FormHelperText>{errors.password1 && errors.password1.message}</FormHelperText>
                </FormControl>

                <FormControl error={errors.password2 ? true : false} sx={{ m: 1, width: '100%' }} variant="outlined">
                    <InputLabel>Confirmation mot de passe</InputLabel>
                    <OutlinedInput
                        label="Confirmation mot de passe"
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
                        placeholder="Répeter votre mot de passe"
                        {...register("password2", {
                            required: {
                                value: true,
                                message: "Veuillez confirmer votre mot de passe s'il vous plait."
                            },
                            validate: {
                                samePassword: v => v === getValues("password1") || "Les mots de passe ne correspondent pas"
                            },
                            onChange: e => setIsUpdated(true)


                        })}
                    />
                    <FormHelperText>{errors.password2 && errors.password2.message}</FormHelperText>
                </FormControl>


            </Stack>


        </Box >
    )
}
