import { makeStyles } from "@material-ui/core";

const drawerWidth = 0;

export default makeStyles(theme => ({
    appBar: {
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        [theme.breakpoints.up('sm')]: {
            width: `calc(100%-${drawerWidth}px)`,
            marginLeft: drawerWidth,
        }
    },
    image: {
        marginRight: '10px'
    },
    title: {
        flexGrow: '1',
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none'
    },
    grow: {
        flexGrow: '1'
    },
    button: {

    }
}))