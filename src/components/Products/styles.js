import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
    content: {
        flexGrow: '1',
        background: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
}))