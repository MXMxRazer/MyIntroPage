import { Box, Button, Container, Paper, Typography, SvgIcon, Icon, useTheme, useMediaQuery } from "@mui/material";
import { Stack } from "@mui/system";
import {BsFacebook} from 'react-icons/bs'; 
import {AiFillInstagram} from 'react-icons/ai'; 
import {FaLinkedinIn} from 'react-icons/fa'; 
import ViteLogo from '../assets/vite.svg'; 
import { styledData } from "../dynamicStyles/styles";

export default function Hero() {

    const theme = useTheme();
    const mat = useMediaQuery(theme.breakpoints.down('sm'));
    const dynamicStyles = {
        Typography: {
            ...mat && { ...styledData.breakpoints.sm.Typography.variant }
        },
        Container: {
            ...mat && { ...styledData.breakpoints.sm.heroSection.Container }
        },
        Position: {
            ...mat && { ...styledData.breakpoints.sm.Position }
        }
    }

    return (
        <Container
            maxWidth={'none'}
            disableGutters
            sx={{
                top: 0,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                padding: '1rem 0rem !impotant',
                position: 'relative',
                // border: '2px solid whitesmoke',
                width: '100%',
                height: 'inherit',
                ...dynamicStyles.Container
            }}
        >
            <Container
                className={"textSection"}
                disableGutters
                maxWidth={'none'}
                sx={{
                    borderRadius: 0,
                    display: 'inline-flex',
                    flexDirection: 'column',
                    background: 'transparent',
                    height: 'inherit',
                    justifyContent: 'center',
                    postion: 'relative'
                }}
            >
                <img src={ViteLogo}
                    style={{
                        position: 'absolute',
                        width: 'inherit',
                        height: 'inherit',
                        translate: '0% 0%',
                        zIndex: '1',
                        scale: '0.94',
                        filter: 'drop-shadow(0px 18px 14px black)',
                        opacity: '0.8',
                        ...dynamicStyles.Position.relative
                    }}
                />
                <Box
                    sx={{
                        zIndex: '1'
                    }}
                >
                    <Typography
                        variant={"h2"}
                        sx={{
                            fontWeight: '200',
                            mb: '0.2rem',
                            ...dynamicStyles.Typography.h2
                        }}
                    >
                        Hi, There Welcome to the Site. (Vite) 
                    </Typography>
                </Box>
                <Box
                    sx={{
                        zIndex: '1'
                    }}
                >
                    <Typography
                        variant={"h6"}
                        sx={{
                            fontWeight: '100',
                            zIndex: '1',
                            ...dynamicStyles.Typography.subtitle1
                        }}
                    >
                        I'm Kritan here, trying my best to maintain out the site and 
                        provide with more info about me on this site. 
                    </Typography>
                </Box>
                <Box
                    mt={4}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <Stack
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            translate: '9% 0%',
                            zIndex: '2'
                        }}
                    >
                        {
                            //Need to add more buttons. Hence, array is used.
                            Array([<BsFacebook />, 'https://www.facebook.com/profile.php?id=100005679886289'], 
                                [<AiFillInstagram />, 'https://instagram.com/'], 
                                [<FaLinkedinIn />, 'https://www.linkedin.com/in/kritan-tamrakar-593667265/']).map((item, index) => {
                                return (
                                    <Button
                                        key={index}
                                        color={"secondary"}
                                        sx={{
                                            zIndex: '2',
                                            mr: '1.4rem',
                                            p: '0.8rem !important',
                                            borderRadius: '40px',
                                            border: 'none',
                                            bgcolor: 'primary.main', 
                                            fontSize: '1.4rem'
                                        }}
                                        variant={"contained"}
                                        onClick={e => {
                                            window.open(item[1])
                                        }}
                                    >
                                        {item[0]}
                                    </Button>
                                );
                            })
                        }
                    </Stack>
                </Box>
            </Container>
        </Container>
    );
}