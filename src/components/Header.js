import {Link} from "react-router-dom";

export const Title =  ()=>{
    return(
        <>
           {/* <div className="w-40 h-25">
                <img className="w-20 h-20" src="https://marketplace.canva.com/EAFszdYJfvM/1/0/1600w/canva-brown-simple-icon-food-logo-2M8uaWgGUPg.jpg"></img>
            </div>  */}

            <div className="flex justify-center items-center h-screen">
                <div className="text-center">
                    <h2 className="text-4xl font-bold">Your Header</h2>
                </div>
            </div>
        </>
    );
}

const Header=()=>{
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                <h2 className="text-4xl font-bold">Your Header</h2>
            </div>
        </div>
    );

}

export default Header;