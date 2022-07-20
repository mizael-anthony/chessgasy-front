import { TextField, Box, Autocomplete, } from "@mui/material"
import { useForm } from "react-hook-form";
import { HelpText } from '../../temp/Field';
import { OnlyLetter } from "../../temp/Validator";
import { useState, useEffect } from 'react';
import { usePlayerContext } from "../../App";
import { API } from '../../api/API';

export default function Adress() {
    const [isUpdated, setIsUpdated] = useState(false)

    const [suggestions, setSuggestions] = useState([{
        province: '', region: '', commune: '', quartier: ''
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
        else {
            changePlayer({ ...player, isCompleted: false });
        }
        setIsUpdated(false)
    }, [isUpdated, isValid])


    const handleChangeAdress = (e) => {
        const value = e.target.value
        const quarter_name = value

        if (quarter_name?.length >= 4) {
            API.getAdressMap(quarter_name)
                .then(success => {
                    // Asina animation eto
                    const data = success.data
                    setSuggestions(data)
                })
                .catch(error => {

                })
        }

    }

    const handleSelectAdress = (e) => {
        const value = e.target.value.split(',')
        if (value.length === 4) {
            const [province, region, town, quarter] = value
            setValue('province', province, { shouldValidate: true })
            setValue('region', region, { shouldValidate: true })
            setValue('town', town, { shouldValidate: true })
            setValue('quarter', quarter, { shouldValidate: true })
            setIsUpdated(true)

        }



    }

    const showSuggestions = (suggestion) => {
        if (suggestion.quartier) {
            return `${suggestion.province}, ${suggestion.region}, ${suggestion.commune}, ${suggestion.quartier}`
        }

        return ''

    }



    return (
        <Box>
            <Autocomplete
                freeSolo
                options={suggestions}
                getOptionLabel={(suggestion) => showSuggestions(suggestion)}
                onInputChange={(e) => handleChangeAdress(e)}
                onSelect={(e) => handleSelectAdress(e)}
                renderInput={(params) =>
                    <TextField
                        {...params}
                        label="Quartier ou Fokontany"
                    />}
            />

            <TextField
                label="Province"
                InputProps={{
                    readOnly: true
                }}
                {...register("province")}
                InputLabelProps={{ shrink: true }}
                helperText={HelpText.autocompleted}
            />

            <TextField
                label="Région"
                InputProps={{
                    readOnly: true
                }}
                {...register("region")}
                InputLabelProps={{ shrink: true }}
                helperText={HelpText.autocompleted}
            />


            <TextField
                label="Commune"
                InputProps={{
                    readOnly: true
                }}
                {...register("town")}
                InputLabelProps={{ shrink: true }}
                helperText={HelpText.autocompleted}
            />

            <TextField
                label="Quartier"
                InputProps={{
                    readOnly: true
                }}
                {...register("quarter", {
                    required: {
                        value: true,
                        message: "Veuillez rechercher le nom de votre quartier."
                    },

                })}
                error={errors.quarter ? true : false}
                helperText={errors.quarter && errors.quarter.message}
                onKeyDown={(e) => OnlyLetter(e)}
                InputLabelProps={{ shrink: true }}
            />



        </Box>
    )
}
