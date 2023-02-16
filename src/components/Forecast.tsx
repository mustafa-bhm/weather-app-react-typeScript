import Sunrise from "./Icons/Sunrise";
import Sunset from "./Icons/Sunset";
import { formatAMPM } from "../helpers";

import { forcastType } from "./types";
import Tile from "./Tile";

type Props = {
  data: forcastType;
};

const Forecast = ({ data }: Props): JSX.Element => {
  const today = data.list[0];
  const TempFormat = ({ temp }: { temp: number }): JSX.Element => (
    <span>{Math.round(temp)}° </span>
  );

  return (
    <div className="w-full md:max-w-[500px] py-4 md:py-4 md:px-10 lg:px-24 h-full lg:h-auto bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg">
      <div className="mx-auto w-[300px]">
        <section className="text-center">
          <h2 className="text-2xl font-black">
            {data.name}, <span className="font-thin"> {data.country} </span>
          </h2>
          <h1 className="text-4xl font-extrabold">
            <TempFormat temp={today.main.temp} />
          </h1>
          <p className="text-sm">
            {today.weather[0].main}
            {today.weather[0].description}
          </p>
          <p className="text-sm">
            H: <TempFormat temp={today.main.temp_max} />
            L: <TempFormat temp={today.main.temp_min} />
          </p>
        </section>

        <section className="flex flex-wrap justify-between text-zinc-700">
          <div className="w-[140px] text-sm font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-5">
            <div className="flex items-center justify-center">
              <Sunrise />
              <h4 className="ml-1">Sunrise</h4>
            </div>
            <span className="mt-2">
              {formatAMPM(new Date(data.sunrise * 1000))}
            </span>
          </div>

          <div className="w-[140px] text-sm font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-5">
            <div className="flex items-center justify-center">
              <Sunset />
              <h4 className="ml-1">Sunset</h4>
            </div>
            <span className="mt-2">
              {formatAMPM(new Date(data.sunset * 1000))}
            </span>
          </div>
          <Tile
            icon="wind"
            title="Wind"
            info={`${Math.round(today.wind.speed)} km/h`}
          />
          <Tile
            icon="feels"
            title="Feels like"
            info={<TempFormat temp={today.main.feels_like} />}
          />

          <Tile
            icon="humidity"
            title="Humidity"
            info={`${today.main.humidity} %`}
          />

          <Tile
            icon="pop"
            title="Precipitation"
            info={`${Math.floor(today.pop * 1000)} `}
          />

          <Tile
            icon="pressure"
            title="Pressure"
            info={`${today.main.pressure} hPa`}
          />
          <Tile
            icon="visibility"
            title="Visibility"
            info={`${(today.visibility / 1000).toFixed()} km`}
          />
        </section>
        <section className="flex overflow-x-scroll mt-4 pb-2 mb-5 ">
          {data.list.map((item, i) => (
            <div
              className="inline-block text-center w-[50px] flex-shrink-0 "
              key={i}
            >
              <p className="text-sm">{formatAMPM(new Date(item.dt * 1000))}</p>

              <img
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={`weather-icon-${item.weather[0].description}`}
              />
              <p className="text-sm font-bold">
                <TempFormat temp={item.main.temp} />
              </p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Forecast;
