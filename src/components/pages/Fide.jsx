
import {
    TextField


} from '@mui/material'




export default function Fide() {
    return (
        <>
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

            <TextField
                label="Titre"
                InputProps={{
                    readOnly: true
                }}


            />

            <TextField
                label="ELO Standard"
                InputProps={{
                    readOnly: true
                }}


            />

            <TextField
                label="ELO Rapide"
                InputProps={{
                    readOnly: true
                }}
            />

            <TextField
                label="ELO Blitz"
                InputProps={{
                    readOnly: true
                }}

            />






        </>
    )
}
