
import {
    Box, Button, FormControl,
    TextField, Typography, Paper,
    Avatar, Grid, Stack, FormGroup,
    InputLabel, OutlinedInput,
    InputAdornment, FormHelperText,
} from "@mui/material"
import { Link, Outlet, useNavigate, useParams } from "react-router-dom"
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

    const [isEmailSend, setIsEmailSend] = useState(false)

    const { watch, register, formState: { errors }, handleSubmit } = useForm({
        mode: 'onSubmit'
    })

    const onSubmit = (data) => {
        const formData = new FormData()
        formData.append('email', data.email)
        API.password_reset(formData)
            .then(success => {
                console.log(success)
                setIsEmailSend(true)

            })
            .catch(error => {
                console.log(error)
            })

    }


    return (
        <Grid>
            <form onSubmit={(e) => { handleSubmit(onSubmit)(e) }}>
                <Paper elevation={10} style={{ padding: 30, width: 500, margin: '20px auto' }}>
                    <Grid align={'center'}>
                        <Avatar style={{ backgroundColor: Colors.darkslategrey, width: 56, height: 56 }}><LockOutlinedIcon /></Avatar>
                        <Typography variant="h5">Réinitialisation du mot de passe</Typography>
                    </Grid>
                    {
                        !isEmailSend ?
                            (
                                <>
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
                                            },
                                            pattern: {
                                                value: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
                                                message: "Adresse mail invalide."
                                            },
                                        })}
                                        error={errors.email ? true : false}
                                        helperText={errors.email && errors.email.message}
                                    />

                                    <Button variant="contained" type={'submit'} style={{ margin: '3px auto' }} fullWidth >
                                        Envoyer
                                    </Button>
                                </>
                            ) :

                            (
                                <Box>
                                    <Typography variant="caption">
                                        Nous vous avons envoyé par courriel les instructions pour changer de mot de passe,
                                        pour autant qu’un compte existe avec l’adresse que vous avez indiquée.
                                    </Typography>
                                </Box>
                            )
                    }
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

    const {uid, token}  = useParams()
    const navigate = useNavigate()

    const { watch, register, formState: { errors }, handleSubmit, getValues } = useForm({
        mode: 'all', defaultValues:{
            'uid': uid,
            'token': token
        }
    })

    const onSubmit = (data) => {
        // console.log(data)
        const formData = new FormData()
        formData.append('uid', uid)
        formData.append('token', token)
        formData.append('new_password', data.new_password)
        formData.append('re_new_password', data.re_new_password)

        API.confirm_password_reset(formData)
            .then(success =>{
                console.log(success)
                navigate('/user/login')

            })
            .catch(error =>{
                console.log(error)
            })

    }

    return (
        <Grid>
            <form onSubmit={(e) => { handleSubmit(onSubmit)(e) }}>
                <Paper elevation={10} style={{ padding: 30, width: 350, margin: '20px auto' }}>
                    <Grid align={'center'}>
                        <Avatar style={{ backgroundColor: Colors.darkslategrey, width: 56, height: 56 }}><LockOutlinedIcon /></Avatar>
                        <Typography variant="h5">Réinitialisation du mot de passe</Typography>
                    </Grid>

                    <Stack spacing={2}>


                        <TextField
                            label="Identifiant"
                            {...register('uid')}
                            inputProps= {{
                                readOnly : true
                            }}

                        />

                        <TextField
                            label="Clé"
                            {...register('token')}
                            inputProps= {{
                                readOnly : true
                            }}

                        />


                        <FormControl error={errors.new_password ? true : false} sx={{ m: 1, width: '100%' }} variant="outlined">
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
                                {...register("new_password", {
                                    required: {
                                        value: true,
                                        message: "Veuillez entrer votre mot de passe s'il vous plait."
                                    },
                                })}

                            />
                            <FormHelperText>{errors.new_password && errors.new_password.message}</FormHelperText>
                        </FormControl>


                        <FormControl error={errors.re_new_password ? true : false} sx={{ m: 1, width: '100%' }} variant="outlined">
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
                                {...register("re_new_password", {
                                    required: {
                                        value: true,
                                        message: "Veuillez confirmer votre mot de passe s'il vous plait."
                                    },
                                    validate: {
                                        samePassword: v => v === getValues("new_password") || "Les mots de passe ne correspondent pas"
                                    },

                                })}
                            />
                            <FormHelperText>{errors.re_new_password && errors.re_new_password.message}</FormHelperText>
                        </FormControl>

                        <Button variant="contained" type={'submit'} style={{ margin: '3px auto' }} fullWidth >
                            Réinitialiser mot de passe
                        </Button>


                    </Stack>

                </Paper>
            </form>
        </Grid>
    )
}