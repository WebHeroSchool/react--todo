import React from 'react'
import styles from './Input.module.css'
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { brown } from '@material-ui/core/colors';

class InputItem extends React.Component {
  state = {
    inputValue: ''
  };

  onButtonClick = () => {
    this.setState({
      inputValue: ''
    });
    if (this.state.inputValue !== '') {
      this.props.onClickAdd(this.state.inputValue);
    }
  }

  render() {
    const {onClickAdd} = this.props;

    return (<div className={styles.container}>
      <CssTextField
        className={styles.input}
        id="custom-css-standard-input"
        label="Что нужно сделать?"
        value = {this.state.inputValue}
        onChange={event => this.setState({inputValue: event.target.value})}
      />
      <ColorButton
        variant="contained"
        color="primary"
        onClick={this.onButtonClick}
        className={styles.button}>
        +
      </ColorButton>
    </div>);
  }
}
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

const ColorButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText(brown['300']),
    backgroundColor: brown['300'],
    '&:hover': {
      backgroundColor: brown['300'],
    },
  },
}))(Button);

export default InputItem;
