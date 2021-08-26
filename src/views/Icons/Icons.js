/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-dashboard-react/views/iconsStyle.js";
import ChartistGraph from "react-chartist";
import {
  Inspection1,Inspection2,Inspection3
} from "variables/charts.js";
import AccessTime from "@material-ui/icons/AccessTime";


import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(styles);

const useStylesCheckBoxGroup = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(7),
  },
}));

export default function Icons() {
  const classes = useStyles();
  const classesCheckboxGroup = useStylesCheckBoxGroup();

  const [state, setState] = React.useState({
    a: true,
    b: false,
    c: false,
    d: true,
    e: false,
    f: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { a, b, c, d, e, f } = state;
  return (
    <>
    <h4>Failed Material Inspection By Region and Customer</h4>
    <GridContainer>
       <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="primary">
              <ChartistGraph
                className="ct-chart"
                data={Inspection1.data}
                type="Bar"
                options={Inspection1.options}
                responsiveOptions={Inspection1.responsiveOptions}
                listener={Inspection1.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>South East</h4>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> Updated 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={Inspection2.data}
                type="Bar"
                options={Inspection2.options}
                responsiveOptions={Inspection2.responsiveOptions}
                listener={Inspection2.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>West Midlands</h4>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> Updated 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="info">
              <ChartistGraph
                className="ct-chart"
                data={Inspection3.data}
                type="Bar"
                options={Inspection3.options}
                responsiveOptions={Inspection3.responsiveOptions}
                listener={Inspection3.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>London</h4>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> Updated 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <div className={classesCheckboxGroup.root}>
          <GridItem>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">CUSTOMER_NAME</FormLabel>
            <FormGroup>
              <FormControlLabel
              control={<Checkbox checked={a} onChange={handleChange} name="gilad" />}
              label="Customer_1"
              />
              <FormControlLabel
              control={<Checkbox checked={b} onChange={handleChange} name="jason" />}
              label="Customer_2"
              />
              <FormControlLabel
              control={<Checkbox checked={c} onChange={handleChange} name="antoine" />}
              label="Customer_3"
              />
            </FormGroup>
          </FormControl>
          <FormControl component="fieldset" className={classes.formControl}>
          < FormLabel component="legend">ASSETS</FormLabel>
            <FormGroup>
              <FormControlLabel
              control={<Checkbox checked={d} onChange={handleChange} name="gilad" />}
              label="ASSET1"
              />
              <FormControlLabel
              control={<Checkbox checked={e} onChange={handleChange} name="jason" />}
              label="ASSET2"
              />
              <FormControlLabel
              control={<Checkbox checked={f} onChange={handleChange} name="antoine" />}
              label="ASSET3"
              />
            </FormGroup>
          </FormControl>
        </GridItem>
        </div>
    </GridContainer>
    </>
  );
}
