import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';





export function Actuality() {
  return (
    <div>Actualities</div>
  )
}


export function ActualityList() {
  return (
    <div>ActualityList</div>
  )
}





export function ActualityDetails() {
  return (
    <div>ActualityDetails</div>
  )
}















export function ActualityCard() {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image="./wallhaven-2kg97y.jpg"
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



