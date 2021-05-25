import Sign from "./sign";
import SocialBtn from "./socialbtn"


const imgCard = (props) =>{
    return(
        <div className={"profilephoto " + props.view}>
            <Sign />
            <SocialBtn />
        </div>
    )
}

export default imgCard;