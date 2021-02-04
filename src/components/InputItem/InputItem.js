import React from 'react'
import styles from './Input.module.css'
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { brown } from '@material-ui/core/colors';

const CssTextField = withStyles({
root: {
  '& label.Mui-focused': {
    color: brown['300'],
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: brown['300'],
  },
},
})(TextField);

const Input = () => (
  <CssTextField
    className={styles.input}
    id="custom-css-standard-input"
    label="Что нужно сделать?"
  />
)

export default Input;
