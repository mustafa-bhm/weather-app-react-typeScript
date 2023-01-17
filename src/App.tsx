import { useState, ChangeEvent, useEffect } from "react";
import { optionType } from "./components/types";

const App = (): JSX.Element => {
  const [term, setTerm] = useState<string>("");
  const [options, setoptions] = useState<[]>([]);
  const [city, setcity] = useState<optionType | null>(null);
  const getSearchOptions = (value: string) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=4&appid=${
        process.env.REACT_APP_API_KEY
      }`
    )
      .then((response) => response.json())
      .then((data) => setoptions(data));
  };
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setTerm(value);
    if (value === "") return;
    getSearchOptions(value);
  };

  const getForcast = (city: optionType) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => console.log({ data }));
  };

  const onSubmit = () => {
    if (!city) return;
    getForcast(city);
  };

  const onOptionSelect = (option: optionType) => {
    setcity(option);
  };

  useEffect(() => {
    if (city) {
      setTerm(city.name);
      setoptions([]);
    }
  }, [city]);
  return (
    <main className="flex justify-center items-center bg-gradient-to-r from-purple-200 via-teal-500 to-blue-400 h-[100vh] w-full">
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
                  {option.name}
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

export default App;
