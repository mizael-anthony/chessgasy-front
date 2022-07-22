import { Box, IconButton, Menu, Avatar, Toolbar, AppBar } from "@mui/material"
import { ActionContainerMobile, LinkList, NavBarContainer, NavBarHeader } from "../../styles/navbar/NavBarStyle"
import MenuIcon from "@mui/icons-material/Menu";
import LinkItemIcon from "../../helpers/LinkItemIcon";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import FeedIcon from '@mui/icons-material/Feed';
import GroupIcon from '@mui/icons-material/Group';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import MenuItemIcon from "../../helpers/MenuItemIcon";
import React from 'react'
import { Colors } from "../../styles/theme/Theme";

export default function NavBarMobile({ url, position }) {

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <NavBarContainer sx={{ position: { position } }}>
      <AppBar sx={{backgroundColor: Colors.dark}}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex' }} >
            <IconButton onClick={handleOpenNavMenu}>
              <MenuIcon fontSize="large" />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block' } }}


            >
              <MenuItemIcon url={url.news} linkName={"Actualités"} Icon={<FeedIcon />} />
              <MenuItemIcon url={url.tournaments} linkName={"Tournois"} Icon={<EmojiEventsIcon />} />
              <MenuItemIcon url={url.clubs} linkName={"Clubs"} Icon={<WorkspacesIcon />} />
              <MenuItemIcon url={url.players} linkName={"Joueurs"} Icon={<GroupIcon />} />

            </Menu>
          </Box>

          <NavBarHeader
            variant="h5"
            component="a"
          >
            ChessGasy
          </NavBarHeader>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ p: 0 }}>
              <Avatar sx={{ width: 82, height: 82 }} src="./img/logo-chess4.ico" alt="logo" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>


      <LinkList
        type="row">
        <ActionContainerMobile>
          <LinkItemIcon name="Acceuil" url={url.home} Icon={<HomeIcon fontSize="large" />} />
          <LinkItemIcon name="Infos" url={url.infos} Icon={<InfoIcon fontSize="large" />} />
          <LinkItemIcon name="Mon profil" url={url.profil} Icon={<PersonIcon fontSize="large" />} />
        </ActionContainerMobile>
      </LinkList>
    </NavBarContainer>
  )
}
