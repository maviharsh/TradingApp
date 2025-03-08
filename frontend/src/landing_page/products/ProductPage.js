import React from "react";
import OpenAccount from '../OpenAccount';
import HeroProducts from "./HeroProducts";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

export default function AboutPage(){

    return(
        <>
            <HeroProducts />
            <LeftSection heading="Kite" para="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." image="media/images/kite.png" />
            <RightSection heading="Console" para="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." link="Learn more ->" image="media/images/console.png" />
            <LeftSection heading="Coin" para="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." image="media/images/coin.png" />
            <RightSection heading="Kite Connect API" para="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." link="Kite Connect ->" image="media/images/kiteconnect.png" />
            <LeftSection heading="Varsity mobile" para="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." image="media/images/varsity.png" />
            <Universe />
        </>
    )
}