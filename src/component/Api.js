
import React, { useState } from "react";
import './offer.css';
function App() {
    const [img,setImg] = useState(0);
    let key ="728fd0563d645e718bd680ffb5051780";
    let id ="875a9bb0";
    let url = `https://api.edamam.com/search?q=Cake&app_id=${id}&count=20&app_key=${key}`;
    fetch(url)
       .then(response=> response.json())
       .then(content =>{
           console.log(content);
           console.log("META",content.meta);
           const imgSrc=content.hits[3].recipe.image;
           setImg(imgSrc);

       })
       .catch(err =>{
           console.error(err);

       });

    
    
  return (
    <div >
        <img src={img} className="test" alt=""></img>
      
      
    </div>
  );
}

export default App;
