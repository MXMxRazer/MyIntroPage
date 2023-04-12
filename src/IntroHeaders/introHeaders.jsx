import { Typography, useTheme, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import { styledData } from "../dynamicStyles/styles";

const ContentHeaders = styled('div')({
    color: '#bbb',
    padding: 8,
    borderRadius: 4,
    position: 'relative',
    display: 'inline',
    textDecoration: 'underline'
});

export default function IntroHeaders({ header }) {

    const theme = useTheme(); 
    const mat = useMediaQuery(theme.breakpoints.down('sm')); 
    const dynamicStyles = {
        Typography: {...mat && styledData.breakpoints.sm.Typography.variant.h3}, 
        AbsoluteBar: {...mat && styledData.breakpoints.sm.AbsoluteBar}
    }; 

    return (
        <div
            className={header.toLowerCase()}
            onClick={e => {
                e.preventDefault();
            }}
            style={{
                cursor: 'text',
                userSelect: 'text'
            }}
        >
            <ContentHeaders>
                <Typography
                    component={'p'}
                    variant={'h3'}
                    textTransform={'capitalize'}
                    sx={{
                        mt: '1rem !important',
                        p: '1rem 2rem !important',
                        textAlign: 'start',
                        fontFamily: 'monospace',
                        color: '#ccc', 
                        display: header==="Contact" ? 'none' : 'block',
                        ...dynamicStyles.Typography
                    }}
                >
                    {header}
                </Typography>
            </ContentHeaders>
        </div>
    );
}