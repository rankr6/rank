/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react';
import { Listbox } from '@headlessui/react';
import { useUserPreferenceDispatch } from '../../context/Preference/context';
import { fetchUserPreference } from '../../context/Preference/action';
import { useNewsArticleState } from '../../context/NewsArticles/context';
import { NewsArticleDetailState } from '../../context/NewsArticles/type';
import { Link } from 'react-router-dom';

const FavoriteSportAndTeam = () => {
  const state: NewsArticleDetailState = useNewsArticleState();
  const { newsArticleDetails } = state;
  const [userPreferences, setUserPreferences] = useState({ sports: [], teams: [] });
  const [sportSelected, setSportSelected] = useState(null);
  const [teamSelected, setTeamSelected] = useState(null);
  const dispatch = useUserPreferenceDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchUserPreference(dispatch);
        setUserPreferences(data.preferences);
        console.log('User preferences updated:', data.preferences);
        // Set sportSelected and teamSelected based on user preferences
        setSportSelected(null);
        setTeamSelected(null);
      } catch (error) {
        console.error('Error fetching user preferences:', error);
      }
    }

    fetchData();
  }, [dispatch]);

  const sportsData = userPreferences.sports || [];
  const teamsData = userPreferences.teams || [];



  const sportName = {
    1: "Basketball",
    2: "American Football",
    3: "Rugby",
    4: "Field Hockey",
    5: "Table Tennis",
    6: "Cricket"
  }

  const teamName = {
    1: "Thunderbolts",
    2: "Dragonslayers",
    3: "Phoenix Rising",
    4: "Avalanche",
    5: "Titans",
    6: "Vortex Vipers",
    7: "Spectral Shadows",
    8: "Blitzkrieg",
    9: "Fury United",
    10: "Lightning Strikes",
    11: "Serpents of Fire",
    12: "Galaxy Warriors",
    13: "Stormbreakers",
    14: "Enigma Enforcers",
    15: "Blaze Squadron",
    16: "Phantom Phantoms",
    17: "Celestial Chargers",
    18: "Rebel Renegades",
    19: "Inferno Ignitors",
    20: "Stealth Strikers",
    21: "Nova Knights",
    22: "Crimson Crushers",
    23: "Rapid Raptors",
    24: "Shadow Assassins",
  }

  

  return (
    <>
      <Listbox value={sportSelected} onChange={setSportSelected}>
        <div className="relative mt-1 mb-5" style={{ zIndex: 100 }}>
          <Listbox.Button
            className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
          >
            <span className="block truncate">{sportSelected ? sportName[sportSelected] : 'Select Sport'}</span>
            
          </Listbox.Button>

          <Listbox.Options
            className="absolute mt-1 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
          >
            <Listbox.Option
              key={-1}
              className={({ active }) =>
                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'}`
              }
              value={null}
            >
              {({ selected }) => (
                <>
                  <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                    All Sports
                  </span>
                  {selected ? (
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                    </span>
                  ) : null}
                </>
              )}
            </Listbox.Option>
            {sportsData.map((sport, index) => (
              <Listbox.Option
                key={index}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'}`
                }
                value={sport}
              >
                {({ selected }) => (
                  <>
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                      {sportName[sport]}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>

      <Listbox value={teamSelected} onChange={setTeamSelected}>
        <div className="relative mt-1 mb-8">
          <Listbox.Button
            className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
          >
            <span className="block truncate">{teamSelected ? teamName[teamSelected] : 'Select Team'}</span>
           
          </Listbox.Button>
          <Listbox.Options
            className="absolute mt-1 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
          >
            <Listbox.Option
              key={-1}
              className={({ active }) =>
                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'}`
              }
              value={null}
            >
              {({ selected }) => (
                <>
                  <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                    All Teams
                  </span>
                  
                </>
              )}
            </Listbox.Option>
            {teamsData.map((team, teamIdx) => (
              <Listbox.Option
                key={teamIdx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'}`
                }
                value={team}
              >
                {({ selected }) => (
                  <>
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                      {teamName[team]}
                    </span>
                    
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>

      </Listbox>
      {newsArticleDetails
        .filter((article) =>
          (sportSelected === null || article.sport.id === sportSelected) &&
          (!teamSelected || article.teams.some((team) => team.id === teamSelected))
        )
        .map((article: any) => (
          <div key={article.id} className="news-article">
            <div className="article-content">
              <h2>{article.title}</h2>
              <p>{article.summary}</p>
              <p>{article.date}</p>
              <Link to={`/articles/${article.id}`} className="block mt-4 text-blue-600 hover:underline">
                Read more...
              </Link>
            </div>
            <div className="article-image">
              <div style={{ paddingBottom: "100%" }}>
                <img src={article.thumbnail} alt="Article Thumbnail" />
              </div>
            </div>
          </div>
        ))}

    </>
  );
}

export default FavoriteSportAndTeam;
