import {
    Box, Button, FormControl,
    TextField, Typography, Paper,
    Avatar, Grid, Stack, FormGroup,
    useMediaQuery, useTheme, FormLabel,
    RadioGroup, FormControlLabel, Radio
} from "@mui/material"
import { Link, Outlet } from "react-router-dom"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonIcon from '@mui/icons-material/Person';
import { Colors } from "../../styles/theme/Theme";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useState } from 'react'


export function Account() {
    return (
        <Outlet />
    )
}


export const Login = () => {
    return (
        <Grid>

            <Paper elevation={10} style={{ padding: 30, height: '70vh', width: 350, margin: '20px auto' }}>
                <Grid align={'center'}>
                    <Avatar style={{ backgroundColor: Colors.darkslategrey, width: 56, height: 56 }}><LockOutlinedIcon /></Avatar>
                    <Typography variant="h5">Connexion</Typography>
                </Grid>
                <TextField
                    placeholder="Entrer votre nom d'utilisateur"
                    label="Nom d'utilisateur"
                    fullWidth
                    required
                    style={{ margin: '7px auto' }}
                />
                <TextField
                    placeholder="Entrer votre mot de passe"
                    label="Mot de passe"
                    fullWidth
                    required
                    type={'password'}
                    style={{ margin: '7px auto' }}

                />


                <Typography textAlign={'center'} variant="h6" style={{ margin: '5px auto' }} >
                    <Link to="reset-password">Mot de passe oublié?</Link>
                </Typography>


                <Button variant="contained" type={'submit'} style={{ margin: '3px auto' }} fullWidth >
                    Se connecter
                </Button>


                <Button variant="contained" color="error" style={{ margin: '3px auto' }} fullWidth>
                    <Link to="register" style={{ textDecoration: 'none', color: 'white' }}>
                        Créer un nouveau compte
                    </Link>
                </Button>


            </Paper>
        </Grid>


    )
}


// Mila ovaina anle StepperItems
export const Register = () => {


    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    const [sex, setSex] = useState('Homme')
    const [birthday, setBirthday] = useState(new Date())


    return (
        <Stack component="form">
            <Paper elevation={10} style={{ padding: 30, margin: '20px auto' }}>
                <Stack spacing={2}>
                    <FormGroup>
                        <Typography variant="h4">Compte</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Avatar style={{ backgroundColor: Colors.darkslategrey, width: 98, height: 98 }}>
                                <PersonIcon />
                            </Avatar>
                        </Box>
                        <Button
                            variant="contained"
                            component="label"
                            sx={{ width: 'fit-content', margin: '5px auto' }}

                        >
                            Changer votre profil
                            <input
                                type="file"
                                hidden
                            />
                        </Button>

                        <TextField
                            label="Nom d'utilisateur"
                            placeholder="Entrer votre nom d'utilisateur"
                            required
                        />

                        <TextField
                            label="Mot de passe"
                            placeholder="Entrer votre mot de passe"
                            required

                        />

                        <TextField
                            label="Confirmation mot de passe"
                            placeholder="Répéter votre mot de passe"
                            required
                        />
                    </FormGroup>




                    <FormGroup>
                        <Typography variant="h4">Informations personnelles</Typography>
                        <TextField
                            label="Nom"
                            placeholder="Entrer votre nom"
                            required
                        />

                        <TextField
                            label="Prénoms"
                            placeholder="Entrer vos prénoms"
                            required

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
                            <FormLabel>Genre</FormLabel>
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


                            <TextField
                                label="Contact"
                                placeholder="Entrer votre numéro de téléphone"
                                required
                            />
                        </FormControl>




                    </FormGroup>





                    <FormGroup>

                        <Typography variant="h4">Adresse</Typography>
                        <TextField
                            label="Province"
                            required
                            InputProps={{
                                readOnly: true
                            }}
                        />

                        <TextField
                            label="Région"
                            InputProps={{
                                readOnly: true
                            }}
                            required
                        />


                        <TextField
                            label="Commune"
                            InputProps={{
                                readOnly: true
                            }}
                            required
                        />


                        <TextField
                            label="Quatier"
                            placeholder="Entrer votre"
                            required
                        />



                    </FormGroup>
                </Stack>

            </Paper>
        </Stack>

    )
}
























export const UserProfil = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))

    const [sex, setSex] = useState('Homme')
    const [birthday, setBirthday] = useState(new Date())
    const [player, setPlayer] = useState({})

    return (
        <Stack spacing={3} component="form">
            <Paper elevation={10} style={{ padding: 30, margin: '20px auto' }}>
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
                            defaultValue={"Username"}
                            required
                        />
                        <TextField
                            label="Contact"
                            defaultValue="Valeur"
                            required
                        />
                    </Grid>

                    <Grid item xs={2} sm={2} md={3}>
                        <TextField
                            label="Nom"
                            defaultValue="Valeur"
                            required
                        />

                        <TextField
                            label="Prénoms"
                            defaultValue="Valeur"
                            required

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
                            defaultValue="Valeur"
                            required
                            InputProps={{
                                readOnly: true
                            }}
                        />

                        <TextField
                            label="Région"
                            defaultValue="Valeur"
                            InputProps={{
                                readOnly: true
                            }}
                            required
                        />

                        <TextField
                            label="Commune"
                            defaultValue="Valeur"
                            InputProps={{
                                readOnly: true
                            }}
                            required
                        />


                        <TextField
                            label="Quatier"
                            defaultValue="Valeur"
                            required
                        />
                    </Grid>




                    <Grid item xs={2} sm={2} md={3}>
                        <TextField
                            label="Titre"
                            InputProps={{
                                readOnly: true
                            }}
                            required

                        />

                        <TextField
                            label="ELO Standard"
                            InputProps={{
                                readOnly: true
                            }}
                            required

                        />

                        <TextField
                            label="ELO Rapide"
                            InputProps={{
                                readOnly: true
                            }}
                            required
                        />

                        <TextField
                            label="ELO Blitz"
                            InputProps={{
                                readOnly: true
                            }}
                            required
                        />
                    </Grid>


                </Grid>
                <Box sx={{display:'flex', justifyContent:'space-between'}}>
                    <Button type={'submit'} variant="contained">
                        Modifier mon profil
                    </Button>


                    <Button variant="contained">

                        <Link to={'reset-password'} style={{ textDecoration: 'none', color: 'white' }}>
                            Changer mon mot de passe
                        </Link>
                    </Button>

                    <Button variant="contained">
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
                    <Typography variant="h5">Réinitialisation mot de passe</Typography>
                </Grid>
                <TextField
                    label="Nouveau mot de passe"
                    placeholder="Entrer votre nouveau mot de passe"
                    fullWidth
                    required
                    style={{ margin: '7px auto' }}
                />
                <TextField
                    label="Confirmation mot de passe"
                    placeholder="Répeter votre mot de passe"
                    fullWidth
                    required
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



