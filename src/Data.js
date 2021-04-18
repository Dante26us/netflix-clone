import St from "./Images/titlecardimages/StrangerThings.jpeg";
import D from "./Images/titlecardimages/Dark.png";
import BB from "./Images/titlecardimages/BreakingBad.jpg";
import DM from "./Images/titlecardimages/DevilMan.jpg";
import EC from "./Images/titlecardimages/ElCamino.jpg";
import H from "./Images/titlecardimages/Her.jpg";
import MH from "./Images/titlecardimages/MindHunter.jpg";
import SB from "./Images/titlecardimages/Sabrina.png";
import SK from "./Images/titlecardimages/SaikiK.jpg";
import Y from "./Images/titlecardimages/You.jpg";
import React from 'react';
import TitleCard from "./components/TitleCard";
function Data() {
    const datas=[
        {
            id:1,
            image:{St},
            title:'Stranger Things',
           
        },
        {
            id:2,
            image:{D},
            title:'Dark',
          
        },
        {
            id:3,
            image:{BB},
            title:'Breaking Bad',
        
        },
        {
            id:4,
            image:{DM},
            title:'DevilMan Crybaby',
     
        },
        {
            id:5,
            image:{EC},
            title:'El Camino',
        
        },
        {
            id:6,
            image:{H},
            title:'Her',
         
        },
        {
            id:7,
            image:{MH},
            title:'Mindhunter',
    
        },
        {
            id:8,
            image:{SB},
            title:'The chilling adventures of Sabrina',
          
        },
        {
            id:9,
            image:{SK},
            title:'Saiki K',
        
        },
        {
            id:10,
            image:{Y},
            title:'You',
        
        }
    ]
    return (
            <TitleCard data={datas}/>
    );
}

export default Data;
