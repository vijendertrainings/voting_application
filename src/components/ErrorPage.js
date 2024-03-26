import {useRouteError, userRouteError} from "react-router-dom";

const ErrorPage = ()=>{
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1>Oops! There is some issue.</h1>
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    );
}

export default ErrorPage;