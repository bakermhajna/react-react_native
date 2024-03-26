import NewArraivel from "./NewArraivel";
import BrowseTheRange from "./BrowseTheRange";

export default function content(){


    return(

        <>
        <section className="home">
            <div id="arr-div" style={{width:"500px",height:"330px"}}>
                <NewArraivel/>  
            </div>
            
        </section>
        <section className="Range">

        <div id="range-div" style={{width:"80%",margin: "0 auto"}}>
            <BrowseTheRange/>           
        </div>
        
        </section>
        
        </>
    );
};