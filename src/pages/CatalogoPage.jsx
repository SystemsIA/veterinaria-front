import { Fragment } from 'react';
import { Grid, makeStyles, useMediaQuery } from '@material-ui/core';
import Layout from '../components/Layout';
import CardRopa from '../components/CardRopa';

// Images
import gatoLibro from '../assets/img/gatitoLibro.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },

  withoutFlexBasis: {
    flexBasis: 'auto',
  },

  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  sizeImg: { width: '450px', zIndex: 100 },
  sizeImgMobile: {
    width: '240px',
  },

  contentImage: {
    margin: '1.8rem 2rem',
    '& > img': {
      maxWidth: 180,
      minWidth: 50,
    },
  },
}));

export default function CatalogoPage() {
  const classes = useStyles();
  const isMobileSize = useMediaQuery('(min-width:580px)');
  return (
    <Layout title="Catálogo">
      <div className={classes.root}>
        <Grid container spacing={2}>
          {isMobileSize ? (
            <Fragment>
              <Grid
                container
                item
                xs={12}
                spacing={2}
                direction="row"
                justify="space-evenly"
              >
                {[...Array(6).keys()].map((index) => (
                  <ViewMobile
                    key={index}
                    xs={4}
                    className={classes.withoutFlexBasis}
                  />
                ))}
              </Grid>
              <Grid
                container
                item
                xs={12}
                spacing={2}
                direction="row"
                justify="space-evenly"
              >
                <Grid item xs={4} className={classes.withoutFlexBasis}>
                  <div className={classes.contentImage}>
                    <img src={gatoLibro} alt="gatoLibro" />
                  </div>
                </Grid>
                {[...Array(2).keys()].map((index) => (
                  <ViewMobile
                    key={index}
                    xs={4}
                    className={classes.withoutFlexBasis}
                  />
                ))}
              </Grid>
            </Fragment>
          ) : (
            <Fragment>
              <Grid container item sm={6} spacing={2} direction="column">
                {[...Array(6).keys()].map((index) => (
                  <ViewMobile
                    key={index}
                    sm={3}
                    className={classes.withoutFlexBasis}
                  />
                ))}
              </Grid>
              <Grid container item sm={6} spacing={2} direction="column">
                {[...Array(2).keys()].map((index) => (
                  <ViewMobile
                    key={index}
                    sm={3}
                    className={classes.withoutFlexBasis}
                  />
                ))}
                <Grid
                  item
                  sm={3}
                  className={`${classes.withoutFlexBasis} ${classes.contentImage}`}
                >
                  <img src={gatoLibro} alt="gatoLibro" />
                </Grid>
              </Grid>
            </Fragment>
          )}
        </Grid>
      </div>
    </Layout>
  );
}

const ViewMobile = ({ sm, xs, className }) =>
  sm ? (
    <Grid item sm={sm} className={className}>
      <CardRopa />
    </Grid>
  ) : xs ? (
    <Grid item xs={xs} className={className}>
      <CardRopa />
    </Grid>
  ) : null;
