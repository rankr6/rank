import { Outlet } from "react-router-dom";
import { CommentProvider } from "../../context/Livescore/context";
import MatchDetails from "./MatchDetails";


const MatchDetailsContainer = () => {

    return (
        <>
            <CommentProvider>
                <MatchDetails />
                <Outlet />
            </CommentProvider>
        </>
    )


};

export default MatchDetailsContainer;