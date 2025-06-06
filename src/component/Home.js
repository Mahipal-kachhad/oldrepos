import HomeHero from './home/HomeHero.js';
import HappyClient from './home/HappyClient.js';
import Need from './home/Need.js';
import HowItWorks from './home/HowItWorks.js';
import WhyChooseUs from './home/WhyChooseUs.js';
import BigImage from './home/BigImage.js';
import Featured from './home/Featured.js'
import HomePrise from './home/HomePrise.js';


function Home(){
    return (
        <>
            <HomeHero/>
            <HappyClient/>
            <Need/>
            <Featured/>
            <HomePrise/>
            <HowItWorks/>
            <WhyChooseUs/>
            <BigImage/>
        </>
    );
};

export default Home;