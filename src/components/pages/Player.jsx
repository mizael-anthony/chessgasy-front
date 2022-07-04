import Typography from '@mui/material/Typography';
import { Avatar, Link, Card, CardMedia, CardContent } from '@mui/material';
import { Colors } from '../../styles/theme/Theme';




export function Player() {
  return (
    <div>Players</div>
  )
}


export function PlayerList() {
  return (
    <div>PlayerList</div>
  )
}

export function PlayerDetails() {
  return (
    <div>PlayerDetails</div>
  )
}

export function PlayerCard() {
  return (
    <Card>
      <CardMedia
        sx={{
          padding:'8px 16px'
        }}
      >
        <Avatar
          alt="Bobby Fischer"
          src="./wallhaven-2kg97y.jpg"
          sx={{ width: 200, height: 200 }}
        />
      </CardMedia>

      <CardContent>
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
      </CardContent>

    </Card>
  )
}