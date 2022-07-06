import Typography from '@mui/material/Typography';
import { Avatar, Link, Box } from '@mui/material';
import { Colors } from '../../styles/theme/Theme';
import TitleItem from '../../helpers/TitleItem';
import { Container, Grid } from '@mui/material'




export function Player() {
  return (
    <>
      <TitleItem title={"Liste des joueurs"} />
      <PlayerList/>
    </>

  )
}


export function PlayerList() {
  const data = [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12]
  if (!(data instanceof Array)) throw new Error("Data doit être un tableau.")

  return (
    <Container>
      <Grid container spacing={4} sx={{ justifyContent: "center" }}>
        {
          data.map((d) => {
            return <Grid key={d} item md={3} sm={6}>{<PlayerCard data={d} />}</Grid>
          })
        }
      </Grid>
    </Container>
  )
}

export function PlayerDetails() {
  return (
    <div>PlayerDetails</div>
  )
}

export function PlayerCard() {
  return (
    <Box
      justifyContent={"center"}
    >

      <Avatar
        alt="Bobby Fischer"
        src="./wallhaven-2kg97y.jpg"
        sx={{ width: 250, height: 250, margin: "0.5em" }}
      />

      <Typography variant="body1" textAlign="center">
        <Link
          href="#"
          underline="hover"
          variant="inherit"
          color={Colors.dark}
        >
          Bobby Fischer
        </Link>
      </Typography>
      <Typography variant="body2" textAlign="center">
        Elo 1875
      </Typography>

    </Box>
  )
}