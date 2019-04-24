import React from 'react';
import { connect } from 'react-redux';


import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import { addTodo } from '../actions';

class AddTodo extends React.Component {

  state = {
    text: '',
  };

  handleChange = () => event => {
    this.setState({
      text: event.target.value,
    });
  };

  render() {
    const {
      classes,
      dispatch,
    } = this.props;

    return (
      <form
        className={classes.form}
        onSubmit={e => {
          e.preventDefault();
          if (!this.state.text.trim()) {
            return;
          }
          dispatch(addTodo(this.state.text));
          this.setState({
            text: '',
          });
        }}
      >
        <TextField
          className={classes.child}
          id="outlined-todo"
          label="Todo"
          value={this.state.text}
          onChange={this.handleChange()}
          margin="normal"
          variant="outlined"
        />
        <Button
          className={classes.child}
          variant="contained"
          color="primary"
          type="submit"
        >
          添加TODO
        </Button>
      </form>
    );
  };
};

const styles = theme => ({
  form: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  child: {
    margin: 10,
  },
});

export default withStyles(styles)(connect()(AddTodo));
