import { TextField, Box } from "@mui/material"


export default function Adress() {
    return (
        <Box>
            <TextField
                label="Province"
                required
                InputProps={{
                    readOnly: true
                }}
            />

            <TextField
                label="Région"
                InputProps={{
                    readOnly: true
                }}
                required
            />


            <TextField
                label="Commune"
                InputProps={{
                    readOnly: true
                }}
                required
            />


            <TextField
                label="Quatier"
                placeholder="Entrer votre"
                required
            />

        </Box>
    )
}
