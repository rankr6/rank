/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useSportDispatch } from '../../context/Sport/context';
import { useTeamDispatch } from '../../context/Team/context';
import { useUserPreferenceDispatch } from '../../context/Preference/context';
import { fetchSports } from '../../context/Sport/action';
import { fetchTeams } from '../../context/Team/action';
import { fetchUserPreference } from '../../context/Preference/action';
import UserPreferences from './UserPreference';


export default function UserPreference() {
    const sportsDispatch = useSportDispatch();
    const TeamsDispatch = useTeamDispatch();
    const userPreferencesDispatch = useUserPreferenceDispatch();
    useEffect(() => {
        fetchSports(sportsDispatch);
        fetchTeams(TeamsDispatch);

    }, []);

    useEffect(() => {
        fetchUserPreference(userPreferencesDispatch);
    }, []);
    return (
        <>

            <UserPreferences />
        </>
    );
}