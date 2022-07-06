import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from 'react-router-dom'

export default function LinkItemIcon({ name, Icon, url }) {

    return (
            <ListItemButton
                sx={{
                    display: 'block',
                    justifyContent: 'center'
                }}
            >
            <Link to={`${url}`} style={{textDecoration:'none', color:'inherit'}}>
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
                
            </Link>

            </ListItemButton>

    )
}