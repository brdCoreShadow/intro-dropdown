import * as SC from "./HomeStyled"

import Hero from "@/components/Hero/Hero";
import Partners from "@/components/Partners/Partners";

const Home = () => {
    return ( 
        <SC.HomeCon>
            <Hero/>
            <Partners/>
        </SC.HomeCon>
     );
}
 
export default Home;