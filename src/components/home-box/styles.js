import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    homeBoxWrap: {
        display: "flex",
        maxWidth: "95%",
        margin: "0 auto",
        marginTop: '-80px',
        position: 'relative',
    },
    storyWrap: {
        display: "flex",
        alignItems: "center",
    },
    homeStory: {
        background: "#013356",
        padding: "30px",
        height: "auto",
    },
    storyTitle: {
        color: "#fff",
        fontSize: "24px",
        fontFamily: 'Playfair Display, serif'
    },
    storyContent: {
        lineHeight: "1.5rem",
        color: "#fff",
        marginBottom: '20px'
    },
    icon1: {
        margin: "25px 25px 25px 0",
    },
    icon2: {
        margin: "25px 25px 25px 0",
    },
    icon3: {
        margin: "25px 25px 25px 0",
    },

    approachWrap: {
        display: "flex",
        alignItems: "center",
    },
    homeApproach: {
        background: "#003d69",
        padding: "30px",
        height: "auto",
    },
    approachTitle: {
        color: "#fff",
        fontSize: "24px",
        fontFamily: 'Playfair Display, serif'
    },
    approachContent: {
        lineHeight: "1.5rem",
        color: "#fff",
        marginBottom: '20px'
    },
    missionWrap: {
        display: "flex",
        alignItems: "center",
    },
    homeMission: {
        background: "#014373",
        padding: "30px",
        height: "auto",
    },
    missionTitle: {
        color: "#fff",
        fontSize: "24px",
        fontFamily: 'Playfair Display, serif'
    },
    missionContent: {
        lineHeight: "1.5rem",
        color: "#fff",
        marginBottom: '20px'
    },
    [theme.breakpoints.down('xs')]: {
        homeBoxWrap: {
            marginTop: '10px'
        }
    }
}));

export default useStyles;
