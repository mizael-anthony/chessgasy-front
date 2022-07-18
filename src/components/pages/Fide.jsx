
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
        id_fide: '', player_name: ''
    }])



    const handleInputChangeFIDE = (e) => {
        const player_name = e.target.value

        if (player_name && player_name?.length >= 4) {
            API.getPlayerIdFIDE(player_name)
                .then(success => {
                    // Asina animation eto
                    const data = success.data
                    setSuggestions(data)
                })
                .catch(error => {

                })
        }

    }

    const handleSelectPlayerFIDE = (e) => {
        const value = e.target.value

        if (value) {
            const [selectedPlayerIdFide, selectedPlayerFullName] = value.split(',')
            const id_fide = selectedPlayerIdFide
            if (id_fide) {
                API.getPlayerInfoFIDE(id_fide)
                    .then(success => {
                        // Asina animation eto
                        const data = success.data
                        setValue('lastname', data.nom)
                        setValue('firstname', data.prenoms)
                        setValue('title', data.titre)
                        setValue('standard_elo', data.elo_standard)
                        setValue('rapid_elo', data.elo_rapide)
                        setValue('blitz_elo', data.elo_blitz)

                    })
                    .catch(error => {

                    })
            }
        }


    }

    const showSuggestions = (suggestion) => {
        if (suggestion.id_fide) {
            return `${suggestion.id_fide}, ${suggestion.player_name}`
        }
        return ''

    }



    return (
        <>
            <Autocomplete
                freeSolo
                options={suggestions}
                getOptionLabel={(suggestion) => showSuggestions(suggestion)}
                onInputChange={(e) => handleInputChangeFIDE(e)}
                onSelect={(e) => handleSelectPlayerFIDE(e)}
                renderInput={(params) =>
                    <TextField
                        {...params}
                        label="Fide"
                        helperText="Rechercher votre nom et prénoms sur Fide"
                    />}
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
                InputLabelProps={{ shrink: true }}
                helperText={errors.lastname && errors.lastname.message}
                onKeyPress={(e) => OnlyLetter(e)}


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
                InputLabelProps={{ shrink: true }}
                helperText={errors.firstname && errors.firstname.message}
                onKeyPress={(e) => OnlyLetter(e)}

            />
            <TextField
                label="ID FIDE"
                type={'text'}
                InputProps={{
                    readOnly: true
                }}
                {...register("id_fide")}
                InputLabelProps={{ shrink: true }}
                helperText={HelpText.autocompleted}


            />

            <TextField
                label="Titre"
                type={'text'}
                InputProps={{
                    readOnly: true
                }}
                {...register("title")}
                InputLabelProps={{ shrink: true }}
                helperText={HelpText.autocompleted}


            />

            <TextField
                label="ELO Standard"
                type={'number'}
                InputProps={{
                    readOnly: true
                }}
                {...register("standard_elo")}
                InputLabelProps={{ shrink: true }}
                helperText={HelpText.autocompleted}


            />

            <TextField
                label="ELO Rapide"
                type={'number'}
                InputProps={{
                    readOnly: true
                }}
                {...register("rapid_elo")}
                InputLabelProps={{ shrink: true }}
                helperText={HelpText.autocompleted}
            />

            <TextField
                label="ELO Blitz"
                type={'number'}
                InputProps={{
                    readOnly: true
                }}
                {...register("blitz_elo")}
                InputLabelProps={{ shrink: true }}
                helperText={HelpText.autocompleted}

            />






        </>
    )
}
