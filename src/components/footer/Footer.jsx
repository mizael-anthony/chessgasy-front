import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';


import { Box, Grid, Link, Typography } from "@mui/material";
import { FooterTitle } from "../../styles/footer/FooterStyle";
import { Colors } from "../../styles/theme/Theme";

import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import { ListItemIcon, ListItemButton, ListItem } from '@mui/material';


export default function Footer() {
    return (
        <Box
            sx={{
                marginTop: '50px',
                backgroundColor: Colors.darkreact,
                color: Colors.light,
                p: { xs: 5, md: 10 },
                pt: 12,
                pb: 12,
                fontSize: { xs: "12px", md: "14px" },
            }}
        >
            <Grid container spacing={4}>
                <Grid item md={6} lg={4}>
                    <FooterTitle variant="body1">A propos</FooterTitle>
                    <Typography variant="caption2">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt blanditiis quo hic unde ratione omnis ea ut deleniti? Sequi debitis veritatis cupiditate deleniti delectus architecto! Rem, labore tenetur! Saepe, voluptates!
                    </Typography>
                    <Box
                        sx={{
                            mt: 3,
                            justifyContent: 'center'

                        }}
                    >
                        <Link href="https://www.facebook.com"><FacebookIcon fontSize='large' /></Link>
                        <Link href="https://www.twitter.com"><TwitterIcon fontSize='large' /></Link>
                        <Link href="https://www.instagram.com"><InstagramIcon fontSize='large' /></Link>
                        <Link href="https://www.linkedin.com"><LinkedInIcon fontSize='large' /></Link>

                    </Box>

                </Grid>

                <Grid item md={6} lg={3}>
                    <FooterTitle variant="body1">Informations</FooterTitle>

                    <List>
                        <ListItemText><Typography>A propos</Typography></ListItemText>
                        <ListItemText><Typography>Nos attente</Typography></ListItemText>
                        <ListItemText><Typography>Termes et conditions</Typography></ListItemText>
                    </List>

                </Grid>


                <Grid item md={6} lg={3}>
                    <FooterTitle variant="body1">Autres liens</FooterTitle>
                    <List>
                        <ListItemText><Typography>Remerciements</Typography></ListItemText>
                        <ListItemText><Typography>Chessgasy-admin</Typography></ListItemText>
                        <ListItemText><Typography>chess-gasy</Typography></ListItemText>
                    </List>

                </Grid>

                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1">Contact</FooterTitle>
                    <List>
                        <ListItem disablePadding>
                            <WhatsAppIcon sx={{ mr: 1 }} />
                            <ListItemText primary="0343645786" />
                        </ListItem>


                        <ListItem disablePadding>
                            <EmailIcon sx={{ mr: 1 }} />
                            <ListItemText primary="chessgasy@gmail.com" />
                        </ListItem>

                        <ListItem disablePadding>
                            <GitHubIcon sx={{ mr: 1 }} />
                            <ListItemText primary="chessgasy-dev" />
                        </ListItem>

                    </List>

                </Grid>
            </Grid>
            <Typography variant="caption2" textAlign="center">Copyright Chessgasy Tout droit reservé</Typography>
        </Box>
    )
}