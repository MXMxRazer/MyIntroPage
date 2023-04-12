import { Box, Card, CardContent, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Container } from "@mui/system";
import phoneLogo from '../assets/phone.svg'
import LangView from "./CardViewer/langView";
import { useState } from "react";
import { styledData } from "../dynamicStyles/styles";

export default function IntroSection() {



    const theme = useTheme();
    const mat = useMediaQuery(theme.breakpoints.down('sm'));
    const dynamicStyles = {
        Container: {
            ...mat && { ...styledData.breakpoints.sm.introductionSection.Container }
        }
    }

    const infoCardPara1 = "Hello there, I, myself, Kritan Tamrakr welcomes you to this webpage. There's not much to do around this page, but I'll keep adding new features to make it more attractive for your smooth experience.";
    const infoCardPara2 = "I'm currently on my learning phase for web, mobile and server-side applications and trying my best to present to you guys. Thank you for your appearance on this page.";
    const Languages = ['Scripting Language', 'Programming Language'];

    return (
        <Container
            maxWidth={'none'}
            sx={{
                display: 'flex',
                mt: '1.8rem',
                mb: '3rem',
                p: '1rem !important',
                position: 'relative',
                width: '100%',
                overflow: 'hidden',
                ...dynamicStyles.Container
            }}
        >
            <Box
                id="imagePortion"
                sx={{
                    width: '24%',
                    position: 'relative'
                }}
            >
                <img src={phoneLogo}
                    style={{
                        width: '100%',
                        height: '100%',
                        filter: 'saturate(3.4)'
                    }}
                />
            </Box>
            <Box
                id="infoPortion"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    width: '70%',
                    gap: 4
                }}
            >
                <Card
                    variant="elevation"
                    sx={{
                        width: '96%',
                        maxWidth: '96%',
                        padding: '0rem 1.2rem 0rem 1.2rem !important',
                        height: 'fit-content',
                        ml: 'auto',
                        borderRadius: '1rem',
                        textAlign: 'justify',
                        boxShadow: '-12px 18px 0px -2px rgba(62, 62, 62, 1)',
                        background: 'linear-gradient(to bottom, rgba(51, 51, 51, 1), rgba(18, 18, 18, 1))'
                    }}
                >
                    <CardContent
                        sx={{
                            pt: '0 !important',
                            p: '1rem !important'
                        }}
                    >
                        <Typography
                            variant={"subtitle1"}
                            sx={{
                                fontWeight: '300',
                                width: 'auto',
                                height: 'auto'
                            }}
                        >
                            {infoCardPara1}
                        </Typography>
                        <br />
                        <br />
                        <Typography
                            variant={"subtitle1"}
                            sx={{
                                fontWeight: '300',
                                width: 'auto',
                                height: 'auto'
                            }}
                        >
                            {infoCardPara2}
                        </Typography>
                    </CardContent>
                </Card>
                <Card
                    className="exp"
                    variant="elevation"
                    sx={{
                        width: '96%',
                        maxWidth: '96%',
                        padding: '1rem 1.2rem 1rem 1.2rem !important',
                        height: 'fit-content',
                        ml: 'auto',
                        boxShadow: '-12px 18px 0px -2px rgba(62, 62, 62, 1)',
                        background: 'linear-gradient(to bottom, rgba(51, 51, 51, 1), rgba(18, 18, 18, 1))'
                    }}
                >
                    <CardContent>
                        <Typography
                            variant={"h5"}
                            textAlign="center"
                            sx={{
                                p: '1rem !important'
                            }}
                        >
                            My workspace
                        </Typography>
                        <Container
                            className="dynamicContainer"
                            sx={{
                                mt: '1.4rem',
                                display: 'flex',
                                justifyContent: 'space-between',
                                overflow: 'auto',
                                gap: '1.2rem', 
                                p: '1.4rem !important',
                                borderRadius: '1rem',
                                // bgcolor: 'secondary.main'
                            }}
                        >
                            { 
                                Languages.map((item, index) => {
                                    return (
                                        <Container
                                        key={index}
                                        sx={{
                                            display: 'flex'
                                        }}
                                        >
                                            <LangView
                                                items={item}
                                            />
                                        </Container>
                                    );
                                })
                            }
                        </Container>
                    </CardContent>
                </Card>
            </Box>
        </Container >
    );
}