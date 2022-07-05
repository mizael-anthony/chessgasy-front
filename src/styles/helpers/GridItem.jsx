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

// Non tester
export const GridItems = ({ Component, data }) => {
    if (!(data instanceof Array)) throw new Error("Data doit être un tableau.")
    const listComponent = data.map((d) => {
        return <Grid key={d} item md={3} sm={6}>{<Component data={d} />}</Grid>
    })
    
    return (
        <Container>
            <Grid container spacing={4} sx={{ justifyContent: "center" }}>
                {listComponent}
            </Grid>
        </Container>
    )
}