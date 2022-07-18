import { TextField, Box } from "@mui/material"
import { useForm } from "react-hook-form";
import { HelpText } from '../../temp/Field';
import { OnlyLetter } from "../../temp/Validator";

export default function Adress() {

    const { watch, register, formState: { errors }, getValues } = useForm({
        mode: 'all', defaultValues: {
            province: '',
            region: '',
            town: '',
            quarter: ''
        }
    })




    return (
        <Box>
            <TextField
                label="Province"
                InputProps={{
                    readOnly: true
                }}
                helperText={HelpText.autocompleted}
            />

            <TextField
                label="Région"
                InputProps={{
                    readOnly: true
                }}
                helperText={HelpText.autocompleted}
            />


            <TextField
                label="Commune"
                InputProps={{
                    readOnly: true
                }}
                helperText={HelpText.autocompleted}
            />


            <TextField
                type="text"
                label="Quatier"
                placeholder="Entrer votre quartier"
                {...register("quarter", {
                    required: {
                        value: true,
                        message: "Veuillez entrer le nom de votre quartier."
                    },

                })}
                error={errors.quarter ? true : false}
                helperText={errors.quarter && errors.quarter.message}
                onKeyDown={(e)=>OnlyLetter(e)}
            />

        </Box>
    )
}
