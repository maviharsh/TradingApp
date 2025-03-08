import React from 'react';

export default function LeftSection({heading,image,para}){
    return(
        <div className='container px-5 pb-5'>
          <div className='row'>
            <div className='col-8 p-5'>
                 <img src={image} style={{width:"80%",height:"90%"}}></img>     
            </div>
            <div className='col-4 p-5 mt-5'>
                <h2 className='mb-4 mt-5'>{heading}</h2>
                <p className='mb-4' style={{fontSize:"17px"}}>{para}</p>
                <span><img src='media/images/googlePlayBadge.svg'></img><img src='media/images/appstoreBadge.svg'></img></span>
            </div>
          </div>
          </div>

    )
}