import { Google } from '@mui/icons-material';
import {
    AppBar, Container, Toolbar, Typography, Box, Button, Stack, useMediaQuery, IconButton
} from '@mui/material';
import {AiFillGithub} from 'react-icons/ai'; 
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { styledData } from '../dynamicStyles/styles';

export default function Navi() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const dynamicStyle = {
        Container: {
            ...matches && { ...styledData.breakpoints.sm.appBar.Container }
        },
        middleBox: {
            ...matches && { ...styledData.breakpoints.sm.appBar.middleBox }
        },
        iconButton: {
            ...matches && { ...styledData.breakpoints.sm.appBar.iconButton }
        }
    };

    return (
        <AppBar
            className='APPBAR'
            sx={{
                padding: '0.4rem 0rem 0.2rem 0rem !important',
                position: 'relative',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                background: 'transparent',
                boxShadow: 'none',
                paddingLeft: '0 !important',
                paddinRight: '0 !important',
                ...dynamicStyle.Container
            }}
        >
            <Container
                maxWidth={'none'}
                sx={{
                    paddingLeft: '0 !important',
                    paddinRight: '0 !important',
                    ...dynamicStyle.Container
                }}
            >
                <Toolbar
                    sx={{
                        paddingLeft: '0 !important',
                        paddinRight: '0 !important',
                        width: 'inherit',
                        justifyContent: 'space-between'
                    }}
                >
                    <Box
                        sx={{
                            cursor: 'pointer',
                            display: 'flex',
                        }}>
                        <Google
                            sx={{
                                flexGrow: 0
                            }}
                        />
                        <Typography
                            sx={{
                                ml: 1,
                                fontSize: '1rem',
                                fontWeight: '400',
                                textTransform: 'uppercase',
                                letterSpacing: 2
                            }}
                        >
                            Kritan
                        </Typography>
                    </Box>

                    <Box sx={{
                        flexGrow: 1,
                        width: '100%',
                        ...dynamicStyle.middleBox
                    }}>
                        <Stack
                            direction={"row"}
                            spacing={{
                                xs: 1,
                                md: 2,
                                lg: 4,
                                xl: 6
                            }}
                            sx={{
                                justifyContent: 'center'
                            }}
                        >
                            {
                                Array('Introduction', 'Projects', 'Contact').map((item, index) => {
                                    return (
                                        <Button variant="texted"
                                            key={index}
                                            sx={{
                                                padding: '1rem !important'
                                            }}
                                            onClick={e => {
                                                e.preventDefault();
                                                const clicked = document.querySelector('.' + item.toLowerCase());
                                                clicked.scrollIntoView({
                                                    behavior: 'smooth'
                                                });
                                            }}
                                        >{item}
                                        </Button>
                                    )
                                })
                            }
                        </Stack>
                    </Box>

                    <Box sx={{
                        width: 'max-content',
                        boxShadow: '(10px, 10px, 10px, 10px)',
                        ...dynamicStyle.iconButton
                    }}>
                        <Button
                            className="topButton"
                            variant={'contained'}
                            sx={{
                                width: 'inherit',
                                padding: '0.6rem 0.8rem !important', 
                                display: 'flex', 
                                gap: '.2rem', 
                                color: '#bbb'
                            }}
                        >
                            <AiFillGithub />
                            <Typography
                            variant='subtitle'
                            >
                                Github
                            </Typography>
                        </Button>
                        <IconButton
                            className="topIcon"
                            aria-label='menu'
                            sx={{
                                display: 'none'
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}