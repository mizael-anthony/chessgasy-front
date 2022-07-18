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

    // Joueur 
    const { player, changePlayer } = usePlayerContext()

    const { watch, register, formState: { errors, isValid }, getValues, setValue } = useForm({
        mode: 'all', defaultValues: {
            ...player
        }
    })

    // Valeur par défaut
    const defaultSex = (player.sex === '') ? "Homme" : player.sex
    const defaultBirthday = (player.birthday === '') ? new Date() : player.birthday

    const [birthday, setBirthday] = useState(defaultBirthday)
    const [sex, setSex] = useState(defaultSex)
    const [photo, setPhoto] = useState(DEFAULT_PHOTO)
    const [image, setImage] = useState(DEFAULT_PHOTO)


    useEffect(() => {
        setValue('sex', sex)
    }, [sex])

    useEffect(() => {
        setValue('birthday', birthday)
    }, [birthday])


    useEffect(() => {
        if (isValid) {
            changePlayer({ ...player, ...getValues(), photo:photo, isCompleted: true })
        }
        else
            changePlayer({ ...player, isCompleted: false })
    }, [isValid])


    const handleChangeSex = (e) => {
        // Set value of Sex
        setSex(e.target.value)
    }

    const handleChangeBirthday = (b) => {
        setBirthday(b)
    }


    const handleChangeImage = (e) => {
        const file = e.target.files[0]
        // console.log(file)

        setPhoto(file)

        
        // Lecture et affichage de la photo selectionnée
        const readFile = new FileReader()
        readFile.readAsDataURL(file)

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
                    <FormControlLabel value="Homme" control={<Radio />} label="Homme" />
                    <FormControlLabel value="Femme" control={<Radio />} label="Femme" />

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