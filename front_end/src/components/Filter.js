import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Filter = (props) => {
  const classes = useStyles();
  const [gender, setGender] = React.useState('');


  const handleChange = (event) => {
    setGender(event.target.value)
    props.handleGender(event.target.value)
  };

  return (
    <div className="filter">
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={gender}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"male"}>Male</MenuItem>
          <MenuItem value={"female"}>Female</MenuItem>
        </Select>
        <FormHelperText>Filter By Gender</FormHelperText>
      </FormControl>
    </div>
  )

}

export default Filter