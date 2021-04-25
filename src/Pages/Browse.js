import React from 'react';
import St from "../Images/titlecardimages/StrangerThings.jpeg";
import D from "../Images/titlecardimages/Dark.png";
import BB from "../Images/titlecardimages/BreakingBad.jpg";
import DM from "../Images/titlecardimages/DevilMan.jpg";
import EC from "../Images/titlecardimages/ElCamino.jpg";
import H from "../Images/titlecardimages/Her.jpg";
import MH from "../Images/titlecardimages/MindHunter.jpg";
import SB from "../Images/titlecardimages/Sabrina.png";
import SK from "../Images/titlecardimages/SaikiK.jpg";
import Y from "../Images/titlecardimages/You.jpg";
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
import Data from '../Data';
import TitleCard from "../components/TitleCard";
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
  tiles:{
    display:'inline-flex',
    zIndex:'1',
  
    
  }
   
})
)
export default function Browse() {
    const classes = useStyles();
    const datas=[
      {
          id:1,
          image:St,
          title:'Stranger Things',
          tags:['Hollywood','Horror'],
          url:'https://www.youtube.com/watch?v=mnd7sFt5c3A',
      },
      {
          id:2,
          image:D,
          title:'Dark',
          tags:['Sci-fi','Horror'],
          url:'https://www.youtube.com/watch?v=rrwycJ08PSA',
      },
      {
          id:3,
          image:BB,
          title:'Breaking Bad',
          tags:['Hollywood'],
          url:'https://www.youtube.com/watch?v=HhesaQXLuRY',
      },
      {
          id:4,
          image:DM,
          title:'DevilMan Crybaby',
          tags:['Anime','Horror'],
          url:'https://www.youtube.com/watch?v=ww06yGPM7Kc',
      },
      {
          id:5,
          image:EC,
          title:'El Camino',
          tags:['Hollywood','Movie'],
          url:'https://www.youtube.com/watch?v=1JLUn2DFW4w',
      },
      {
          id:6,
          image:H,
          title:'Her',
          tags:['Hollywood','Romance'],
          url:'https://www.youtube.com/watch?v=dJTU48_yghs',
      },
      {
          id:7,
          image:MH,
          title:'Mindhunter',
          tags:['Hollywood','Horror'],
          url:'https://www.youtube.com/watch?v=edaQ9XwLiXc',
      },
      {
          id:8,
          image:SB,
          title:'The chilling adventures of Sabrina',
          tags:['Hollywood','Horror'],
          url:'https://www.youtube.com/watch?v=gENO66DUgaQ',
      },
      {
          id:9,
          image:SK,
          title:'Saiki K',
          tags:['Anime'],
          url:'https://www.youtube.com/watch?v=sbw7QB6nrTc',
      },
      {
          id:10,
          image:Y,
          title:'You',
          tags:['Hollywood','Thriller'],
          url:'https://www.youtube.com/watch?v=ga1m0wjzscU',
      }
  ]

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
          Hollywood {'>'}
        </Typography><div className={classes.tiles}><TitleCard  tag='Hollywood' data={datas}/></div>
        </Card>
      
      <Card className={classes.cardTitle}>
          <Typography className={classes.title}>
          Horror {'>'}
          </Typography><div className={classes.tiles}>
          <TitleCard  tag='Horror' data={datas}/></div>
      </Card>
     
      <Card className={classes.cardTitle}>        
        <Typography className={classes.title}>
          Anime {'>'}
        </Typography><div className={classes.tiles}>
        <TitleCard  tag='Anime' data={datas}/></div>
      </Card>

      <Card className={classes.cardTitle}>
        <Typography className={classes.title}>
          Romance {'>'}
        </Typography><div className={classes.tiles}>
        <TitleCard  tag='Romance' data={datas}/></div>
      </Card>

        </div>
    )
}
