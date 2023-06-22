<<<<<<< HEAD
import { Typography, Box, useTheme } from "@mui/material";
import React from "react";

=======
import { 
    Typography,
    Box,
    useTheme,
} from "@mui/material";

import React from 'react';
>>>>>>> e180b28aa9ee6005d606aefa706e17da2a65ce3b
export const Header = ({ title, subtitle }) => {
    const theme = useTheme();
    return (
        <Box>
            <Typography
<<<<<<< HEAD
                variant="h2"
                color={theme.palette.secondary[100]}
                fontWeight="bold"
                sx={{ mb: "5px" }}
            >
                {title}
            </Typography>
            <Typography variant="h5" color={theme.palette.secondary[300]}>
                {subtitle}
            </Typography>
        </Box>
    );
};

// export default Header;
=======
                variant = 'h2'
                color = {theme.palette.secondary[100]}
                fontWeight = 'bold'
                sx = {{mb: '5px'}}
            >
                {title}
            </Typography>
            <Typography
                variant = 'h5'
                color = {theme.palette.secondary[300]}
            >
                {subtitle}
            </Typography>
        </Box>
    )
}
>>>>>>> e180b28aa9ee6005d606aefa706e17da2a65ce3b
