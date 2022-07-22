import {
    Box, Paper, Button,
    Tabs, Tab, Typography
} from "@mui/material"
import { API } from "../api/API"
import { useState, useContext } from "react"
import { usePlayerContext } from "../App"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';



export const TabItems = () => {
    const { player, changePlayer } = usePlayerContext()
    const [tab, setTab] = useState(0);

    const handleChangeTab = (event, tab) => {
        setTab(tab);
    }

    const handleClickLogout = () => {
        const token = localStorage.getItem('user_token')

        API.logout(token)
            .then(success => {
                console.log(success)
                localStorage.removeItem('user_token')
            })
            .catch(error => {
                console.log(error)
            })



    }


    const handleSubmit = (e) => {
        e.preventDefault()
    }


    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`vertical-tabpanel-${index}`}
                aria-labelledby={`vertical-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

    function a11yProps(index) {
        return {
            id: `vertical-tab-${index}`,
            'aria-controls': `vertical-tabpanel-${index}`,
        };
    }

    return (
        <Box
            sx={{
                width: '50%', margin: '1em auto',

            }}
        >

            <form onSubmit={(e) => handleSubmit(e)}>
                <Paper elevation={10} sx={{ padding: '10px' }}>
                    <Typography variant="h2" textAlign={"center"}>Mon compte</Typography>

                    <Box
                        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '50vh' }}
                    >
                        <Tabs
                            orientation="vertical"
                            value={tab}
                            onChange={handleChangeTab}
                            sx={{ borderRight: 1, borderColor: 'divider' }}
                        >

                            <Tab label="Compte" value={0} />
                            <Tab label="Informations FIDE" value={1} />
                            <Tab label="Adresse" value={2} />
                            <Tab label="Informations personnelles" value={3} />
                        </Tabs>
                        <TabPanel value={tab} index={0}>Item One</TabPanel>
                        <TabPanel value={tab} index={1}>Item Two</TabPanel>
                        <TabPanel value={tab} index={2}>Item Three</TabPanel>
                        <TabPanel value={tab} index={3}>Item Four</TabPanel>
                    </Box>



                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button type={'submit'} variant="contained">
                            Modifier mon profil
                        </Button>


                        <Button variant="contained">
                            <Link to={'change-password'} style={{ textDecoration: 'none', color: 'white' }}>
                                Changer mon mot de passe
                            </Link>
                        </Button>

                        <Button variant="contained" onClick={handleClickLogout}>
                            Se deconnecter
                        </Button>
                    </Box>
                </Paper>

            </form>
        </Box>
    )



}