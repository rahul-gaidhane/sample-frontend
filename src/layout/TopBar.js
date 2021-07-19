import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  makeStyles,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(({
  root: {
    backgroundColor: 'white',
    borderBottom: '5px solid #008080'
  },
  toolbar: {
    height: 64
  },
  title: {
    color: '#008080',
    margin: '10px',
    fontSize: '22px',
    fontFamily: 'Verdana,Geneva,sans-serif'
  }
}));

const TopBar = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
    >
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.title}>
          Person Registration
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string
};

export default TopBar;
