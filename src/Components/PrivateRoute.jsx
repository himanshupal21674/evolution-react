import React from "react";
import {Route, Redirect} from "react-router-dom";


function PrivateRoute({ Component:Component, ...rest}) {
    return(
        <Route{...rest}
         render={pros => //Here you can add your authentication true? 
    (<Redirect to="/Login"/>)
}
/>
    );
}

export default PrivateRoute;
