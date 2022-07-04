import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Typography from '@mui/material/Typography';
import { Colors } from '../styles/theme/Theme';
import Button from '@mui/material/Button'


export default function Tournament() {


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
                image="./wallhaven-2kg97y.jpg"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
                <AvatarGroup total={24} sx={{justifyContent:"center"}}>
                    <Avatar alt="Bobby Fischer" src="./wallhaven-2kg97y.jpg" />
                    <Avatar alt="Bobby Fischer" src="./wallhaven-2kg97y.jpg" />
                    <Avatar alt="Bobby Fischer" src="./wallhaven-2kg97y.jpg" />
                    <Avatar alt="Bobby Fischer" src="./wallhaven-2kg97y.jpg" />
                </AvatarGroup>
            </CardContent>

            <CardActions sx={{justifyContent:"center"}}>
                <Button size="small">S'inscrire</Button>
                <Button size="small">En savoir plus</Button>
            </CardActions>

        </Card>
    )
}
