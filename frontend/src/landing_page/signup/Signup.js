import React from 'react';

import TextField from '@mui/material/TextField';


export default function Signup(){
    return(
        <div className='container p-5 mt-5'>
            <div className='row p-5'>
                <div className='col-7 mb-3'>
                     <img src='media/images/signup.png' style={{width:"80%"}}></img>
                </div>
                <div className='col-5 py-5'>
                <h2 className='mb-2'>Signup now</h2>
                <p className='text-muted mb-4'>Or track your existing application.</p>
                <TextField id="outlined-basic" label="Mobile Number" variant="outlined" />
               <p className='mt-3 text-muted' style={{fontSize:"13px"}}>You will receive an OTP on your number</p>
               <button className='btn btn-primary mb-2' style={{width:"25%",margin:"0 auto"}}>Continue</button>
               <br />
               <a href='' style={{textDecoration:"none",fontSize:"13px"}}>Want to open an NRI account?</a>
                </div>
                <p className='text-center text-muted' style={{fontSize:"13px"}}>I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN.<br /> Please visit <a href='' style={{textDecoration:"none"}}>this article</a> to know more.</p>
                <p className='text-center text-muted' style={{fontSize:"13px"}}>If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the <a href='' style={{textDecoration:"none"}}>offline forms</a>. For help, <a href='' style={{textDecoration:"none"}}>click here.</a></p>
            </div>
        </div>
    )
}