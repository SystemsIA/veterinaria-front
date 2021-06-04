import { Fragment } from 'react';
import { Grid, makeStyles, useMediaQuery } from '@material-ui/core';
import Layout from '../components/Layout';
import CardRopa from '../components/CardRopa';

// Images
import gatoLibro from '../assets/img/gatitoLibro.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexDirection: 'column',
    '& > *': {
      justifyContent: 'center',
      alignItems: 'center',
    },
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
    textAlign: 'center',
    '& > img': {
      maxWidth: 345,
      minWidth: 50,
    },
  },
  minWidthImg: {
    width: 220,
  },
}));

function CatalogoPage() {
  const classes = useStyles();
  const isMobileSize = useMediaQuery('(min-width:580px)');
  return (
    <Layout title="Catálogo">
      <div className={classes.root}>
        <Grid container spacing={2} style={{ margin: 0 }}>
          {isMobileSize ? (
            <Fragment>
              <Grid
                container
                item
                xs={12}
                spacing={2}
                direction="row"
                wrap="wrap"
                justify="space-evenly"
              >
                {[...Array(8).keys()].map((index) => (
                  <ViewCardMobile
                    key={index}
                    xs={4}
                    className={classes.withoutFlexBasis}
                  />
                ))}
                <Grid item xs={4} className={classes.withoutFlexBasis}>
                  <div className={classes.contentImage}>
                    <img src={gatoLibro} alt="gatoLibro" />
                  </div>
                </Grid>
              </Grid>
            </Fragment>
          ) : (
            <Fragment>
              <Grid
                container
                item
                sm={6}
                spacing={2}
                direction="column"
                alignItems="center"
              >
                {[...Array(8).keys()].map((index) => (
                  <ViewCardMobile
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
                  <img
                    className={`${isMobileSize ? '' : classes.minWidthImg}`}
                    src={gatoLibro}
                    alt="gatoLibro"
                  />
                </Grid>
              </Grid>
            </Fragment>
          )}
        </Grid>
      </div>
    </Layout>
  );
}

const ViewCardMobile = ({ sm, xs, className }) =>
  sm ? (
    <Grid item sm={sm} className={className}>
      <CardRopa />
    </Grid>
  ) : xs ? (
    <Grid item xs={xs} className={className}>
      <CardRopa />
    </Grid>
  ) : null;

export default CatalogoPage;
