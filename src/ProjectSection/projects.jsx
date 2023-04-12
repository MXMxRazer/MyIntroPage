import { Box, Button, Card, CardActions, CardContent, CardMedia, Dialog, Typography } from "@mui/material";
import { useState } from "react";
import Preview from "./dialog";
import AlertDialog from "./dialog";
import { useTheme, useMediaQuery } from "@mui/material";
import { styledData } from "../dynamicStyles/styles";
import { AddBusinessOutlined, Rotate90DegreesCcw } from "@mui/icons-material";
import { FaRegIdBadge } from "react-icons/fa";


export default function ProjectSection({ itemTag, projectName, projectImage, projectDescription, projectDetails, URL }) {

    const theme = useTheme(); 
    const mat = useMediaQuery(theme.breakpoints.down('sm')); 

    const dynamicStyles = {
        Container: {
            ...mat && {...styledData.breakpoints.sm.projectSection  }
        }
    }

    const [open, setOpen] = useState(false);

    const setTrue = () => {
        setOpen(prev => true);
    }

    const setFalse = () => {
        setOpen(prev => false);
    }

    const projectCards = (
        <>
        {
            itemTag === 3 ? 
        <Box
        sx={{
            position: 'absolute',
            zIndex: '10', 
            height: '100%',
            width: '100%',  
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
        }}
        >
            <Typography
            id="workingTypo"
            variant="h2"
            sx={{
                transform: 'rotate(-18deg)', 
                textShadow: '0px 12px 8px black',
                color: '#bbb', 
                background: '#222',
                borderRadius: '0.8rem',
                padding: '.4rem !important' 
            }}
            >WORKING ON IT!</Typography>
        </Box>
        : 
        null
        }
        <Card
            sx={{
                filter: (itemTag === 3) ? 'blur(0.2rem)' : 'none',
                opacity: (itemTag === 3) ? '0.8' : 'none',
                userSelect: (itemTag === 3) ? 'none' : null, 
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                pb: '1.4rem !important',
                bgcolor: 'primary.main',
                borderRadius: '2rem',
                mr: '1rem',
                boxShadow: '8px 4px 0px 4px #333',

                '&:last-child': {
                    mr: '0 !important'
                }
            }}
        >
            <CardMedia
                component={"img"}
                image={projectImage}
                alt={"Could not load from the Server!"}
                sx={{
                    width: '100%',
                    height: '18rem',
                    objectFit: 'cover'
                }}
            />
            <CardContent
                sx={{
                    padding: '1rem 1.4rem !important',
                    mb: '0.8rem'
                }}
            >
                <Typography
                    gutterBottom
                    variant={'h6'}
                    sx={{
                        fontWeight: '400',
                        textAlign: 'start'
                    }}
                >
                    {projectName}
                </Typography>
                <Typography
                    variant={"body2"}
                    sx={{
                        fontWeight: '100',
                        color: 'secondary.auxillary',
                        textAlign: 'start',
                        lineHeight: '1.4rem'
                    }}
                >
                    <Typography
                        variant={"body1"}
                        sx={{
                            color: '#666',
                            display: 'inline',
                            mr: '0.6rem'
                        }}
                    >
                        Used Technologies:
                    </Typography>
                    {projectDescription}
                </Typography>
            </CardContent>
            <CardActions
                sx={{
                    width: '100%',
                    display: 'inherit',
                    justifyContent: 'center'
                }}
            >
                {
                itemTag === 3 
                ? 
                    (<Button
                    variant={"contained"}
                    onClick={e => {
                        if(!(itemTag === 3)) setTrue();
                    }}
                    sx={{
                        padding: '0.6rem !important',
                        width: '80%',
                        bgcolor: 'secondary.main',
                        color: 'secondary.auxillary',
                        }}
                    disabled
                    >
                        Pre-view
                    </Button>)
            :
                (<Button
                    variant={"contained"}
                    onClick={e => {
                        setTrue();
                    }}
                    sx={{
                        padding: '0.6rem !important',
                        width: '80%',
                        bgcolor: 'secondary.main',
                        color: 'secondary.auxillary',
                    }}
                >
                    Pre-view
                </Button>)
                }
                <Preview
                    open={open}
                    setOpen={setOpen}
                    projectName={projectName}
                    projectImage={projectImage}
                    projectDetails={projectDetails}
                    URL={URL}
                />
            </CardActions>
        </Card>
        
        </>
    );

    return (
        projectCards
    )
}