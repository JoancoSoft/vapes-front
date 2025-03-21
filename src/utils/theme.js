import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#59C185",
        },
        secondary: {
            main: "#FDBF08",
        },
        background: {
            default: "#252B30",
            paper: 'transparent',
            card: '#313A42',
            footer: "#000000",
        },
        text: {
            primary: "#FFFFFF",
            secondary: '#585858',
        },
        error: {
            main: "#FF6B6B",
        },
        warning: {
            main: "#FFE66D",
        },
        info: {
            main: "#6B5B95",
        },
        success: {
            main: "#2ECC71",
        },
    },

    typography: {
        fontFamily: 'Roboto, sans-serif',
        h1: {
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
        link: {
            color: '#ffffff',
            fontWeight: 'semi-bold',
            fontSize: 25 * .7,
            textDecoration: 'none',
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
        MuiTextField: {
            styleOverrides: {
                root: {
                    borderRadius: 10,
                    backgroundColor: 'transparent',
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: '#ffffff',
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    backgroundColor: '#ffffff',
                    color: '#000000',
                },
            },
        },
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