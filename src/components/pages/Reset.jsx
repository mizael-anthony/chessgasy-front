
import {
    Box, Button, FormControl,
    TextField, Typography, Paper,
    Avatar, Grid, Stack, FormGroup,
    useMediaQuery, useTheme, FormLabel,
    RadioGroup, FormControlLabel, Radio,
    InputLabel, OutlinedInput,
    InputAdornment, FormHelperText,
} from "@mui/material"
import { Link, Outlet, useNavigate } from "react-router-dom"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Colors } from "../../styles/theme/Theme";
import { useState } from 'react'
import { useForm } from "react-hook-form";
import { API } from "../../api/API";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';


export const Reset = () => {
    return (
        <Outlet />
    )
}


export const VerifyEmail = () => {

    const { watch, register, formState: { errors }, handleSubmit } = useForm({
        mode: 'onSubmit'
    })

    const onSubmit = (data) => {
        const formData = new FormData()
        formData.append('email', data.email)
    }


    return (
        <Grid>
            <form onSubmit={(e) => { handleSubmit(onSubmit)(e) }}>
                <Paper elevation={10} style={{ padding: 30, width: 500, margin: '20px auto' }}>
                    <Grid align={'center'}>
                        <Avatar style={{ backgroundColor: Colors.darkslategrey, width: 56, height: 56 }}><LockOutlinedIcon /></Avatar>
                        <Typography variant="h5">Réinitialisation du mot de passe</Typography>
                    </Grid>
                    <Grid>
                        <Typography variant="caption">
                            Saisissez votre adresse électronique ci-dessous et
                            nous vous enverrons les instructions pour en créer un nouveau.
                        </Typography>
                    </Grid>
                    <TextField
                        placeholder="Entrer votre adresse electronique"
                        label="Adresse electronique"
                        fullWidth
                        style={{ margin: '7px auto' }}
                        {...register('email', {
                            required: {
                                value: true,
                                message: "Veuillez entrer votre adresse electronique"
                            }
                        })}
                        error={errors.email ? true : false}
                        helperText={errors.email && errors.email.message}
                    />

                    <Button variant="contained" type={'submit'} style={{ margin: '3px auto' }} fullWidth >
                        Envoyer
                    </Button>
                </Paper>
            </form>
        </Grid>
    )
}

export const ResetPassword = () => {

    const [passwordValue, showPasswordValue] = useState(false)
    const [confirmPasswordValue, showConfirmedPasswordValue] = useState(false)

    const handleClickShowPassword = () => {
        showPasswordValue(!passwordValue)
    }

    const handleClickShowConfirmedPassword = () => {
        showConfirmedPasswordValue(!confirmPasswordValue)
    }

    const { watch, register, formState: { errors }, handleSubmit, getValues } = useForm({
        mode: 'all'
    })

    return (
        <Grid>

            <Paper elevation={10} style={{ padding: 30, width: 350, margin: '20px auto' }}>
                <Grid align={'center'}>
                    <Avatar style={{ backgroundColor: Colors.darkslategrey, width: 56, height: 56 }}><LockOutlinedIcon /></Avatar>
                    <Typography variant="h5">Réinitialisation mot de passe</Typography>
                </Grid>


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

                        })}
                    />
                    <FormHelperText>{errors.password2 && errors.password2.message}</FormHelperText>
                </FormControl>

                <Button variant="contained" type={'submit'} style={{ margin: '3px auto' }} fullWidth >
                    Reinitialiser mot de passe
                </Button>



            </Paper>
        </Grid>
    )
}