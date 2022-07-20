
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

    const [suggestions, setSuggestions] = useState([{
        id_fide: '', player_name: ''
    }])


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



    const handleInputChangeFIDE = (e) => {
        const value = e.target.value
        const player_name = value

        if (player_name?.length >= 4) {
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
        const value = e.target.value.split(':')

        if (value.length === 2) {
            const id_fide = value[0]
            API.getPlayerInfoFIDE(id_fide)
                .then(success => {
                    // Asina animation eto
                    const data = success.data
                    setValue('last_name', data.nom, {shouldValidate: true})
                    setValue('first_name', data.prenoms, {shouldValidate: true})
                    setValue('id_fide', data.id_fide, {shouldValidate: true})
                    setValue('title', data.titre, {shouldValidate: true})
                    setValue('standard_elo', data.elo_standard, {shouldValidate: true})
                    setValue('rapid_elo', data.elo_rapide, {shouldValidate: true})
                    setValue('blitz_elo', data.elo_blitz, {shouldValidate: true})

                })
                .catch(error => {

                })

        }
    }

    const showSuggestions = (suggestion) => {
        if (suggestion.id_fide) {
            return `${suggestion.id_fide}: ${suggestion.player_name}`
        }
        return ''

    }

    return (
        <>
            <pre>{JSON.stringify(watch(), null, 2)}</pre>
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
                {...register("last_name", {
                    required: {
                        value: true,
                        message: "Veuillez entrer votre nom."
                    },
                })}
                error={errors.last_name ? true : false}
                InputLabelProps={{ shrink: true }}
                helperText={errors.last_name && errors.last_name.message}
                onKeyPress={(e) => OnlyLetter(e)}


            />

            <TextField
                label="Prénoms"
                placeholder="Entrer vos prénoms"
                {...register("first_name", {
                    required: {
                        value: true,
                        message: "Veuillez entrer vos prénoms."
                    },

                })}
                error={errors.first_name ? true : false}
                InputLabelProps={{ shrink: true }}
                helperText={errors.first_name && errors.first_name.message}
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
