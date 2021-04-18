import React from 'react';
import {AppBar, Toolbar, Typography ,Card}from '@material-ui/core';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import TuneIcon from '@material-ui/icons/Tune';
import Avatar1 from "../Images/avatar1.png";
import browse1 from "../Images/browse1.jpg";
import TitleCard from "../components/TitleCard";
import Data from '../Data';

const useStyles = makeStyles((theme) => ({
    root: {
    flexGrow: 1,
    backgroundColor:'#141414',
  },
  app:{
    backgroundColor:'black',
  },
  search: {
    
    position: 'relative',
    borderRadius: '4px',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(120),
      width: 'auto',
    },
  },
    searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  icons:{
    padding:'20px',

  },
  cardTitle:{
    backgroundColor:'#141414',
    position:'relative',
    minHeight:'340px',
    marginLeft:40,
   
  },
  title:{
    fontWeight:'bold',
    color:'white',
    fontSize:'40px',
    position:'relative',
    maxHeight:60,

  },
    
})
)
export default function Browse() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.app}>
            <Toolbar>
            <Link to="/Browse/" className="browse">Home</Link>
            <Link to="/Browse/tv" className="browse">TV Shows</Link>
            <Link to="/Browse/movies" className="browse">Movies</Link>
            <Link to="/Browse/popular" className="browse">New {'&'} Popular</Link>
            <Link to="/Browse/myList" className="browse">My List</Link>
            
            <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.icons}><NotificationsIcon/></div>
          <div className={classes.icons}><TuneIcon/></div>
          <div className={classes.icons}><Avatar variant="square" alt="Avatar" src={Avatar1} /></div>
            </Toolbar>
            </AppBar>
          <div><img src={browse1} alt='browse1' className="browse1"/></div>
         



        <Card className={classes.cardTitle}>
        <Typography className={classes.title}>
          Hollywood Movies {'>'}
        </Typography><Data/>
        <TitleCard/>
        </Card>

      
      <Card className={classes.cardTitle}>
          <Typography className={classes.title}>
          Horror Movies {'>'}
          </Typography><Data/>
          <TitleCard/>
      </Card>
     
      


        <Card className={classes.cardTitle}>        
        <Typography className={classes.title}>
          Indian Movies {'>'}
        </Typography><Data/>
        <TitleCard/>
        </Card>

        <Card className={classes.cardTitle}>
        <Typography className={classes.title}>
          Comedy Movies {'>'}
        </Typography><Data/>
        <TitleCard/>
        </Card>

        </div>
    )
}
