import { Outlet } from "react-router-dom";
import MatchDetails from "./MatchDetails";


const MatchDetailsContainer = () => {

    return (
        <>
                <MatchDetails />
                <Outlet/>
        </>
    )


};

export default MatchDetailsContainer;