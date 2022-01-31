import { Button, Grid } from "@material-ui/core";
import { AddComment } from '@material-ui/icons'
import Navbar from "./components/navbar/Navbar";
import useStyle from './styles/style';
import Rightbar from './components/rightbar/Rightbar';
import Feed from './components/feed/Feed';
import Leftbar from './components/leftbar/Leftbar';

function App() {
  const classes = useStyle();

  return (
    <div>
      <Navbar />

      <Grid container>
        <Grid item sm={3}  className={classes.right}>
          <Rightbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={2} xs={2} className={classes.left}>
          <Leftbar />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
