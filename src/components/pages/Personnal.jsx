import {
    Typography, TextField, FormControl, Button,
    FormLabel, Radio, useMediaQuery, Box,
    useTheme, RadioGroup, FormControlLabel, Avatar

} from '@mui/material'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useState } from 'react'
import { Colors } from "../../styles/theme/Theme"
import PersonIcon from '@mui/icons-material/Person';




export default function Personnal() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    const [sex, setSex] = useState('Homme')
    const [birthday, setBirthday] = useState(new Date())
    return (
        <>

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





        </>

    )
}