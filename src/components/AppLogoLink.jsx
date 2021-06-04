import { Link } from 'react-router-dom';
import { makeStyles, Typography } from '@material-ui/core';

import logoApp from '../assets/img/logo-app.png';

const useStyles = makeStyles((theme) => ({
  sizeLogoImg: (props) => ({
    maxWidth: props.small ? 45 : 54,
    maxHeight: props.small ? 45 : 48,
    display: 'inline-block',
    padding: theme.spacing(1),
  }),
  navLogo: {
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
}));

function AppLogoLink({ small = false, to, nameLink = '' }) {
  const classes = useStyles({ small });
  return (
    <Link to={to} className={classes.navLogo}>
      <img src={logoApp} alt={nameLink} className={classes.sizeLogoImg} />
      <Typography variant={small ? 'h6' : 'h4'} noWrap>
        {nameLink}
      </Typography>
    </Link>
  );
}

export default AppLogoLink;
