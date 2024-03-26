import pic1 from "../assets/pics/MaskGroup1.jpg"
import pic2 from "../assets/pics/MaskGroup2.png"
import pic3 from "../assets/pics/MaskGroup3.png"
export default function BrowseTheRange(){


    return(
        <div className="Range-div">
            <h1>Browse The Range</h1>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
            <div className="imgs-div">
                <span className="img-span"><a href="#"><img src={pic1}/></a></span>
                <span className="img-span"><a href="#"><img src={pic2}/></a></span>
                <span className="img-span"><a href="#"><img src={pic3}/></a></span>
            </div>
        </div>
    )
}