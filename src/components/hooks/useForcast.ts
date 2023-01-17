import { useState, useEffect, ChangeEvent } from "react";
import { optionType } from "../types";
import { forcastType } from "../types";

const useForcast = () => {
  const [term, setTerm] = useState<string>("");
  const [options, setoptions] = useState<[]>([]);
  const [city, setcity] = useState<optionType | null>(null);
  const [forcast, setForcast] = useState<forcastType | null>(null);
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
      `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        const forcastData = {
          ...data.city,
          list: data.list.slice(0, 16),
        };

        setForcast(forcastData);
        console.log("===", forcastData);
      });
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

  return {
    term,
    options,
    forcast,
    onInputChange,
    onOptionSelect,
    onSubmit,
  };
};

export default useForcast;
