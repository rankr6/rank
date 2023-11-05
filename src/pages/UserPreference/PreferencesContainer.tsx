import { Outlet } from "react-router-dom";
import { PreferenceProvider } from "../../context/Preference/context";
import UserPreferences from "./UserPreference";


const UserPreferenceContainer = () => {

    return (
        <>
             <PreferenceProvider>
                <UserPreferences />
                <Outlet/>
             </PreferenceProvider>
        </>
    )


};

export default UserPreferenceContainer;