import useForcast from "./components/hooks/useForcast";
import Search from "./components/Search";

const App = (): JSX.Element => {
  const { term, options, forcast, onInputChange, onOptionSelect, onSubmit } =
    useForcast();
  return (
    <main className="flex justify-center items-center bg-gradient-to-r from-purple-200 via-teal-500 to-blue-400 h-[100vh] w-full">
      {forcast ? (
        "We have forcast "
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
