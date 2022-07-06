import { Box, IconButton, Menu } from "@mui/material"
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
      <Box>
        <IconButton onClick={handleOpenNavMenu}>
          <MenuIcon fontSize="large" />
        </IconButton>
        <Menu
          anchorEl={anchorElNav}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}

        >
        <MenuItemIcon url={url.news} linkName={"Actualités"} Icon={<FeedIcon/>} />
        <MenuItemIcon url={url.tournaments} linkName={"Tournois"} Icon={<EmojiEventsIcon/>} />
        <MenuItemIcon url={url.clubs} linkName={"Clubs"} Icon={<WorkspacesIcon/>} />
        <MenuItemIcon url={url.players} linkName={"Joueurs"} Icon={<GroupIcon/>} />

        </Menu>
      </Box>


      <NavBarHeader
        textAlign={"center"}
      >
        ChessGasy
      </NavBarHeader>
      <img src="./logo-chess3.png" width={150}/>


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
