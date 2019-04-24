import React from 'react';

import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';

import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </Card>
    );
  };
};

const styles = theme => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: 'auto',
    minHeight: 500,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 200,
    backgroundColor: '#F6F6F6',
  },
});

export default withStyles(styles)(App);
