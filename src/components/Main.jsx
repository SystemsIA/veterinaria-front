import clsx from 'clsx';
export default function Main({ classes, open, children }) {
  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: open,
      })}
    >
      <div className={classes.drawerHeader} />
      {children}
    </main>
  );
}
