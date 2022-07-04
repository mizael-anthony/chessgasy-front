import { MenuItem, Typography } from "@mui/material"
import ListItemIcon from "@mui/material/ListItemIcon";
import { Link } from 'react-router-dom';



export default function MenuItemIcon({url, linkName, Icon}) {
    return (
        <MenuItem>
            <ListItemIcon>
                {Icon}
            </ListItemIcon>
            <Typography  textAlign="center">
                <Link to={`${url}`} style={{textDecoration: "none", color:"inherit"}}>
                    {linkName}
                </Link>
            </Typography>
        </MenuItem>
    )
}