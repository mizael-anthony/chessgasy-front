import {
    Box, Button, FormControl,
    TextField, Typography, Paper,
    Avatar, Grid, Stack,
    useMediaQuery, useTheme, FormLabel,
    RadioGroup, FormControlLabel, Radio, Autocomplete
} from "@mui/material"
import { Link, Outlet, useNavigate } from "react-router-dom"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Colors } from "../../styles/theme/Theme";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { API } from "../../api/API";
import { usePlayerContext } from "../../App";
import { fr } from "date-fns/locale";
import moment from 'moment';
import { OnlyLetter } from '../../temp/Validator';


export function Account() {
    const { player, changePlayer } = usePlayerContext()


    useEffect(() => {
        const token = localStorage.getItem('user_token')
        if (token) {
          API.getUserInfos(token)
            .then(success => {
              // console.log(success)
              const data = success.data
              const place = data.place
              changePlayer({ ...player, ...data, ...place })
              // console.log(data)
              API.getPlayer(data.username)
                .then(player => {
                  console.log(player)
    
                })
                .catch(error => {
                  console.log(error)
    
                })
    
            })
            .catch(error => {
              console.log(error)
            })
    
    
    
        }
      }, [])
    
    return (
        <Outlet />
    )
}

export const Login = () => {

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
                localStorage.setItem('user_token',JSON.stringify(data.key))

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


    const { player, changePlayer } = usePlayerContext()

    const { watch, register, formState: { errors }, setValue, handleSubmit } = useForm({
        mode: 'onSubmit', defaultValues: {
            ...player
        }
    })


    const [birthday, setBirthday] = useState(
        moment(player.birthday).format('YYYY-MM-DD')
    )
    const [sex, setSex] = useState(
        player.sex
    )
    const [photo, setPhoto] = useState(
        player.photo
    )

    const onSubmit = (data) => {
        console.log(data)
        const formData = new FormData()
        formData.append("username", player.username)
        formData.append("email", player.email)
        formData.append("last_name", player.last_name)
        formData.append("first_name", player.first_name)
        formData.append("photo", player.photo)
        formData.append("birthday", player.birthday)
        formData.append("sex", player.sex)
        formData.append("contact", player.contact)
        formData.append("longitude", 0)
        formData.append("latitude", 0)
        formData.append("province", player.province)
        formData.append("region", player.region)
        formData.append("town", player.town)
        formData.append("quarter", player.quarter)
        formData.append("id_fide", player.id_fide)
        formData.append("title", player.title)
        formData.append("standard_elo", player.standard_elo)
        formData.append("rapid_elo", player.rapid_elo)
        formData.append("blitz_elo", player.blitz_elo)

        const token = localStorage.getItem('user_token')
        API.updateUserInfos(formData, token)
            .then(success => {
                console.log(success)
            })
            .catch(error => {
                console.log(error)
            })


    }

    const handleClickLogout = () => {
        const token = localStorage.getItem('user_token')

        API.logout(token)
            .then(success => {
                // console.log(success)
               localStorage.removeItem('user_token')
            })
            .catch(error => {
                console.log(error)
            })
    }


    const handleChangePhoto = (e) => {
        const photo = e.target.files[0]

        setValue('photo', photo)


        const readFile = new FileReader()
        readFile.readAsDataURL(photo)

        readFile.addEventListener("load", () => {
            setPhoto(readFile.result)
        })
    }

    const handleChangeSex = (e) => {
        const sex = e.target.value
        setSex(sex)
        setValue('sex', sex)

    }

    const handleChangeBirthday = (b) => {
        const birthday = moment(b).format('YYYY-MM-DD')
        setBirthday(birthday)
        setValue('birthday', birthday)


    }


    // PLAYER ReadOnly le Nom et Prénoms si il la personne a déjà ID Fide
    const isAlreadyFide = (player.id_fide ? true : false)
    const [isReadOnly, setIsReadOnly] = useState(isAlreadyFide)


    // PLACE
    const [placeSuggestion, setPlaceSuggestion] = useState([{
        province: '', region: '', commune: '', quartier: ''
    }])

    const showPlaceSuggestion = (placeSuggestion) => {
        if (placeSuggestion.quartier) {
            return `${placeSuggestion.province}, ${placeSuggestion.region}, ${placeSuggestion.commune}, ${placeSuggestion.quartier}`
        }
        return ''
    }

    const handleChangePlace = (e) => {
        const value = e.target.value
        const quarter_name = value

        if (quarter_name?.length >= 4) {
            API.getAdressMap(quarter_name)
                .then(success => {
                    // Asina animation eto
                    const data = success.data
                    setPlaceSuggestion(data)
                })
                .catch(error => {

                })
        }
    }

    const handleSelectPlace = (e) => {
        const value = e.target.value.split(',')
        if (value.length === 4) {
            const [province, region, town, quarter] = value
            setValue('province', province, { shouldValidate: true })
            setValue('region', region, { shouldValidate: true })
            setValue('town', town, { shouldValidate: true })
            setValue('quarter', quarter, { shouldValidate: true })
        }
    }

    return (
        <Box
            sx={{
                width: '75%', margin: '1em auto',
            }}
        >
            <form onSubmit={(e) => { handleSubmit(onSubmit)(e) }}>


                <Paper elevation={10} style={{ padding: 30, margin: '20px auto' }}>
                    <Typography variant="h3" textAlign={'center'}>Mon compte</Typography>

                    <Box sx={{ margin: '10px' }}>
                        <Stack spacing={2} >
                            <Box sx={{ backgroundColor: Colors.darkreact }}>
                                <Typography variant="h5" color={Colors.light}>Profil</Typography>
                            </Box>
                            <Avatar src={photo} alt="Photo" sx={{ width: 128, height: 128 }} />
                            <Button
                                variant="contained"
                                component="label"
                            >
                                Changer de photo
                                <input
                                    type="file"
                                    accept="image/png"
                                    multiple={false}
                                    {...register("photo", {
                                        onChange: e => handleChangePhoto(e)
                                    })}
                                    hidden
                                />
                            </Button>

                            <TextField
                                label="Nom d'utilisateur"
                                {...register("username", {
                                    required: {
                                        value: true,
                                        message: "Veuillez entrer votre nom d'utilisateur."
                                    },
                                })}
                                error={errors.username ? true : false}
                                helperText={errors.username && errors.username.message}

                            />

                            <TextField
                                label="Adresse electronique"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Veuillez entrer votre adresse electronique."
                                    },
                                    pattern: {
                                        value: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
                                        message: "Adresse mail invalide."
                                    },
                                })}
                                inputProps={{
                                    readOnly: true
                                }}
                                error={errors.email ? true : false}
                                helperText={errors.email && errors.email.message}
                            />

                            <LocalizationProvider adapterLocale={fr} dateAdapter={AdapterDateFns}>

                                {
                                    !matches ?
                                        (<DesktopDatePicker
                                            label="Date de naissance"
                                            inputFormat="MM/dd/yyyy"
                                            value={birthday}
                                            onChange={(b) => handleChangeBirthday(b)}
                                            renderInput={(params) =>
                                                <TextField
                                                    {...params}
                                                    helperText={params.error ? "Date de naissance invalide" : ""}

                                                />}
                                        />) :
                                        (<MobileDatePicker
                                            label="Date de naissance"
                                            inputFormat="MM/dd/yyyy"
                                            value={birthday}
                                            onChange={(b) => handleChangeBirthday(b)}
                                            renderInput={(params) =>
                                                <TextField
                                                    {...params}
                                                    helperText={params.error ? "Date de naissance invalide" : ""}

                                                />}
                                        />)
                                }
                            </LocalizationProvider>

                            <FormControl>
                                <FormLabel>Sexe</FormLabel>
                                <RadioGroup
                                    row
                                    value={sex}
                                    onChange={(e) => { handleChangeSex(e) }}
                                >
                                    <FormControlLabel value="homme" control={<Radio />} label="Homme" />
                                    <FormControlLabel value="femme" control={<Radio />} label="Femme" />
                                </RadioGroup>
                            </FormControl>


                            <TextField
                                label="Contact"
                                {...register("contact", {
                                    required: {
                                        value: true,
                                        message: "Veuillez entrer votre numéro de téléphone."
                                    },
                                    pattern: {
                                        value: /^03([2-4]|8)[0-9]{7}$/,
                                        message: "Numéro de téléphone invalide."
                                    }

                                })}
                                error={errors.contact ? true : false}
                                helperText={errors.contact && errors.contact.message}

                            />

                        </Stack>
                    </Box>



                    <Box sx={{ margin: '10px' }}>

                        <Stack spacing={2}>
                            <Box sx={{ backgroundColor: Colors.darkreact }}>
                                <Typography variant="h5" color={Colors.light}>FIDE</Typography>
                            </Box>

                            <TextField
                                label="Nom"
                                InputProps={{ readOnly: isReadOnly }}

                                {...register("last_name", {
                                    required: {
                                        value: true,
                                        message: "Veuillez entrer votre nom."
                                    }
                                })}
                                error={errors.last_name ? true : false}
                                helperText={errors.last_name && errors.last_name.message}
                                onKeyPress={(e) => OnlyLetter(e)}


                            />

                            <TextField
                                label="Prénoms"
                                InputProps={{ readOnly: isReadOnly }}
                                {...register("first_name", {
                                    required: {
                                        value: true,
                                        message: "Veuillez entrer vos prénoms."
                                    }
                                })}
                                error={errors.last_name ? true : false}
                                helperText={errors.last_name && errors.last_name.message}
                                onKeyPress={(e) => OnlyLetter(e)}

                            />

                            <TextField
                                label="Titre"
                                {...register("title")}

                                InputProps={{
                                    readOnly: true
                                }}
                            />

                            <TextField
                                label="ELO Standard"
                                {...register("standard_elo")}

                                InputProps={{
                                    readOnly: true
                                }}
                            />

                            <TextField
                                label="ELO Rapide"
                                {...register("rapid_elo")}

                                InputProps={{
                                    readOnly: true
                                }}
                            />

                            <TextField
                                label="ELO Blitz"
                                {...register("rapid_elo")}

                                InputProps={{
                                    readOnly: true
                                }}
                            />
                        </Stack>
                    </Box>


                    <Box sx={{ margin: '10px' }}>

                        <Stack spacing={2}>
                            <Box sx={{ backgroundColor: Colors.darkreact }}>
                                <Typography variant="h5" color={Colors.light}>Adresse</Typography>
                            </Box>

                            <Autocomplete
                                freeSolo
                                options={placeSuggestion}
                                getOptionLabel={(placeSuggestion) => showPlaceSuggestion(placeSuggestion)}
                                onInputChange={(e) => handleChangePlace(e)}
                                onSelect={(e) => handleSelectPlace(e)}
                                renderInput={(params) =>
                                    <TextField
                                        {...params}
                                        label="Quartier ou Fokontany"
                                    />}
                            />

                            <TextField
                                label="Province"
                                {...register("province")}

                                InputProps={{
                                    readOnly: true
                                }}
                            />

                            <TextField
                                label="Région"
                                {...register("region")}

                                InputProps={{
                                    readOnly: true
                                }}

                            />

                            <TextField
                                label="Commune"
                                {...register("town")}

                                InputProps={{
                                    readOnly: true
                                }}
                            />


                            <TextField
                                label="Quatier"
                                {...register("quarter")}

                                InputProps={{
                                    readOnly: true
                                }}

                            />
                        </Stack>
                    </Box>


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
            </form>

        </Box>
    )
}





export const ChangePassword = () => {

    const navigate = useNavigate()

    const { watch, register, formState: { errors }, getValues, handleSubmit } = useForm({
        mode: 'onSubmit'
    })

    const onSubmit = (data) => {
        const token= localStorage.getItem('user_token')
        const formData = new FormData()
        formData.append('new_password1', data.new_password1)
        formData.append('new_password2', data.new_password2)

        API.change_password(formData, token)
            .then(success => {
                console.log(success)
                localStorage.clear()
                navigate('/user/')
            })
            .catch(error => {
                console.log(error)
            })
    }



    return (
        <Grid>
            <form onSubmit={(e) => { handleSubmit(onSubmit)(e) }}>
                <Paper elevation={10} style={{ padding: 30, width: 350, margin: '20px auto' }}>
                    <Grid align={'center'}>
                        <Avatar style={{ backgroundColor: Colors.darkslategrey, width: 56, height: 56 }}><LockOutlinedIcon /></Avatar>
                        <Typography variant="h5">Changer de mot de passe</Typography>
                    </Grid>

                    {/* <TextField
                    label="Ancien mot de passe"
                    placeholder="Entrer votre ancien mot de passe"
                    fullWidth
                    type={'password'}
                    style={{ margin: '7px auto' }}
                    {...register('old_password', {
                        required: {
                            value: true,
                            message: "Ce champs ne peut être vide."
                        }
                    })}
                    error={errors.old_password ? true : false}
                    helperText={errors.old_password && errors.old_password.message}
                /> */}

                    <TextField
                        label="Nouveau mot de passe"
                        placeholder="Entrer votre nouveau mot de passe"
                        fullWidth
                        type={'password'}
                        style={{ margin: '7px auto' }}
                        {...register('new_password1', {
                            required: {
                                value: true,
                                message: "Veuillez entrer votre mot de passe."
                            },
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*[;.@$!%*#?&])[A-Za-z\d;.@$!%*#?&]{8,}$/,
                                message: "Le mot de passe doit contenir au moins 8 caractères mélangés."
                            },
                        })}
                        error={errors.new_password1 ? true : false}
                        helperText={errors.new_password1 && errors.new_password1.message}

                    />

                    <TextField
                        label="Confirmation mot de passe"
                        placeholder="Répeter votre mot de passe"
                        fullWidth
                        type={'password'}
                        style={{ margin: '7px auto' }}
                        {...register('new_password2', {
                            required: {
                                value: true,
                                message: "Veuillez répeter votre mot de passe."
                            },
                            validate: {
                                samePassword: v => v === getValues("new_password1") || "Les mots de passe ne correspondent pas"
                            },

                        })}
                        error={errors.new_password2 ? true : false}
                        helperText={errors.new_password2 && errors.new_password2.message}
                    />

                    <Button variant="contained" type={'submit'} style={{ margin: '3px auto' }} fullWidth >
                        Changer de mot de passe
                    </Button>



                </Paper>
            </form>
        </Grid>
    )
}



