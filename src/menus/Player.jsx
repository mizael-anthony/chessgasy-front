import Typography from '@mui/material/Typography';
import { Avatar, Link, Card, CardMedia, CardContent } from '@mui/material';
import { Colors } from '../styles/theme/Theme';



export default function Player() {
    return (
        <Card>
            <CardMedia>
            <Avatar
                alt="Bobby Fischer"
                src="./wallhaven-2kg97y.jpg"
                sx={{width: 250, height:250, margin:'5px auto'}}
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