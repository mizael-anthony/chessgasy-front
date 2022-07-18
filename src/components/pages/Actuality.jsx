import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import TitleItem from '../../helpers/TitleItem';
import { Container, Grid } from '@mui/material'
import Banner from '../banner/Banner';


export function Actuality() {
  return (
    <>
      <Banner />

      <TitleItem title={"Listes des actualités"} />
      <ActualityList />



    </>
  )
}


export function ActualityList() {
  const data = [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12]
  if (!(data instanceof Array)) throw new Error("Data doit être un tableau.")

  return (
    <Container>
      <Grid container spacing={4} sx={{ justifyContent: "center" }}>
        {
          data.map((d) => {
            return <Grid key={d} item md={3} sm={6}>{<ActualityCard data={d} />}</Grid>
          })
        }
      </Grid>
    </Container>
  )
}





export function ActualityDetails() {
  return (
    <div>ActualityDetails</div>
  )
}


export function ActualityCard({ data }) {
  return (

    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image="./img/wallhaven-2kg97y.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          En savoir plus
        </Button>
      </CardActions>
    </Card>
  )

}



