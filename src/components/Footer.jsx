import { makeStyles } from '@material-ui/core';

// TODO: Implement styles
const useStyles = makeStyles((theme) => ({
  footer: {
    position: 'fixed',
    display: 'flex',
    bottom: '0',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quo
      necessitatibus itaque corrupti! Quam tempore blanditiis praesentium
      incidunt! Accusantium quae maiores beatae aperiam placeat architecto
      deserunt nemo reprehenderit quasi maxime!
    </footer>
  );
}
