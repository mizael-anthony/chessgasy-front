import { LinkList, NavBarContainer, NavBarHeader } from "../../styles/navbar/NavBarStyle";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import InfoIcon from '@mui/icons-material/Info';
import GroupIcon from '@mui/icons-material/Group';
import FeedIcon from '@mui/icons-material/Feed';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import LinkItemIcon from "../../helpers/LinkItemIcon";
import { Divider } from "@mui/material";

export default function NavBarDesktop({ url , position}) {

    return (

    <NavBarContainer sx={{position:{position}}}>
            <img src="./logo-chess4.ico" width={100} />
            <NavBarHeader>ChessGasy</NavBarHeader>
            <LinkList type="row">

                <LinkItemIcon name="Acceuil" url={url.home} Icon={<HomeIcon fontSize="large" />} />
                <LinkItemIcon name="Actualités" url={url.news} Icon={<FeedIcon fontSize="large" />} />
                <LinkItemIcon name="Tournois" url={url.tournaments} Icon={<EmojiEventsIcon fontSize="large" />} />
                <LinkItemIcon name="Clubs" url={url.clubs} Icon={<WorkspacesIcon fontSize="large" />} />
                <LinkItemIcon name="Joueurs" url={url.players} Icon={<GroupIcon fontSize="large" />} />
                <LinkItemIcon name="Infos" url={url.infos} Icon={<InfoIcon fontSize="large" />} />

                <Divider orientation="vertical" flexItem />
                <LinkItemIcon name="Mon profil" url={url.profil} Icon={<PersonIcon fontSize="large" />} />
                <Divider orientation="vertical" flexItem />

            </LinkList>


        </NavBarContainer>
    )
}
