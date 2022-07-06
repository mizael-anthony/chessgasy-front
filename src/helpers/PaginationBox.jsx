import { Pagination, Box} from '@mui/material'

export function PaginationBox() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                padding: '10px',
                marginTop : '20px'
            }}
        >
            <Pagination
                count={20}
                variant="outlined"
                size="large"

            />
        </Box>
    )
}