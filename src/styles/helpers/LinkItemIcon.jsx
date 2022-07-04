import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from 'react-router-dom'

export default function LinkItemIcon({ name, Icon, url }) {
    return (
        <Link
        style={{ textDecoration: "none", color:"inherit"}}
        to={`${url}`}>
            <ListItemButton
                sx={{
                    display: 'block',
                    justifyContent: 'center'
                }}
            >
                <ListItemIcon
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    {Icon}
                </ListItemIcon>
                <ListItemText primary={name}
                    sx={{
                        textAlign: 'center'
                    }}
                />
            </ListItemButton>
        </Link>
    )
}