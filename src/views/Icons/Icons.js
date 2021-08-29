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
import { Inspection1, Inspection2, Inspection3 } from "variables/charts.js";
import AccessTime from "@material-ui/icons/AccessTime";

import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Li",
    uv: 50,
    pv: 80,
    amt: 14,
    cnt: 49,
    fill: "red",
  },
  {
    name: "Co",
    uv: 50,
    pv: 96,
    amt: 15,
    cnt: 59,
    fill: "red",
  },
  {
    name: "Mn",
    uv: 50,
    pv: 10,
    amt: 98,
    cnt: 35,
    fill: "green",
  },
  {
    name: "Ni",
    uv: 50,
    pv: 10,
    amt: 12,
    cnt: 48,
    fill: "green",
  },
  {
    name: "Gr",
    uv: 50,
    pv: 11,
    amt: 11,
    cnt: 46,
    fill: "green",
  },
  {
    name: "Mg",
    uv: 50,
    pv: 68,
    amt: 17,
    cnt: 38,
    fill: "yellow",
  },
];

const data1 = [
  {
    name: "Li",
    uv: 30,
    pv: 60,
    amt: 14,
    cnt: 49,
    fill: "red",
  },
  {
    name: "Co",
    uv: 30,
    pv: 46,
    amt: 15,
    cnt: 59,
    fill: "red",
  },
  {
    name: "Mn",
    uv: 30,
    pv: 22,
    amt: 98,
    cnt: 35,
    fill: "yellow",
  },
  {
    name: "Ni",
    uv: 30,
    pv: 17,
    amt: 12,
    cnt: 48,
    fill: "green",
  },
  {
    name: "Gr",
    uv: 30,
    pv: 11,
    amt: 11,
    cnt: 46,
    fill: "green",
  },
  {
    name: "Mg",
    uv: 30,
    pv: 28,
    amt: 17,
    cnt: 28,
    fill: "yellow",
  },
];

const data2 = [
  {
    name: "Li",
    uv: 15,
    pv: 40,
    amt: 14,
    cnt: 29,
    fill: "red",
  },
  {
    name: "Co",
    uv: 15,
    pv: 66,
    amt: 15,
    cnt: 29,
    fill: "red",
  },
  {
    name: "Mn",
    uv: 15,
    pv: 15,
    amt: 68,
    cnt: 25,
    fill: "green",
  },
  {
    name: "Ni",
    uv: 15,
    pv: 20,
    amt: 22,
    cnt: 28,
    fill: "green",
  },
  {
    name: "Gr",
    uv: 15,
    pv: 21,
    amt: 21,
    cnt: 36,
    fill: "green",
  },
  {
    name: "Mg",
    uv: 15,
    pv: 48,
    amt: 27,
    cnt: 28,
    fill: "yellow",
  },
];

const useStyles = makeStyles(styles);

const useStylesCheckBoxGroup = makeStyles((theme) => ({
  root: {
    display: "flex",
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
      <h5>Failed Material Inspection By Region and Customer (%)</h5>
      <GridContainer>
        <GridItem xs={12} md={4}>
          <b>West Midlands </b>
          <ComposedChart
            width={400}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            {/* <Legend /> */}
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          </ComposedChart>
        </GridItem>
        <GridItem xs={12} md={4}>
          <b>London </b>
          <ComposedChart
            width={400}
            height={300}
            data={data1}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          </ComposedChart>
        </GridItem>
        <GridItem xs={12} md={4}>
          <b>South East </b>
          <ComposedChart
            width={400}
            height={300}
            data={data2}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          </ComposedChart>
        </GridItem>
        <div className={classesCheckboxGroup.root}>
          <GridItem>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">CUSTOMER_NAME</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox checked={a} onChange={handleChange} name="a" />
                  }
                  label="Customer_1"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={b} onChange={handleChange} name="b" />
                  }
                  label="Customer_2"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={c} onChange={handleChange} name="c" />
                  }
                  label="Customer_3"
                  cardTitle
                />
              </FormGroup>
            </FormControl>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">ASSETS</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox checked={d} onChange={handleChange} name="d" />
                  }
                  label="ASSET1"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={e} onChange={handleChange} name="e" />
                  }
                  label="ASSET2"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={f} onChange={handleChange} name="f" />
                  }
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
