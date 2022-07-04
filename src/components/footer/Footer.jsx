import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

import {Box, Grid, Link, Typography } from "@mui/material";
import { FooterTitle } from "../../styles/footer/FooterStyle";
import { Colors } from '../../styles/theme/Theme';

import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

export default function Footer() {
    return (
        <Box
            sx={{
                marginTop: '50px',
                backgroundColor: Colors.grey,
                color: Colors.light,
                p: { xs: 4, md: 10 },
                pt: 12,
                pb: 12,
                fontSize: { xs: "12px", md: "14px" }
            }}
        >
            <Grid container spacing={2}>
                <Grid item md={6} lg={4}>
                    <FooterTitle variant="body1">A propos</FooterTitle>
                    <Typography variant="caption2">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt blanditiis quo hic unde ratione omnis ea ut deleniti? Sequi debitis veritatis cupiditate deleniti delectus architecto! Rem, labore tenetur! Saepe, voluptates!
                    </Typography>
                    <Box
                        sx={{
                            mt: 4,
                            justifyContent: 'center'

                        }}
                    >
                        <Link color="#002884" href="https://www.facebook.com"><FacebookIcon fontSize='large' /></Link>
                        <Link color="#002884" href="https://www.twitter.com"><TwitterIcon fontSize='large' /></Link>
                        <Link color="#002884" href="https://www.instagram.com"><InstagramIcon fontSize='large' /></Link>
                        <Link color="#002884" href="https://www.github.com"><GitHubIcon fontSize='large' /></Link>

                    </Box>

                </Grid>

                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1">Nos partenaires</FooterTitle>

                    <List>
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Partenaire"
                                    src="./wallhaven-2kg97y.jpg"
                                />
                            </ListItemAvatar>
                            <ListItemText primary="FMJE" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Partenaire"
                                    src="./wallhaven-2kg97y.jpg"
                                />
                            </ListItemAvatar>
                            <ListItemText primary="FIDE" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Partenaire"
                                    src="./wallhaven-2kg97y.jpg"
                                />
                            </ListItemAvatar>
                            <ListItemText primary="Lichess" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Partenaire"
                                    src="./wallhaven-2kg97y.jpg"
                                />
                            </ListItemAvatar>
                            <ListItemText primary="Chess.com" />
                        </ListItemButton>
                    </List>

                </Grid>


                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1">Liens</FooterTitle>
                    <List>
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Partenaire"
                                    src="./wallhaven-2kg97y.jpg"
                                />
                            </ListItemAvatar>
                            <ListItemText primary="Actualités" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Partenaire"
                                    src="./wallhaven-2kg97y.jpg"
                                />
                            </ListItemAvatar>
                            <ListItemText primary="Tournois" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Partenaire"
                                    src="./wallhaven-2kg97y.jpg"
                                />
                            </ListItemAvatar>
                            <ListItemText primary="Clubs" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar
                                    alt="Partenaire"
                                    src="./wallhaven-2kg97y.jpg"
                                />
                            </ListItemAvatar>
                            <ListItemText primary="Joueurs" />
                        </ListItemButton>
                    </List>

                </Grid>

                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1">Informations</FooterTitle>
                    <List>
                        <ListItemText primary="Actualités" />

                        <ListItemText primary="Tournois" />

                        <ListItemText primary="Clubs" />

                        <ListItemText primary="Joueurs" />
                    </List>

                </Grid>
            </Grid>
        </Box>
    )
}