import React from "react";
import OpenAccount from '../OpenAccount';
import Brokerage from "./Brokerage";
import HeroPricing from "./HeroPricing";
import Calculator from "./Calculator";
export default function Hero(){
    return(
        <>
           <HeroPricing />
           <Brokerage />
           <OpenAccount />
          <Calculator />
        </>
    )
}