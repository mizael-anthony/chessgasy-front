import {
    Box, Button, FormControl,
    TextField, Typography, Paper,
    Avatar, Grid, Stack, FormGroup,
    useMediaQuery, useTheme, FormLabel,
    RadioGroup, FormControlLabel, Radio
} from "@mui/material"
import { Link, Outlet } from "react-router-dom"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
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
                    <Typography variant="h4">Connexion</Typography>
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



