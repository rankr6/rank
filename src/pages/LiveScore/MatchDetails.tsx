/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
// import { MatchScoreState } from "../../context/Livescore/type";
// import { useMatchState } from "../../context/Livescore/context";
import { useNavigate, useParams } from "react-router-dom";
import { MatchScoreState, Team } from "../../context/Livescore/type";
import { useMatchDispatch, useMatchState } from "../../context/Livescore/context";
import { fetchMatcheDetails } from "../../context/Livescore/action";
// import { MatchDetailState } from "../../context/MatchDetail/type";
// import { useMatchDetailState } from "../../context/MatchDetail/context";

const MatchDetails = () => {
    let navigate = useNavigate();
    
    let [isOpen, setIsOpen] = useState(true);
    const state: MatchScoreState = useMatchState();
    // const state1: MatchDetailState = useMatchDetailState();
    const {  matchDetails } = state;
    // const { matchDetails } = state1;
    const { matchID } = useParams();
    const matches = useMatchDispatch();
    console.log(matchID);
    const selectedMatch = matchDetails;
    console.log(selectedMatch);
    function closeModal() {
        setIsOpen(false);
        navigate("/");
    }
    useEffect(() => {
        if (matchID) {
            fetchMatcheDetails(matches, matchID);
        }
    }, [matchID, matches]);
    
    // const selectedMatch = matchScores.find((matchScore) => `${matchScore.id}` === matchID);
    
    // const selectedMatchDetail = matchDetails.find((matchDetail) => matchDetail.matchID === matchID )

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Match Details
                                    </Dialog.Title>
                                    <div className="mt-2 text-black">
                                        {selectedMatch ? (
                                            <>
                                                <p>{selectedMatch.sportName}</p>
                                                <p>{selectedMatch.name}</p>
                                                <p>{selectedMatch.location}</p>
                                                <div>
                                                    {/* Display scores for each team */}
                                                    {selectedMatch.teams.map((team: Team) => (
                                                        <p key={team.id}>
                                                            {team.name}: {selectedMatch.score[team.name]}
                                                        </p>
                                                    ))}
                                                </div>
                                            </>
                                        ) : (
                                            <p>Match not found.</p>
                                        )}
                                    </div>
                                    <button
                                        onClick={closeModal}
                                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    >
                                        Close
                                    </button>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default MatchDetails;



