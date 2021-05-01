import React from 'react';
import StartPage1 from '../Images/StartPage1.jpg'
import StartPage2 from '../Images/StartPage2.jpg'
import StartPage3 from '../Images/StartPage3.jpg'
import StartPage4 from '../Images/StartPage4.jpg'
import Login from './Login';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import history from '../history';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      minHeight:400,
      backgroundColor: "black",
      margin:'10px',
      marginLeft:"10%",
    },
    title: {
    color:'white',
    position:'relative',
    fontSize:'50px',
    paddingTop:'10%',
    paddingRight:'50%',
    display:'inline-flex',
    },
    info: {
    color:'white',
    position:'relative',
    fontSize:'25px',
    paddingTop:'0%',
    paddingRight:'50%',
    display:'inline-flex',
    },
    title1: {
        
        color:'white',
        position:'relative',
        fontSize:'50px',
        paddingTop:'10%',
        left:'50%',
        right:'20%',
        display:'flex',
        },
        
    info1: {
        color:'white',
        position:'relative',
        fontSize:'25px',
        top: '65%',
        left:'50%',
        right:'20%', 
        display:'flex',
        },
    title2: {
            color:'white',
            position:'relative',
            fontSize:'50px',
            top: '30%',
            left:'30%',
            right:'30%',
            display:'flex',
            },
    ac:{
        backgroundColor:"#303030",
        width:"800px",
        left:'25%',
    },
    acc: {
        fontSize:30,
        color:'white',
        
    },
    accdet:{
        fontSize:26,
        color:'white',
        textAlign:'left',
    }
  });
  function setToken(userToken) {
    sessionStorage.setItem('token', JSON.stringify(userToken));
  }
  
  function getToken() {
    const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
  }
function StartPage() {
    const classes = useStyles();
    const token = getToken();
  if(!token) {
    return <Login setToken={setToken} />
  }

    return (
        <div className="main">
        <div className="background">
        <img src={StartPage1} alt='StartPage1' className="StartPage1"/>
        <div className="tile">
        <button className="Login" onClick={() => history.push('/Login')}>Sign In</button>
        <h1 className="h1">Unlimited movies, TV<br/> shows and more.</h1>
        <h3 className="h3">Watch anywhere. Cancel anytime.</h3>
        <h4 className="h4">Ready to watch? Enter your email to create or restart your membership</h4>
        <input
            className="input"
            name="email"
            type="text"
            placeholder="Email address"
            id="email"
            />
            <button className="emailb">Get Started {'>'}</button></div>
        </div>
        <div className="background">
        <Card className={classes.root} variant="outlined">
        <CardContent >
        <Typography className={classes.title}>
        Enjoy on your TV.
        </Typography>
        <Typography className={classes.info}>
        Watch on smart TVs, PlayStation, Xbox,<br/> Chromecast,Apple TV, Blu-ray players and more.
        </Typography>
        <img src={StartPage2} alt='StartPage2' className="StartPage2"/>
        </CardContent>
        </Card>
        </div>
        <div className="background">
        <Card className={classes.root} variant="outlined">
        <CardContent >
        <Typography className={classes.title1}>
        Download your shows <br/>to watch offline.
        </Typography>
        <Typography className={classes.info1}>
        Save your favourites easily <br/>and always have something to watch.
        </Typography>
        <img src={StartPage3} alt='StartPage3' className="StartPage3"/>
        </CardContent>
        </Card>
        </div>
        <div className="background">
        <Card className={classes.root} variant="outlined">
        <CardContent >
        <Typography className={classes.title}>
        Watch everywhere.
        </Typography>
        <Typography className={classes.info}>
        Stream unlimited movies and TV shows<br/> on your phone, tablet, laptop, and TV.
        </Typography>
        <img src={StartPage4} alt='StartPage4' className="StartPage2"/>
        </CardContent>
        </Card>
        </div>
        <div className="background">
        <Card className={classes.root} variant="outlined">
        <CardContent >
        <Typography className={classes.title2}>
        Frequently Asked Questions
        </Typography>
        <Accordion className={classes.ac}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.acc}>What is Netflix?</Typography>
        </AccordionSummary>
        <AccordionDetails >
        <Typography className={classes.accdet}>
        Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, 
        anime, documentaries and more – on thousands of internet-connected devices.
        <br/><br/>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly
        price. There's always something new to discover, and new TV shows and movies are added every week!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.ac}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.acc}>How much does Netflix cost?</Typography>
        </AccordionSummary>
        <AccordionDetails >
        <Typography className={classes.accdet}>
        Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, 
        all for one fixed monthly fee. Plans range from ₹ 199 to ₹ 799 a month. No 
        extra costs, no contracts.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.ac}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.acc}>Where can I watch?</Typography>
        </AccordionSummary>
        <AccordionDetails >
        <Typography className={classes.accdet}>
        Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web
         at netflix.com from your personal computer or on any internet-connected device
          that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
        <br/><br/>You can also download your favourite shows with the iOS, Android, or Windows
         10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.ac}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.acc}>How do I cancel?</Typography>
        </AccordionSummary>
        <AccordionDetails >
        <Typography className={classes.accdet}>
        Netflix is flexible. There are no annoying contracts and no commitments. You can 
        easily cancel your account online in two clicks. There are no cancellation fees 
        – start or stop your account anytime.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.ac}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.acc}>What can I watch on Netflix?</Typography>
        </AccordionSummary>
        <AccordionDetails >
        <Typography className={classes.accdet}>
        Netflix has an extensive library of feature films, documentaries, TV shows, anime, 
        award-winning Netflix originals, and more. Watch as much as you want, 
        anytime you want.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </CardContent>
        </Card>

        </div>
        </div>
    );
}

export default StartPage;