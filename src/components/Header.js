import {Link} from "react-router-dom";

export const Title =  ()=>{
    return(
        <>
           <div className="w-40 h-25">
                <img className="w-20 h-20" src="https://marketplace.canva.com/EAFszdYJfvM/1/0/1600w/canva-brown-simple-icon-food-logo-2M8uaWgGUPg.jpg"></img>
            </div> 
        </>
    );
}

const Header=()=>{
    return (
        <div className="max-w-5xl mx-auto justify-between grid grid-cols-2 gap-3">
            <Title/>
            <div className="flex">
                <ul className="flex p-2 m-2">
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about"> About Us</Link></li>
                    <li className="px-4"><Link to="/contact"> Contact Us</Link></li>
                </ul>
            </div>
        </div>

    );

}

export default Header;