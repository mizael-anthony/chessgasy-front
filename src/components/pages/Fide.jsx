
import {
    TextField, Autocomplete,

} from '@mui/material'
import { useForm } from "react-hook-form";
import { HelpText } from '../../temp/Field';
import { OnlyLetter } from '../../temp/Validator';
import { useState, useEffect } from 'react'
import { usePlayerContext } from "../../App";
import { API } from '../../api/API';



export default function Fide() {


    const { player, changePlayer } = usePlayerContext()


    const { watch, register, formState: { errors, isValid }, getValues, setValue } = useForm({
        mode: 'all', defaultValues: {
            ...player
        }
    })



    useEffect(() => {
        if (isValid) {
            changePlayer({ ...player, ...getValues(), isCompleted: true })

        }
        else
            changePlayer({ ...player, isCompleted: false });
    }, [isValid])


    const [suggestions, setSuggestions] = useState([{
        id:'', nom: '', prenoms: ''
    }])

    const handleInputChangeLastName = (e) => {
        // setSuggestions([{ nom: "lery" }])
        let playersIdFide = []
        const lastname = e.target.value
        if (lastname?.length >= 4) {
            API.getPlayerIdFIDE(lastname)
            .then(data=>{
                playersIdFide = [data]
                console.log(playersIdFide)
            })
            .catch(error=>console.log(error))
        }

    }







    return (
        <>
            <Autocomplete
                freeSolo
                options={suggestions.map((option) => option.nom)}
                onInputChange={(e) => handleInputChangeLastName(e)}
                renderInput={(params) => <TextField {...params} label="Fide" />}
            />

            <TextField
                label="Nom"
                placeholder="Entrer votre nom"
                {...register("lastname", {
                    required: {
                        value: true,
                        message: "Veuillez entrer votre nom."
                    },

                })}
                error={errors.lastname ? true : false}
                helperText={errors.lastname && errors.lastname.message}
                onKeyDown={(e) => OnlyLetter(e)}


            />

            <TextField
                label="Prénoms"
                placeholder="Entrer vos prénoms"
                {...register("firstname", {
                    required: {
                        value: true,
                        message: "Veuillez entrer vos prénoms."
                    },

                })}
                error={errors.firstname ? true : false}
                helperText={errors.firstname && errors.firstname.message}
                onKeyDown={(e) => OnlyLetter(e)}

            />

            <TextField
                label="Titre"
                type={'text'}
                InputProps={{
                    readOnly: true
                }}
                {...register("title")}
                helperText={HelpText.autocompleted}


            />

            <TextField
                label="ELO Standard"
                type={'number'}
                InputProps={{
                    readOnly: true
                }}
                {...register("standard_elo")}
                helperText={HelpText.autocompleted}


            />

            <TextField
                label="ELO Rapide"
                type={'number'}
                InputProps={{
                    readOnly: true
                }}
                {...register("rapid_elo")}
                helperText={HelpText.autocompleted}
            />

            <TextField
                label="ELO Blitz"
                type={'number'}
                InputProps={{
                    readOnly: true
                }}
                {...register("blitz_elo")}
                helperText={HelpText.autocompleted}

            />






        </>
    )
}
