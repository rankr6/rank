import { useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useUserPreferenceDispatch, useUserPreferenceState } from "../../context/Preference/context";
import { UserPreferenceState } from "../../context/Preference/type";
import { fetchTeams, fetchSports, fetchUserPreferences, patchUserPreference } from "../../context/Preference/action";
import { useNavigate } from "react-router-dom";



const UserPreferences = () => {
    const [selectedSports, setSelectedSports] = useState<string[]>([]);
    const [selectedTeams, setSelectedTeams] = useState<string[]>([]);
    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();
    const state: UserPreferenceState = useUserPreferenceState();
    const userPreferenceDispatch = useUserPreferenceDispatch();
    const {
        isLoading,
        isError,
        errorMessage,
        sports,
        teams,
    } = state;

    useEffect(() => {
        fetchUserPreferences(userPreferenceDispatch)
            .then((data) => {
                const { sports, teams } = data.preferences;
                setSelectedSports(sports);
                setSelectedTeams(teams);
            });
        fetchSports(userPreferenceDispatch);
        fetchTeams(userPreferenceDispatch);
    }, [userPreferenceDispatch]);

    function closeModal() {
        setIsOpen(false);
        navigate("/");
    }

    if (isLoading) {
        return <div className="text-left p-4">Loading...</div>;
    }

    if (isError) {
        return <div className="text-left p-4">{errorMessage}</div>;
    }

    const sportsDataList = sports || [];
    const teamsDataList = teams || [];

    const handleSportChange = (sport: string) => {
        setSelectedSports((prevSelectedSports) => {
            if (!prevSelectedSports) {
                return [sport];
            }
            if (prevSelectedSports.includes(sport)) {
                return prevSelectedSports.filter((item) => item !== sport);
            } else {
                return [...prevSelectedSports, sport];
            }
        });
    }

    const handleTeamChange = (team: string) => {
        setSelectedTeams((prevSelectedTeams) => {
            if (!prevSelectedTeams) {
                return [team];
            }
            if (prevSelectedTeams.includes(team)) {
                return prevSelectedTeams.filter((item) => item !== team);
            } else {
                return [...prevSelectedTeams, team];
            }
        });
    }

    const handleSavePreferences = () => {
        patchUserPreference(userPreferenceDispatch, selectedSports, selectedTeams);
        console.log('Preferences saved successfully');
        console.log(selectedSports); // Move console.log here
        console.log(selectedTeams);  // Move console.log here
        closeModal();
    };

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="flex items-center justify-center min-h-full text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black/25" />
                        </Transition.Child>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-xl font-medium leading-6 text-gray-900"
                                >
                                    User Preferences
                                </Dialog.Title>
                                <div className="mt-4">
                                    <label><b>Choose your favorite sports:</b></label>
                                    <div className="space-y-2">
                                        {sportsDataList.map((sport) => (
                                            <label key={sport.id} className="inline-flex items-center">
                                                {selectedSports && selectedSports.includes(sport.id) ? (
                                                <input
                                                    type="checkbox"
                                                    className="form-checkbox text-blue-500"
                                                    value={sport.name}
                                                    checked={selectedSports.includes(sport.id)}
                                                    onChange={() => handleSportChange(sport.id)}
                                                />
                                                ) : <input
                                                type="checkbox"
                                                className="form-checkbox text-blue-500"
                                                value={sport.name}
                                                onChange={() => handleSportChange(sport.id)}
                                            />}
                                                <span className="ml-2 mr-4">{sport.name}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-7">
                                    <label><b>Choose your favorite teams:</b></label>
                                    <div className="space-y-2">
                                        {teamsDataList.map((team) => (
                                            <label key={team.id} className="inline-flex items-center">
                                                {selectedTeams && selectedTeams.includes(team.id) ? (
                                                <input
                                                    type="checkbox"
                                                    className="form-checkbox text-blue-500"
                                                    value={team.name}
                                                    checked={selectedTeams.includes(team.id)}
                                                    onChange={() => handleTeamChange(team.id)}
                                                />
                                                ) : <input
                                                type="checkbox"
                                                className="form-checkbox text-blue-500"
                                                value={team.name}
                                                onChange={() => handleTeamChange(team.id)}
                                            />}
                                                <span className="ml-2 mr-4">{team.name}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        onClick={handleSavePreferences}
                                    >
                                        Save Preferences
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default UserPreferences;
