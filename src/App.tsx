const App = () => {
  return (
    <main className="flex justify-center items-center bg-gradient-to-r from-purple-200 via-teal-500 to-blue-400 h-[100vh] w-full">
      <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg text-zinc-700">
        <h1 className="text-4x1 font-black"> Weather App</h1>
        <p>Please enter your city name </p>
        <div className="flex mt-7  gap-0.5">
          <input
            type="text"
            value={""}
            className="px-2 py-1 rounded border-2 border-white"
          />
          <button className="rounded border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500  text-zinc-100 px-2 py-1 cursor-pointer">
            search
          </button>
        </div>
      </section>
    </main>
  );
};

export default App;
