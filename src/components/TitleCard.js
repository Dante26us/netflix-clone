import React,{useState,useEffect} from 'react';
import {Card, CardActionArea, CardMedia, CardActions,Button}from '@material-ui/core';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import {makeStyles } from '@material-ui/core/styles';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import AddIcon from '@material-ui/icons/Add';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Player from './Player';
import history from '../history';

const useStyles = makeStyles((theme) => ({
    line:{
        margin:'2px',
        
      },
      root1: {
        minWidth:300,
        maxWidth:300,
        maxHeight:220,
        marginLeft:'4px',
        transition: 'transform .5s',
        padding:'0px',
        boxShadow: '4px 4px 4px black',
        border:'0px',
        '&:hover ': {
          transform:'scale(1.5)translateX(16%)',
          border:'0px',
          margin:'0px',
          zIndex:'2',
          position:'relative',


          '& $details':{
            display:'block',
            transition: 'transform .5s',
            padding:'0px',
            backgroundColor:'#141414',
            border:'0px',
            },
       },
      },
      details:{
        display:'none',
        padding:'0px',
        
      }, 
      buttons:{
        color:'white',
        maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px',
        display:'inline-flex',
       
      }, 
      buttons1:{
        color:'white',
        maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px',
        display:'inline-flex',
        paddingLeft:'130px',
      
      },
      media: {
        width:'100%',
        height:'160px',
        padding:'0px',
        border:'0px',
        },

})
)
function TitleCard(props) {
    const classes = useStyles();
    const [state,setState]=useState(0);
  
    const datas=props.data;
    const tag=String(props.tag);

  useEffect(() => {
    if (datas){
      
      const fetch=datas.map(u=>{
        const temp=[u.tags].filter(y=>y.includes(tag)? true:null )
        if(temp.length >0){
              return(
                <div className={classes.line} key={u.id} >
                <Card className={classes.root1}>
                <CardActionArea onClick={() => history.push({pathname:'/Player',state:{detail:u.url}})}>
                <CardMedia
                className={classes.media}
                image={u.image}
                title={u.title}
                
              />
              </CardActionArea>
              <CardActions className={classes.details}>
              <Button className={classes.buttons} onClick={() => history.push({pathname:'/Player',state:{detail:u.url}})}>
              <PlayCircleFilledIcon/>
              </Button>
              <Button className={classes.buttons}>
              <AddIcon/>
              </Button>
              <Button className={classes.buttons}>
              <ThumbUpAltIcon/>
              </Button>
              <Button className={classes.buttons}>
              <ThumbDownIcon/>
              </Button>
              <Button className={classes.buttons1}>
              <KeyboardArrowDownIcon/>
              </Button>
              </CardActions>
            </Card></div>
          )  
        }
      })
      setState([
        fetch
      ])
  }
    }, [])
    return (<>
     {state}
    </>
    );

}
export default TitleCard;