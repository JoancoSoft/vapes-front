import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#61EA7F",
        },
        secondary: {
            main: "#FDBF08",
        },
        background: {
            default: "#1E1E1E",
            paper: 'transparent',
            footer: "#000000",
        },
        text: {
            primary: "#FFFFFF",
            secondary: '#585858',
        },
    },

    typography: {
        fontFamily: 'Roboto, sans-serif',
        h1: {
            fontWeight: 'bold',
            fontSize: 50 * .75,
        },
        h2: {
            fontWeight: 'bold',
            fontSize: 50 * .75,
        },
        subtitle: {
            fontWeight: 'regular',
            fontSize: 45 * .75,
        },
        body1: {
            fontWeight: 'regular',
            fontSize: 25 * .75,
        },
        button: {
            fontWeight: 'semi-bold',
            fontSize: 22 * .75,
            textTransform: 'uppercase',
            color: '#ffffff',
        },
        popularButton: {
            fontWeight: 'semi-bold',
            fontSize: 30 * .75,
            textTransform: 'uppercase',
            color: '#585858',
        },
        caption: {
            fontWeight: 'regular',
            fontSize: 20 * .75,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                containedPopular: {
                    background: "linear-gradient(90deg, #FFBF00 0%, #F4DD98 50%, #FFBF00 100%)",
                    '&:hover': {
                        background: "linear-gradient(90deg, #c39201 0%, #c3b078 50%, #c39201 100%)",
                    }
                }
            },
        },
    }
});

export default theme;