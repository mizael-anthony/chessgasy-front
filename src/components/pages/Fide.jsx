
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

    const [isUpdated, setIsUpdated] = useState(false)

    const [suggestions, setSuggestions] = useState([{
        id_fide: '', player_name: ''
    }])


    const { player, changePlayer } = usePlayerContext()

    const { watch, register, formState: { errors, isValid }, getValues, setValue } = useForm({
        mode: 'all', defaultValues: {
            ...player
        }
    })

    const isAlreadyFide = (player.id_fide ? true:false)
    const [isReadOnly, setIsReadOnly] = useState(isAlreadyFide)


    useEffect(() => {
        if (isValid) {
            changePlayer({ ...player, ...getValues(), isCompleted: true })

        }
        else {
            changePlayer({ ...player, isCompleted: false });
        }
        setIsUpdated(false)
    }, [isUpdated, isValid])


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
                    setValue('last_name', data.nom, { shouldValidate: true })
                    setValue('first_name', data.prenoms, { shouldValidate: true })
                    setValue('id_fide', data.fide_id, { shouldValidate: true })
                    setValue('title', data.titre, { shouldValidate: true })
                    setValue('standard_elo', data.elo_standard, { shouldValidate: true })
                    setValue('rapid_elo', data.elo_rapide, { shouldValidate: true })
                    setValue('blitz_elo', data.elo_blitz, { shouldValidate: true })
                    setIsUpdated(true)
                    setIsReadOnly(true)


                })
                .catch(error => {

                })

        }
    }

    const handleClearSelected = (e) => {
        setValue('id_fide', '')
        setValue('title', '')
        setValue('standard_elo', 0)
        setValue('rapid_elo', 0)
        setValue('blitz_elo', 0)
        setIsReadOnly(false)
    }

    const showSuggestions = (suggestion) => {
        if (suggestion.id_fide) {
            return `${suggestion.id_fide}: ${suggestion.player_name}`
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
                onChange={(e) => handleClearSelected(e)}
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
                    minLength: {
                        value: 3,
                        message: "Nombre de caractère doit être supérieur ou égale à 3."
                    },
                    onChange: e => setIsUpdated(true)


                })}
                error={errors.last_name ? true : false}
                InputLabelProps={{ shrink: true }}
                InputProps={{ readOnly: isReadOnly }}
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
                    minLength: {
                        value: 3,
                        message: "Nombre de caractère doit être supérieur ou égale à 3."
                    },
                    onChange: e => setIsUpdated(true)

                })}
                error={errors.first_name ? true : false}
                InputLabelProps={{ shrink: true }}
                InputProps={{ readOnly: isReadOnly }}
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
