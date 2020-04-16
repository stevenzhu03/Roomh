import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function valueLabelBudget(value) {
  return `$ ${value}`;
}

function valueLabelAge(value) {
  return `${value}`;
}

const Filter = (props) => {
  const classes = useStyles();
  const [gender, setGender] = React.useState("");
  const [budget, setBudget] = React.useState(1000);
  const [age, setAge] = React.useState(25);

  const handleGender = (event) => {
    setGender(event.target.value);
    props.handleFilter(event.target.name, event.target.value);
  };

  const handleBudget = (event, value) => {
    setBudget(value);
    props.handleFilter("budget", value);
  };

  const handleAge = (event, value) => {
    setAge(value);
    props.handleFilter("age", value);
  };


  return (
    <div className="filter">
      <div className="gender-filter">
        <FormControl className={classes.formControl}>
          <InputLabel id="gender-input">Gender</InputLabel>
          <Select value={gender} onChange={handleGender} name="gender">
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"male"}>Male</MenuItem>
            <MenuItem value={"female"}>Female</MenuItem>
          </Select>
          <FormHelperText>Filter By Gender</FormHelperText>
        </FormControl>
      </div>

      <div className="budget-filter">
        <Typography id="linear-slider" gutterBottom>
          Filter By Budget
        </Typography>
        <Slider
          value={budget}
          min={0}
          step={100}
          max={5000}
          getAriaValueText={valueLabelBudget}
          valueLabelFormat={valueLabelBudget}
          onChange={handleBudget}
          valueLabelDisplay="auto"
          aria-labelledby="linear-slider"
        />
      </div>

      <div className="age-filter">
        <Typography id="linear-slider" gutterBottom>
          Filter By Age
        </Typography>
        <Slider
          value={age}
          min={0}
          step={1}
          max={75}
          getAriaValueText={valueLabelAge}
          valueLabelFormat={valueLabelAge}
          onChange={handleAge}
          valueLabelDisplay="auto"
          aria-labelledby="linear-slider"
        />
      </div>
    </div>
  );
};

export default Filter;
