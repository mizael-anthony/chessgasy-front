import { Container, Grid } from '@mui/material'

export const GridItem = ({ Component }) => {
    return (
        <Container>
            <Grid container spacing={4} sx={{ justifyContent: "center" }}>
                <Grid item md={3} sm={6}>{Component}</Grid>
                <Grid item md={3} sm={6}>{Component}</Grid>
                <Grid item md={3} sm={6}>{Component}</Grid>
                <Grid item md={3} sm={6}>{Component}</Grid>
            </Grid>
        </Container>
    )
}


export const GridItems = ({ Component, datas }) => {
    if (!(datas instanceof Array)) throw new Error("Data doit être un tableau.")
    return (
        <Container>
            <Grid container spacing={4} sx={{ justifyContent: "center" }}>
                {datas.map((data) => {
                    return <Grid item md={3} sm={6}>{<Component data={data} />}</Grid>
                })}
            </Grid>
        </Container>
    )
}