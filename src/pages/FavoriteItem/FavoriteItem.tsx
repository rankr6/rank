/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import { useNewsArticleState } from '../../context/NewsArticles/context';
import { useUserPreferenceState } from '../../context/Preference/context';

interface Sport {
  id: string;
  name: string;
}

interface Team {
  id: string;
  name: string;
  plays: string;
}

export default function FavouriteListArticles() {
  const newsArticleState = useNewsArticleState();
  const { preferences } = useUserPreferenceState();
  let sportsData: string[] = [];
  let teamsData: Team[] = [];

  if (preferences && preferences.length > 0) {
    const userPreference = preferences[0];
    if (userPreference) {
      const { sports, teams } = userPreference;
      sportsData = sports;
      teamsData = teams;
    }
  }

  const sportListData = useUserPreferenceState().sports;

  console.log(preferences[0]);

  let filteredArticles = newsArticleState.newsArticleDetails;

  if (newsArticleState.isLoading) {
    return <span>Loading...</span>;
  }

  const [sportSelected, setSportSelected] = useState<Sport | null>(null);
  const [teamSelected, setTeamSelected] = useState<Team | null>(null);

  if (newsArticleState.isError) {
    return <span>Error Occurred</span>;
  }

  if (sportsData && sportsData.length > 0) {
    const sportNames = sportsData.map((id) => {
      const sport = sportListData.find((sport) => sport.id === id);
      return sport ? sport.name : null;
    });

    sportsData = sportNames as string[];
  }

  if (teamSelected && teamSelected.name) {
    filteredArticles = filteredArticles.filter((article) => {
      return article.teams.some((team) => team.name === teamSelected.name);
    });
  }

  return (
    <>
      <Listbox value={sportSelected} onChange={setSportSelected}>
        <div className="relative mt-1 mb-5" style={{ zIndex: 100 }}>
          <Listbox.Button
            className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
          >
            <span className="block truncate">{sportSelected ? sportSelected.name : 'Select Sport'}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
            <Listbox.Options
              className="absolute mt-1 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
            >
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
                        {sport}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      <Listbox value={teamSelected} onChange={setTeamSelected}>
        <div className="relative mt-1 mb-8">
          <Listbox.Button
            className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
          >
            <span className="block truncate">{teamSelected ? teamSelected.name : 'Select Team'}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
            <Listbox.Options
              className="absolute mt-1 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
            >
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
                        {team.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>

      {filteredArticles.slice(0, 10).map((article: any) => (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-5" key={article.id}>
          <div className="flex">
            <div className="p-4">
              <h2 className="text-md font-semibold">{article.title}</h2>
              <p className="text-sm">{article.summary}</p>
              <Link to={`/articles/${article.id}`}>
                <button id="taskDetailBtn" className="text-blue-500 underline">
                  Read more
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
