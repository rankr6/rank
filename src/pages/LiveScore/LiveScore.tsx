import { useEffect } from "react";
import { useMatchDispatch, useMatchState } from "../../context/Livescore/context";
import { fetchMatches } from "../../context/Livescore/action";
import { Link } from "react-router-dom";

const MatchList = () => {
  const state = useMatchState();
  const { matchScores, isLoading, isError, errorMessage } = state;
  const matches = useMatchDispatch();

  useEffect(() => {
    fetchMatches(matches);
  }, [matches]);


  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }
  return (
    <>
      <h1 className="text-left font-bold text-3xl text-black p-2">Live Score</h1>
      <div className="overflow-x-auto">
        <div className="flex space-x-4">
          {matchScores.map((match) => (
            <div
              key={match.id}
              className="comment flex-shrink-0 p-2 w-fit h-fit scrollbar text-black bg-white border border-gray-200 rounded-lg shadow hover-bg-gray-100 dark-bg-gray-800 dark-border-gray-700 dark-hover-bg-gray-700"
            >
              <div className="grid grid-rows-1 gap-2 grid-cols-2">
                <div className="text-left font-bold">
                  {match.sportName}
                </div>
                <div>
                  <div className="flex items-center justify-end">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="23" height="23" viewBox="0 0 30 30">
                      <path d="M 15 3 C 12.031398 3 9.3028202 4.0834384 7.2070312 5.875 A 1.0001 1.0001 0 1 0 8.5058594 7.3945312 C 10.25407 5.9000929 12.516602 5 15 5 C 20.19656 5 24.450989 8.9379267 24.951172 14 L 22 14 L 26 20 L 30 14 L 26.949219 14 C 26.437925 7.8516588 21.277839 3 15 3 z M 4 10 L 0 16 L 3.0507812 16 C 3.562075 22.148341 8.7221607 27 15 27 C 17.968602 27 20.69718 25.916562 22.792969 24.125 A 1.0001 1.0001 0 1 0 21.494141 22.605469 C 19.74593 24.099907 17.483398 25 15 25 C 9.80344 25 5.5490109 21.062074 5.0488281 16 L 8 16 L 4 10 z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <Link to={`/matches/${match.id}`}>
                <div className="grid grid-rows-1 gap-2 grid-cols-2 w-fit h-fit">
                  <div className="text-left">
                    {match.teams.map((team) => (
                      <div key={team.id}>
                        {team.name}
                      </div>
                    ))}
                  </div>
                  <div className="text-right font-bold text-green-700">
                    {match.isRunning ? "Live" : "Match Finished"}
                  </div>
                  <div className="text-left">
                  </div>
                  <div className="text-left">
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MatchList;
