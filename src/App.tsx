import Search from "./components/Search";
import useForcast from "./components/hooks/useForcast";
import Forecast from "./components/Forecast";

const App = (): JSX.Element => {
  const { term, options, forcast, onInputChange, onOptionSelect, onSubmit } =
    useForcast();
  return (
    <main className="flex justify-center items-center bg-gradient-to-r from-purple-200 via-teal-500 to-blue-400 h-[100vh] w-full">
      {forcast ? (
        <Forecast data={forcast} />
      ) : (
        // "we have a forcast"
        <Search
          term={term}
          options={options}
          onInputChange={onInputChange}
          onOptionSelect={onOptionSelect}
          onSubmit={onSubmit}
        />
      )}
    </main>
  );
};

export default App;
