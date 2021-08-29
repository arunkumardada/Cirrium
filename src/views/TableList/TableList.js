import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

//steps
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";
import SettingsIcon from "@material-ui/icons/Settings";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
// import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import StepConnector from "@material-ui/core/StepConnector";
import Tooltip from "@material-ui/core/Tooltip";

import CallReceivedIcon from "@material-ui/icons/CallReceived";
import LinearScaleIcon from "@material-ui/icons/LinearScale";
import locationIcon from "assets/img/locationIcon.svg";
import datetimestampIcon from "assets/img/datetimestampIcon.svg";
import massbalanceIcon from "assets/img/massbalanceIcon.svg";
// import countIcon from "assets/img/CountIcon.png";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import AvTimerOutlinedIcon from '@material-ui/icons/AvTimerOutlined';
// import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
// import LineWeightIcon from '@material-ui/icons/LineWeight';
// import CropFreeIcon from '@material-ui/icons/CropFree';

const styles = {
  root: {
    width: "100%",
  },
  button: {
    marginRight: "8px",
  },
  instructions: {
    marginTop: "8px",
    marginBottom: "8px",
  },
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
  },
  active: {
    color: "#784af4",
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  completed: {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <CallReceivedIcon />,
    3: <img src={locationIcon} />,
    4: <LinearScaleIcon />,
    5: <LocalShippingIcon />,
    6: <GroupAddIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles(styles);

function getSteps() {
  return ["Dismantle", "Receive", "Separate", "Process", "Ship", "Reincarnate"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <>
          <Tooltip title="Germany" placement="top-start">
            <img src={locationIcon} />
          </Tooltip>
          <br />
          <Tooltip title="dd mm yyyy" placement="top-start">
            <img src={datetimestampIcon} />
          </Tooltip>
        </>
      );
    case 1:
      return (
        <>
          <Tooltip title="Germany" placement="top-start">
            <img src={locationIcon} />
          </Tooltip>
          <br />
          <Tooltip title="dd mm yyyy" placement="top-start">
            <img src={datetimestampIcon} />
          </Tooltip>
        </>
      );
    case 2:
      return (
        <>
          <Tooltip title="Germany" placement="top-start">
            <img src={locationIcon} />
          </Tooltip>
          <br />
          <Tooltip title="dd mm yyyy" placement="top-start">
            <img src={datetimestampIcon} />
          </Tooltip>
          <br />
          <Tooltip title="23.4gm" placement="top-start">
            <img src={massbalanceIcon} />
          </Tooltip>
        </>
      );
    case 3:
      return (
        <>
          <Tooltip title="Germany" placement="top-start">
            <img src={locationIcon} />
          </Tooltip>
          <br />
          <Tooltip title="dd mm yyyy" placement="top-start">
            <img src={datetimestampIcon} />
          </Tooltip>
        </>
      );
    case 4:
      return (
        <>
          <Tooltip title="Germany" placement="top-start">
            <img src={locationIcon} />
          </Tooltip>
          <br />
          <Tooltip title="dd mm yyyy" placement="top-start">
            <img src={datetimestampIcon} />
          </Tooltip>
        </>
      );
    case 5:
      return (
        <>
          <Tooltip title="Germany" placement="top-start">
            <img src={locationIcon} />
          </Tooltip>
          <br />
          <Tooltip title="dd mm yyyy" placement="top-start">
            <img src={datetimestampIcon} />
          </Tooltip>
        </>
      );
    default:
      return "Unknown step";
  }
}

export default function TableList() {
  const classes = useStyles();

  const [activeStep, setActiveStep] = React.useState(1);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>
              WorkFlow Traceability Process
            </h4>
            <p className={classes.cardCategoryWhite}>Order Details Section</p>
          </CardHeader>
          <CardBody>
            <GridItem xs={12} sm={12} md={12}>
              <div className={classes.root}>
                <Stepper
                  alternativeLabel
                  activeStep={activeStep}
                  connector={<ColorlibConnector />}
                >
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel StepIconComponent={ColorlibStepIcon}>
                        {label}
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
                <div>
                  {activeStep === steps.length ? (
                    <div>
                      <Typography className={classes.instructions}>
                        All steps completed - you&apos;re finished
                      </Typography>
                      <Button onClick={handleReset} className={classes.button}>
                        Reset
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <Typography className={classes.instructions}>
                        {getStepContent(activeStep)}
                      </Typography>
                      <div>
                        <Button
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          className={classes.button}
                        >
                          Back
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleNext}
                          className={classes.button}
                        >
                          {activeStep === steps.length - 1 ? "Finish" : "Next"}
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </GridItem>
          </CardBody>
        </Card>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Order Details</h4>
            <p className={classes.cardCategoryWhite}>Order Details Section</p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={[
                "Order",
                "Order ID",
                "Customer",
                "Delivery Status",
                "Invoice Amount",
              ]}
              tableData={[
                ["Lithium", "19383", "Customer 1", "Delivered", "234€"],
                ["Manganese", "392722", "Customer 2", "Pending", "523€"],
                ["Cobolt", "86582", "Customer 3", "Delivered", "284€"],
                ["Lithium", "2910283", "Customer 4", "Pending", "678€"],
                ["Nickel", "383733", "Customer 5", "Cancelled", "846€"],
                ["Copper", "938372", "Customer 6", "Delivered", "435€"],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
