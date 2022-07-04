import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import {Typography, Button, Avatar, CardHeader } from '@mui/material';


export default function Club() {

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardHeader
                avatar={
                    <Avatar
                        alt="Bobby Fischer"
                        src="./wallhaven-2kg97y.jpg"
                        sx={{ width: 100, height: 100, margin: "0.5em" }}

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

