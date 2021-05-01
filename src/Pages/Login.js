import React,{useState} from 'react';
import StartPage1 from "../Images/StartPage1.jpg"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import history from '../history';
import FacebookIcon from '@material-ui/icons/Facebook';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
async function loginUser(credentials) {
    return fetch('http://localhost:8080/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }
const useStyles = makeStyles({
    root: {
      position:'absolute',  
      maxWidth: 400,
      minHeight:400,
      backgroundColor: "black",
      margin:'10px',
      top:'100px',
      left:'30%',
      opacity:'85%',
      padding:'50px',
    
     
    },
    title: {
    fontWeight:'bold',
    color:'white',
    position:'relative',
    fontSize:'40px',
    display:'inline-flex',
    },
    info: {
    fontSize: 14,
    color:'white',
    position:'relative',
    marginTop:'20px',
    display:'flex',
    opacity:'100%',
    backgroundColor:'white',
    borderRadius:'4px',
    minWidth:'300px',

    },
    button:{
        backgroundColor:'#e50914',
        display:'flex',
        fontSize:'24px',
        position:'relative',
        minWidth:'370px',
        marginTop:'40px',
        '&:hover': {
      backgroundColor:'#e50914' ,
    },
    },
    
})
function Login({ setToken }) {
    const classes = useStyles();
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [state, setState] = React.useState({
    checked: true
    });
    const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    };
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
      }    
    

    
    return (
        <div className="background">
            <img src={StartPage1} alt='StartPage1' className="StartPage1"/>
            <Card className={classes.root} variant="outlined">
            <CardContent >
            <Typography className={classes.title}>
            Sign In
            </Typography>
            <TextField className={classes.info} id="email" label="Email or Phone number" variant="filled" onChange={e => setUserName(e.target.value)} />
            <TextField className={classes.info} id="password" label="Password" variant="filled" type="password" onChange={e => setPassword(e.target.value)} />
            <Button variant="contained" className={classes.button} color="secondary" onClick={() => history.push('/Browse')}>
            Sign In
            </Button>
            <div className="div">
            <input type="checkbox" className="checkbox" id="remember" name="remember" value={handleChange}/>
            <label className="label1">Remember Me</label>
            <Link to="/LoginAbout" className="link1">Need Help?</Link></div>
            <div className="div1"><FacebookIcon color="primary" /><Link to="/facebook" className="link2">Login with Facebook</Link></div>
            <div className='div2'><label className="label2">New to Netflix?<Link to="/" className="link1">Sign up Now</Link></label></div>
            <div className='div2'><label className="label3">This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</label></div>
            </CardContent>
            </Card>    
        </div>
    );
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }

export default Login;