import { Alert, Box, Button, Container, Snackbar, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import Mail from '../assets/mail.svg'
import { styledData } from "../dynamicStyles/styles";
import { useState } from "react";

export default function ContactSection() {

    const [open, setOpen] = useState(false); 

    const handleSubmitClick = () => {
        setOpen(true); 
    }

    const handleSubmitClose = (e) => {
        setOpen(false); 
    }

    const theme = useTheme();
    const mat = useMediaQuery(theme.breakpoints.down('sm'));
    const dynamicStyles = {
        Container: {
            ...mat && { ...styledData.breakpoints.sm.contactSection.Container }
        },
        Typography: {
            ...mat && { ...styledData.breakpoints.sm.Typography.variant }
        },
        InnerContainer: {
            ...mat && { ...styledData.breakpoints.sm.contactSection.InnerContainer }
        }
    }

    return (
        <Container
            sx={{
                p: '2.6rem 2.4rem !important',
                ...dynamicStyles.Container
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    p: '2rem 2rem !important',
                    border: 'none',
                    borderRadius: '1rem',
                    boxShadow: 'inset 0px 0px 18px #333',
                    ...dynamicStyles.Container
                }}
            >
                <Container
                    sx={{
                        width: '50%',
                        height: 'fit-content',
                        m: '0',
                        ...dynamicStyles.InnerContainer,

                        '@media (max-width: 600px)': {
                            bgcolor: 'transparent',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center'
                        }
                    }}
                >
                    <div>
                        <Typography
                            variant={"h3"}
                            maxWidth={'70%'}
                            textAlign={"left"}
                            gutterBottom
                            sx={{
                                ...dynamicStyles.Typography.h4
                            }}
                        >
                            Want to talk? Reach me!
                        </Typography>
                        <Typography
                            variant={"h6"}
                            fontWeight={100}
                            textAlign={"left"}
                            sx={{
                                ...dynamicStyles.Typography.subtitle2
                            }}
                        >
                            Let's have a discussion about some useful subjects and figure it's solution out.
                        </Typography>
                    </div>
                    <img
                        src={Mail}
                        style={{
                            width: '50%',
                            height: 'auto',
                            filter: 'drop-shadow(0px 0px 8px white)'
                        }}
                    />
                </Container>
                <Container
                    sx={{
                        width: '50%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '0.6rem 2rem !important',
                        ...dynamicStyles.InnerContainer
                    }}
                >
                    <TextField
                        className={'email'}
                        id={"email"}
                        label={"Email"}
                        variant={"standard"}
                        color={"brightText"}
                        sx={{
                            p: '0.4rem 0rem !important',
                            fontSize: '1rem',
                            mb: '2.8rem'
                        }}
                    />
                    <TextField
                        id={"message"}
                        label={"Message..."}
                        variant={"standard"}
                        color={"brightText"}
                        multiline
                        rows={8}
                        sx={{
                            p: '0.4rem 0rem !important',
                            fontSize: '1rem'
                        }}
                    />
                    <Box
                    className={"form-btn-section"}
                    sx={{
                        width: '100%', 
                        display: 'flex', 
                        justifyContent: 'flex-end'
                    }}
                    >
                    <Button
                        className={"form-btn"}
                        variant="contained"
                        color={'success'}
                        sx={{
                            width: '24%', 
                            p: '0.9rem',
                            fontSize: '1rem',  
                            mt: '0.8rem',

                        }}
                        onClick={handleSubmitClick}
                    >
                        Submit
                    </Button>
                    
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleSubmitClose}>
                    <Alert onClose={handleSubmitClose} severity="success" sx={{ width: '100%' }}>
                        This is a success message!
                    </Alert>
                    </Snackbar>
                    </Box>
                </Container>
            </Box>
        </Container>
    );
}