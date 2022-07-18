import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Colors } from '../../styles/theme/Theme';
import Button from '@mui/material/Button'
import TitleItem from '../../helpers/TitleItem';
import { Container, Grid } from '@mui/material'
import { PaginationBox } from '../../helpers/PaginationBox';
import Banner from '../banner/Banner';

export function Tournament() {
  return (
    <>
      <Banner />

      <TitleItem title={"Liste des tournois"} />
      <TournamentList />
      <PaginationBox />


    </>
  )
}


export function TournamentList() {
  const data = [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12]
  if (!(data instanceof Array)) throw new Error("Data doit être un tableau.")

  return (
    <Container>
      <Grid container spacing={4} sx={{ justifyContent: "center" }}>
        {
          data.map((d) => {
            return <Grid key={d} item md={3} sm={6}>{<TournamentCard data={d} />}</Grid>
          })
        }
      </Grid>
    </Container>
  )
}

export function TournamentDetails() {
  return (
    <div>TournamentDetails</div>
  )
}


export function TournamentCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: Colors.grey }} aria-label="recipe">
            R
          </Avatar>
        }
        title="Championnat de Madagascar"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="./img/wallhaven-2kg97y.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: "center" }}>
        <Button size="small">S'inscrire</Button>
        <Button size="small">En savoir plus</Button>
      </CardActions>

    </Card>
  )
}
