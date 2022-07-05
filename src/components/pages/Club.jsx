import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Typography, Button, Avatar, CardHeader } from '@mui/material';
import TitleItem from '../../styles/helpers/TitleItem';
import { Container, Grid } from '@mui/material'



export function Club() {
  return (
    <>
      <TitleItem title={"Clubs"} />
      <ClubList />



    </>)
}

export function ClubList() {
  const data = [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12]
  if (!(data instanceof Array)) throw new Error("Data doit être un tableau.")

  return (
    <Container>
      <Grid container spacing={4} sx={{ justifyContent: "center" }}>
        {
          data.map((d) => {
            return <Grid key={d} item md={3} sm={6}>{<ClubCard data={d} />}</Grid>
          })
        }
      </Grid>
    </Container>
  )
}

export function ClubDetails() {
  return (
    <div>ClubDetails</div>
  )
}

export function ClubCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardHeader
        avatar={
          <Avatar
            alt="Bobby Fischer"
            src="./wallhaven-2kg97y.jpg"
            sx={{ width: 100, height: 100 }}

          />
        }
        title={
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Le Président Bobby Fischer
          </Typography>
        }
      />

      <CardContent>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Mon Club
        </Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sint nesciunt perspiciatis fugiat modi quod quis optio quibusdam delectus. Iusto quis odio provident dicta at officiis culpa. Eius, quasi obcaecati!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Rejoindre</Button>
      </CardActions>
    </Card>

  )
}