import {
    Box, Button, FormControl,
    TextField, Typography, Paper,
    Avatar, Grid, Stack, FormGroup,
    useMediaQuery, useTheme, FormLabel,
    RadioGroup, FormControlLabel, Radio,
} from "@mui/material"
import { Link, Outlet, useNavigate } from "react-router-dom"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Colors } from "../../styles/theme/Theme";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useState } from 'react'
import { useForm } from "react-hook-form";
import { API } from "../../api/API";
import { usePlayerContext } from "../../App";


export function Account() {
    return (
        <Outlet />
    )
}

export const Login = () => {

    const navigate = useNavigate()
    const { watch, register, formState: { errors }, handleSubmit } = useForm({
        mode: 'onSubmit'
    })

    const onSubmit = (data) => {
        // console.log(data)
        const formData = new FormData()
        formData.append("username", data.username)
        formData.append("email", data.email)
        formData.append("password", data.password)

        API.login(formData)
            .then(success => {
                console.log(success)
                const data = success.data
                localStorage.setItem('user_token', data.key)

            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <Grid>

            <form onSubmit={(e) => { handleSubmit(onSubmit)(e) }}>


                <Paper elevation={10} style={{ padding: 30, width: 350, margin: '20px auto' }}>
                    <Stack spacing={2}>

                        <Grid align={'center'}>
                            <Avatar style={{ backgroundColor: Colors.darkslategrey, width: 56, height: 56 }}><LockOutlinedIcon /></Avatar>
                            <Typography variant="h5">Connexion</Typography>
                        </Grid>


                        <TextField
                            placeholder="Entrer votre nom d'utilisateur"
                            label="Nom d'utilisateur"
                            {...register('username', {
                                required: {
                                    value: true,
                                    message: "Veuillez entrer votre nom d'utilisateur."
                                }
                            })}
                            error={errors.username ? true : false}
                            helperText={errors.username && errors.username.message}

                        />

                        <TextField
                            placeholder="Entrer votre adresse electronique"
                            label="Adresse electronique"
                            {...register('email', {
                                required: {
                                    value: true,
                                    message: "Veuillez entrer votre adresse electronique"
                                }
                            })}
                            error={errors.email ? true : false}
                            helperText={errors.email && errors.email.message}


                        />

                        <TextField
                            placeholder="Entrer votre mot de passe"
                            label="Mot de passe"
                            type={'password'}
                            {...register('password', {
                                required: {
                                    value: true,
                                    message: "Veuillez entrer mot de passe"
                                }
                            })}
                            error={errors.password ? true : false}
                            helperText={errors.password && errors.password.message}


                        />

                        <Typography textAlign={'center'} variant="h6" style={{ margin: '5px auto' }} >
                            <Link to="/user/reset-password">Mot de passe oublié?</Link>
                        </Typography>


                        <Button variant="contained" type={'submit'} style={{ margin: '3px auto' }} fullWidth >
                            Se connecter
                        </Button>


                        <Button variant="contained" color="error" style={{ margin: '3px auto' }} fullWidth>
                            <Link to="/user/register" style={{ textDecoration: 'none', color: 'white' }}>
                                Créer un nouveau compte
                            </Link>
                        </Button>

                    </Stack>


                </Paper>
            </form>
        </Grid>


    )
}


// Mila asina anle StepperItems eto atao Register ny anarany

export const UserProfil = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))


    const [sex, setSex] = useState('Homme')
    const [birthday, setBirthday] = useState(new Date())


    const handleClickLogout = () => {
        const token = localStorage.getItem('user_token')

        API.logout(token)
            .then(success => {
                console.log(success)
                localStorage.removeItem('user_token')
            })
            .catch(error => {
                console.log(error)
            })



    }

    const { player, changePlayer } = usePlayerContext()


    const { watch, register, formState: { errors }, getValues } = useForm({
        mode: 'all'
    })



    return (
        <Stack spacing={3} component="form">
            <Paper elevation={10} style={{ padding: 30, margin: '20px auto' }}>
                <pre>{JSON.stringify(watch(), null, 2)}</pre>
                <Typography variant="h3" textAlign={'center'}>Mon profil</Typography>

                <Grid container spacing={{ xs: 2, md: 3 }}>
                    <Grid item xs={2} sm={2} md={3}>
                        <Avatar src={'./img/wallhaven-2kg97y.jpg'} alt="Photo" sx={{ width: 128, height: 128 }} />

                        <Button
                            variant="contained"
                            component="label"

                        >
                            Changer de photo
                            <input
                                type="file"
                                hidden
                            />
                        </Button>


                        <TextField
                            label={"Nom d'utilisateur"}
                            
                        />


                        <TextField
                            label="Contact"
                            
                        />
                    </Grid>

                    <Grid item xs={2} sm={2} md={3}>
                        <TextField
                            label="Nom"
                            
                        />

                        <TextField
                            label="Prénoms"
                            

                        />

                        <LocalizationProvider dateAdapter={AdapterDateFns}>

                            {
                                !matches ?
                                    (<DesktopDatePicker
                                        label="Date de naissance"
                                        inputFormat="MM/dd/yyyy"
                                        value={birthday}
                                        onChange={(newBirthday) => {
                                            setBirthday(newBirthday)
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />) :
                                    (<MobileDatePicker
                                        label="Date de naissance"
                                        inputFormat="MM/dd/yyyy"
                                        value={birthday}
                                        onChange={(newBirthday) => {
                                            setBirthday(newBirthday)
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />)
                            }
                        </LocalizationProvider>


                        <FormControl>
                            <FormLabel>Sexe</FormLabel>
                            <RadioGroup
                                row
                                value={sex}
                                onChange={(event) => {
                                    setSex(event.target.value)
                                }}
                            >
                                <FormControlLabel value="Homme" control={<Radio />} label="Homme" />
                                <FormControlLabel value="Femme" control={<Radio />} label="Femme" />
                            </RadioGroup>

                        </FormControl>

                    </Grid>


                    <Grid item xs={2} sm={2} md={3}>
                        <TextField
                            label="Province"
                            
                            InputProps={{
                                readOnly: true
                            }}
                        />

                        <TextField
                            label="Région"
                            InputProps={{
                                readOnly: true
                            }}
                            
                        />

                        <TextField
                            label="Commune"
                            InputProps={{
                                readOnly: true
                            }}
                            
                        />


                        <TextField
                            label="Quatier"
                            
                        />
                    </Grid>




                    <Grid item xs={2} sm={2} md={3}>
                        <TextField
                            label="Titre"
                            InputProps={{
                                readOnly: true
                            }}
                            

                        />

                        <TextField
                            label="ELO Standard"
                            InputProps={{
                                readOnly: true
                            }}
                            

                        />

                        <TextField
                            label="ELO Rapide"
                            InputProps={{
                                readOnly: true
                            }}
                            
                        />

                        <TextField
                            label="ELO Blitz"
                            InputProps={{
                                readOnly: true
                            }}
                            
                        />
                    </Grid>


                </Grid>

                
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button type={'submit'} variant="contained">
                        Modifier mon profil
                    </Button>


                    <Button variant="contained">
                        <Link to={'change-password'} style={{ textDecoration: 'none', color: 'white' }}>
                            Changer mon mot de passe
                        </Link>
                    </Button>

                    <Button variant="contained" onClick={handleClickLogout}>
                        Se deconnecter
                    </Button>
                </Box>
            </Paper>
        </Stack>
    )
}





export const ChangePassword = () => {
    return (
        <Grid>

            <Paper elevation={10} style={{ padding: 30, width: 350, margin: '20px auto' }}>
                <Grid align={'center'}>
                    <Avatar style={{ backgroundColor: Colors.darkslategrey, width: 56, height: 56 }}><LockOutlinedIcon /></Avatar>
                    <Typography variant="h5">Changer de mot de passe</Typography>
                </Grid>

                <TextField
                    label="Ancien mot de passe"
                    placeholder="Entrer votre ancien mot de passe"
                    fullWidth
                    type={'password'}
                    style={{ margin: '7px auto' }}
                />

                <TextField
                    label="Nouveau mot de passe"
                    placeholder="Entrer votre nouveau mot de passe"
                    fullWidth
                    type={'password'}
                    style={{ margin: '7px auto' }}
                />

                <TextField
                    label="Confirmation mot de passe"
                    placeholder="Répeter votre mot de passe"
                    fullWidth
                    type={'password'}
                    style={{ margin: '7px auto' }}
                />

                <Button variant="contained" type={'submit'} style={{ margin: '3px auto' }} fullWidth >
                    Reinitialiser mot de passe
                </Button>



            </Paper>
        </Grid>
    )
}



