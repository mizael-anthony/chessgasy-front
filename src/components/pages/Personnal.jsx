import {
    TextField, FormControl, Button,
    FormLabel, Radio, useMediaQuery, Box,
    useTheme, RadioGroup, FormControlLabel, Avatar

} from '@mui/material'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Colors } from "../../styles/theme/Theme"
import { useForm } from "react-hook-form";
import { fr } from "date-fns/locale";
import { DEFAULT_PHOTO } from "../../temp/Default"
import { useState, useEffect } from 'react';
import { usePlayerContext } from "../../App";
import moment from 'moment';



export default function Personnal() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    const [isUpdated, setIsUpdated] = useState(false)

    // Joueur 
    const { player, changePlayer } = usePlayerContext()

    const { watch, register, formState: { errors, isValid }, getValues, setValue } = useForm({
        mode: 'all', defaultValues: {
            ...player
        }
    })

    
    const [birthday, setBirthday] = useState(
        moment(new Date()).format('YYYY-MM-DD')
    )
    const [sex, setSex] = useState("homme")
    const [image, setImage] = useState(DEFAULT_PHOTO)


    useEffect(() => {
        setValue('sex', sex)
    },[sex])

    useEffect(() => {
        setValue('birthday', birthday)
    },[birthday])


    useEffect(() => {
        if (isValid) {
            changePlayer({ ...player, ...getValues(), isCompleted: true })

        }
        else {
            changePlayer({ ...player, isCompleted: false });
        }

        setIsUpdated(false)
    }, [isUpdated, isValid])


    const handleChangeSex = (e) => {
        setSex(e.target.value)
    }

    const handleChangeBirthday = (b) => {
        const formatDate = moment(b).format('YYYY-MM-DD')
        setBirthday(formatDate)
    }


    const handleChangeImage = (e) => {
        const photo = e.target.files[0]

        setValue('photo', photo)

        setIsUpdated(true)


        // Lecture et affichage de la photo selectionnée
        const readFile = new FileReader()
        readFile.readAsDataURL(photo)

        readFile.addEventListener("load", () => {
            setImage(readFile.result)
        })
    }


    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Avatar
                    style={{ width: 98, height: 98 }}
                    src={image}
                    alt="Image"
                />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                    variant="contained"
                    component="label"
                >
                    Changer de profil
                    <input
                        type="file"
                        accept="image/png"
                        multiple={false}
                        onChange={e => handleChangeImage(e)}
                        hidden

                    />
                </Button>
            </Box>

            <LocalizationProvider adapterLocale={fr} dateAdapter={AdapterDateFns}>
                {
                    !matches ?

                        (<DesktopDatePicker
                            label="Date de naissance"
                            minDate={new Date("01/01/1952")}
                            maxDate={new Date()}
                            inputFormat="dd/MM/yyyy"
                            value={birthday}
                            onChange={(b) => handleChangeBirthday(b)}
                            renderInput={(params) =>
                                <TextField
                                    {...params}
                                    onKeyDown={(e) => { e.preventDefault() }}
                                    helperText={params.error ? "Date de naissance invalide" : ""}
                                />
                            }


                        />) :

                        (<MobileDatePicker

                            label="Date de naissance"
                            minDate={new Date("01/01/1952")}
                            maxDate={new Date()}
                            inputFormat="dd/MM/yyyy"
                            value={birthday}
                            onChange={(b) => handleChangeBirthday(b)}


                            renderInput={(params) =>
                                <TextField
                                    {...params}
                                    onKeyDown={(e) => { e.preventDefault() }}
                                    helperText={params.error ? "Date de naissance invalide" : ""}
                                />
                            }


                        />)

                }

            </LocalizationProvider>



            <FormControl>
                <FormLabel>Sexe</FormLabel>
                <RadioGroup
                    row
                    value={sex}
                    onChange={(e) => handleChangeSex(e)}
                >
                    <FormControlLabel value="homme" control={<Radio />} label="Homme" />
                    <FormControlLabel value="femme" control={<Radio />} label="Femme" />

                </RadioGroup>
            </FormControl>


            <TextField
                label="Contact"
                placeholder="Entrer votre numéro de téléphone"
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


        </>

    )
}