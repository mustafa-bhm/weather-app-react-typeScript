import { ChangeEvent } from "react";
import { optionType } from "./types";
type Props = {
  term: string;
  options: [];
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onOptionSelect: (option: optionType) => void;
  onSubmit: () => void;
};

const Search = ({
  term,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
}: Props): JSX.Element => {
  return (
    <main className="flex justify-center items-center  h-[100vh] w-full bg-gradient-to-r from-cyan-300 via-sky-400 to-sky-400">
      <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg text-zinc-700">
        <h1 className="text-4x1 font-black"> Weather App</h1>
        <p>Please enter your city name </p>
        <div className=" relative flex mt-7  gap-0.5">
          <input
            type="text"
            value={term}
            onChange={onInputChange}
            className="px-2 py-1 rounded border-2 border-white"
          />
          <ul className="absolute top-9 bg-white ml-1 rounded">
            {options.map((option: optionType, index: number) => (
              <li key={option.name + "-" + index}>
                <button
                  className="text-left text-sm w-full px-2 py-1 cursor-pointer hover:bg-gray-700 hover:text-white"
                  onClick={() => onOptionSelect(option)}
                >
                  {option.name}, {option.country}
                </button>
              </li>
            ))}
          </ul>
          <button
            className="rounded border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500  text-zinc-100 px-2 py-1 cursor-pointer"
            onClick={onSubmit}
          >
            search
          </button>
        </div>
      </section>
    </main>
  );
};

export default Search;
