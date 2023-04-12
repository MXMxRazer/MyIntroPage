import { CardActionArea, Grow, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

export default function CardView({ icons, desc }) {
    const icon = (
        <Paper
            elevation={8}
            sx={{
                bgcolor: 'secondary.main',
                mr: '1rem',
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                userSelect: 'none',
            }}
        >
            <CardActionArea
                sx={{
                    p: '1rem !important'
                }}
            >
                <img
                    src={icons}
                    style={{
                        width: '100%',
                        objectFit: 'cover', 
                        filter: 'drop-shadow(2px 4px 6px black)'
                    }}
                />
                <Typography
                    variant={'body1'}
                    textAlign={'center'}
                    sx={{
                        p: '0.4rem 0.8rem !important',
                        position: 'relative',
                        width: '6rem',
                        margin: 'auto'
                    }}
                >
                    {desc}
                </Typography>
            </CardActionArea >
        </Paper >
    );

    const [checked, setChecked] = useState(true);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <Grow
                in={checked}
                style={{ transformOrigin: '0 0 0' }}
                {...(checked ? { timeout: 1000 } : {})}
            >
                {icon}
            </Grow>
        </Box>
    );
}