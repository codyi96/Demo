import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

class Link extends React.Component {
  render() {
    const {
      active,
      onClick,
      children,
      classes,
    } = this.props;
    return (
      <Button
        className={classes.button}
        onClick={onClick}
        disabled={active}
        variant="contained"
        color="primary"
      >
        {children}
      </Button>
    );
  };
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

const styles = theme => ({
  button: {
    margin: 4,
  },
});

export default withStyles(styles)(Link);
