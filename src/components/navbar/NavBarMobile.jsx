import { IconButton, ListItem, Menu, MenuItem, Typography } from "@mui/material"
import { ActionContainerMobile, LinkList, NavBarContainer, NavBarHeader } from "../../styles/navbar/NavBarStyle"
import MenuIcon from "@mui/icons-material/Menu";
import LinkItemIcon from "../../styles/helpers/LinkItemIcon";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import FeedIcon from '@mui/icons-material/Feed';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkspacesIcon from '@mui/icons-material/Workspaces'
import React from 'react'

export default function NavBarMobile({ url }) {

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <NavBarContainer>
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

      >
        <MenuItem         
        sx={{
          display: { xs: 'block' }
        }}
        >
          <ListItemButton component="a" href={url.news}  >
            <ListItemIcon>
              <FeedIcon />
            </ListItemIcon>
            <ListItemText  primary="Actualités" />
          </ListItemButton>
          
          <ListItemButton component="a" href={url.tournaments}  >
            <ListItemIcon>
              <EmojiEventsIcon />
            </ListItemIcon>
            <ListItemText  primary="Tournois" />
          </ListItemButton>
          <ListItemButton component="a" href={url.clubs}  >
            <ListItemIcon>
              <WorkspacesIcon />
            </ListItemIcon>
            <ListItemText   primary="Clubs" />
          </ListItemButton>
          <ListItemButton component="a" href={url.players}  >
            <ListItemIcon>
              <FeedIcon />
            </ListItemIcon>
            <ListItemText  primary="Joueurs" />
          </ListItemButton>



        </MenuItem>

      </Menu>


      <NavBarHeader
        textAlign={"center"}
      >
        ChessGasy
      </NavBarHeader>
      <LinkList
        type="row">
        <ActionContainerMobile>
          <LinkItemIcon name="Acceuil" url={url.home} Icon={<HomeIcon fontSize="large" />} />
          <LinkItemIcon name="Infos" url={url.infos} Icon={<InfoIcon fontSize="large" />} />
          <LinkItemIcon name="Mon profil" Icon={<PersonIcon fontSize="large" />} />
        </ActionContainerMobile>
      </LinkList>
    </NavBarContainer>
  )
}
