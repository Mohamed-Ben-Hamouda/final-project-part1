import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loadInfermier } from "../actions/AuthAction";
import PatientListe from "../components/PatientListe";
import SuiviePatientItem from "../components/SuiviePatientItem";
import SoinPatient from "../components/SoinPatient";
import Prescription from "../components/Prescription";
import TestCovid from "../components/TestCovid.js";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        "aria-controls": `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "100%",
        backgroundColor: theme.palette.background.paper,
    },
}));

function HomeInfermier() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        <Tab label="GestionPatient" {...a11yProps(0)} />
                        <Tab label="Suivie Patient" {...a11yProps(1)} />
                        <Tab label="Soin" {...a11yProps(2)} />
                        <Tab label="Prescription" {...a11yProps(3)} />
                        <Tab label="TestCovid" {...a11yProps(4)} />
                        <Tab label="Visualiser COVID-19" {...a11yProps(5)} />
                        <Link to="/Home"><Tab label="QuittTTer" {...a11yProps(6)} /></Link>
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <PatientListe />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <SuiviePatientItem />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <SoinPatient />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Prescription />
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <TestCovid />
                </TabPanel>
                <TabPanel value={value} index={5}>
                    Visualiser COVID-19
        </TabPanel>
                <TabPanel value={value} index={6}>
                    Quitter
        </TabPanel>
            </div>
            <footer style={{ textAlign: "center" }}>وزارة الصحة التونسية</footer>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    };
};
export default connect(mapStateToProps)(HomeInfermier);








