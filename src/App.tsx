import Search from "./components/Search";
import useForcast from "./components/hooks/useForcast";
import Forecast from "./components/Forecast";

const App = (): JSX.Element => {
  const { term, options, forcast, onInputChange, onOptionSelect, onSubmit } =
    useForcast();
  return (
    <main className="flex justify-center items-center h-[100vh] w-full bg-gradient-to-r from-cyan-300 via-sky-400 to-sky-400">
      {forcast ? (
        <Forecast data={forcast} />
      ) : (
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
