import { Box, Typography } from "@mui/material";

export default function TitleItem({ title }) {
  return (
    <Box
      justifyContent={'center'}
      alignItems={'center'}
      marginTop={'30px'}
      marginBottom={'10px'}
    >
      <Typography
        variant="h3"
        textAlign="center" 
      >
        {title}
      </Typography>
    </Box>
  )
}

