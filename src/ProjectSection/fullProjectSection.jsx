import { Container, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import ProjectSection from "./projects";
import Laptop from '../assets/laptop.svg';
import Carousel from "react-material-ui-carousel";
import { data } from "../projectListJson/projectList.json.jsx";
import { styledData } from "../dynamicStyles/styles";

export default function FullProjectSection() {

    const theme = useTheme();
    const mat = useMediaQuery(theme.breakpoints.down('sm'));
    const dynamicStyles = {
        Container: {
            ...mat && { ...styledData.breakpoints.sm.fullprojectSection.Container }
        }, 

    }

    return (
        <Container
            sx={{
                position: 'relative',
                bottom: '2rem',
                display: 'flex',
                height: '100%',
                flexDirection: 'row',
                width: '100%',
                ...dynamicStyles.Container
            }}
        >
            <Carousel
                className='carousel'
                sx={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    padding: '4.8rem 4rem !important',
                    flexDirection: 'column'
                }}
            >
                {
                    data
                        .map(item => {
                            return (
                                <ProjectSection
                                    key={item.id}
                                    itemTag={item.id}
                                    projectName={item.projectName}
                                    projectImage={item.image}
                                    projectDescription={item.description}
                                    projectDetails={item.details}
                                    URL={item.URL}
                                />
                            )
                        })
                }
            </Carousel>
            <Box
                id="imagePortion"
                sx={{
                    width: '60%',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <img
                    style={{
                        width: '100%'
                    }}
                    src={Laptop}
                />
            </Box>
        </Container>
    );
}