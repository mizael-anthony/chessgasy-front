import {
    Typography, TextField, FormControl,
    FormLabel, Radio, useMediaQuery,
    useTheme, RadioGroup, FormControlLabel

} from '@mui/material'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useState } from 'react'




export default function Personnal() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    const [sex, setSex] = useState('Homme')
    const [birthday, setBirthday] = useState(new Date())
    return (
        <>
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


            <TextField
                label="Contact"
                placeholder="Entrer votre numéro de téléphone"
                required

            />

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



        </>

    )
}