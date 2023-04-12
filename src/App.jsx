import { Box, Container, createTheme, CssBaseline, TextField, ThemeProvider, Typography, useTheme, useMediaQuery } from '@mui/material';
import Hero from './HeroSection/hero';
import Navi from './Navigation/navi';
import './App.css';
import Banner from './BannerSection/banner';
import IntroSection from './BelowHero/introduction';
import FullProjectSection from './ProjectSection/fullProjectSection';
import ContactSection from './contactSection/ContactSection';
import IntroHeaders from './IntroHeaders/introHeaders';
import { styledData } from './dynamicStyles/styles';

const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#121212',
      contrastText: '#666',
      brightText: '#fff'
    },
    secondary: {
      main: '#222',
      auxillary: '#777',
      third: '#aaa'
    },
    brightText: {
      main: '#fff'
    },
    buttonColor: {
      main: '#007ea7'
    }
  }
});


function App() {

  const theme = useTheme();
  const mat = useMediaQuery(theme.breakpoints.down('sm'));
  const dynamicStyles = {
      HeightProblem: {
          ...mat && { ...styledData.breakpoints.sm.heroSection.HeightProblem }
      }
  }

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Container
      sx={{
        backgroundColor: 'secondary.third', 
        width: '100%'
      }}
      >
        <Typography
        variant='subtitle'
        sx={{
          color: '#333',
          fontStyle: 'italic !important'
        }}
        >
          This website is still under construction.
        </Typography>
      </Container>
      <Container
        className="headContainer"
        maxWidth={"none"}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          paddingLeft: '4rem !important',
          paddingRight: '4rem !important',
          width: '100%',
          height: '100%',
          position: 'relative',
          background: "linear-gradient(to bottom, black, rgba(54, 54, 54, 1))",

          ['@media (max-width: 600px)']: {
            padding: '0.4rem !important',
            overflow: 'hidden'
          }, 
          ...dynamicStyles.HeightProblem
        }}
      >
        <Container
          maxWidth={'none'}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            positoin: 'relative',
            width: '100%',
            height: '100%', 
          }}
        >
          <Navi />
          <Hero />
        </Container>
      </Container>
      <Box
        sx={{
          translate: '0% -5%',
          width: '100%',
          height: '100%',
          background: 'rgba(51, 51, 51, 1)'
        }}
      >
        <Box
          sx={{
            height: 'auto',
            background: 'linear-gradient(rgba(51, 51, 51, 1), rgba(0, 0, 0, 1))'
          }}
        >
          <Banner />
          <Container>
            <Container
              sx={{
                mt: '4rem',
                width: '100%'
              }}
            >
              <IntroHeaders
                header={"Introduction"}
              />
            </Container>
            <IntroSection />
            <IntroHeaders
              header={"Projects"}
            />
            <Container
              sx={{
                display: 'flex',
                gap: '2rem',
                height: '100%',
                padding: '0rem !important'
              }}
            >
              <FullProjectSection />
            </Container>
            <IntroHeaders
              header={"Contact"}
            />
            <Container
              component={"footer"}
            >
              <ContactSection />
            </Container>
          </Container>
        </Box>
      </Box >

    </ThemeProvider >
  );
}

export default App;
