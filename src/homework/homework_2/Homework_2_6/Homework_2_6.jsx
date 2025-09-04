import { useState, useEffect } from "react";
import Headers from "../../hw_components/Headers/Headers";
import { Navigation } from "../../hw_components/index";
import Loading from "../../../components/Loading";
import resetIcon from "/reset.svg";

const WEATHER_ID = "fdfd8bff8ab5b53fdd7ca82ef272712e";
const API_ENDPOINT = {
  TIME_ZONE: "https://worldtimeapi.org/api/ip",
  WEATHER: "https://api.openweathermap.org/data/2.5/weather?units=metric&",
};

export default Weathers;

function Weathers() {
  const [weather, setWeather] = useState([]);
  const [currentCity, setCurrentCity] = useState("");
  const [newCity, setNewCity] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    getWeatherLogCity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (currentCity) {
      getWeatherLogCity(currentCity);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCity]);

  function formatCity(str) {
    return str
      .normalize("NFD") // Phân tách ký tự thành chữ cái và dấu
      .replace(/[\u0300-\u036f]/g, "") // Xóa các dấu
      .replace(/đ/g, "d") // Thay "đ" thành "d"
      .replace(/Đ/g, "D") // Thay "Đ" thành "D"
      .toLowerCase() // Chuyển thành chữ thường
      .replace(/\s+/g, " ") // Chuẩn hóa khoảng trắng
      .replace(/(^|\s)\w/g, (letter) => letter.toUpperCase()); // Chuẩn hóa chữ cái đầu!
  }

  const getWeatherLogCity = async (desiredCity = null) => {
    let city = desiredCity ? formatCity(desiredCity.trim()) : "Hanoi";
    city = city === "Sai Gon" ? "Ho Chi Minh" : city;
    try {
      const response = await fetch(
        `${API_ENDPOINT.WEATHER}appid=${WEATHER_ID}&q=${city}&lang=vi`,
      );
      const data = await response.json();
      if (data.cod !== 200) {
        setError(`${city} City, không có trong kho dữ liệu!`);
        throw new Error(data.message || "Không tìm thấy thành phố");
      }
      if (!data.sys || !data.weather || !data.main) {
        setError("Dữ liệu thời tiết không đầy đủ");
        throw new Error("Dữ liệu thời tiết không đầy đủ");
      }

      const dataWeather = {
        id: data.id,
        city: data.name,
        country: data.sys.country,
        sunrise: formatTime(data.sys.sunrise, data.timezone),
        sunset: formatTime(data.sys.sunset, data.timezone),
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        windDeg: data.wind.deg,
        windGust: data.wind.gust,
        windSpeed: data.wind.speed,
        feels_like: data.main.feels_like,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        temp: data.main.temp,
        visibility: data.visibility,
        lastUpdated: getCurrentTime(),
      };
      setWeather([dataWeather]);
    } catch (error) {
      console.error("Error in getWeatherLogCity: ", error);
    }
  };

  const formatTime = (unixSeconds, tzOffset = 0) => {
    const date = new Date((unixSeconds + tzOffset) * 1000);
    return date.toLocaleTimeString("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "UTC",
    });
  };

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const handleReset = (e) => {
    const target = e.target.closest(".reset");
    if (!target) return;
    const city = target.closest(".weather-card").getAttribute("name");
    getWeatherLogCity(city);
  };

  const handleGetWeather = (e) => {
    const addNewcity = e.target.closest(".add-newcity");
    if (!addNewcity) return;
    if (!newCity) setError("Vui lòng nhập tên thành phố!");
    const parents = addNewcity.closest(".weather-input");
    const cityInput = parents.querySelector("#cityInput");

    if (cityInput && newCity) {
      getWeatherLogCity(newCity);
      cityInput.focus();
      setNewCity("");
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setNewCity(value);
    setError("");
  };

  const handleInputFocus = () => {
    setError("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (!newCity.trim()) {
        setError("Vui lòng nhập tên thành phố!");
        e.target.focus();
        return;
      }
      setCurrentCity(newCity);
      setNewCity("");
    }
  };

  const Weather = ({ weather }) => {
    return weather.map((w) => (
      <div key={w.id} name={w.city} id={w.id} className="weather-card">
        <div className="card-head">
          <div className="country">
            <h2>{w.city}</h2>
            <p>{w.country}</p>
          </div>
          <div className="quick-info">
            <div className="temp">{w.temp}°C</div>
            <div className="description">{w.description}</div>
          </div>
        </div>

        <div className="icon">
          <img
            src={`http://openweathermap.org/img/wn/${w.icon}@2x.png`}
            alt="Weather Icon"
          />
          <img
            src={`http://openweathermap.org/img/wn/02d@2x.png`}
            alt="Weather Icon"
          />
        </div>

        <div className="details">
          <div className="humidity-pressure ">
            <div className="humidity">
              <div className="label">Độ ẩm:</div>
              <div className="value">{w.humidity}%</div>
            </div>

            <div className="pressure">
              <div className="label">Áp suất:</div>
              <div className="value">{w.pressure} hPa</div>
            </div>
          </div>

          <div className="meta">
            <p className="feels">Cảm giác: {Math.floor(w.feels_like)} °C</p>
            <p className="visibility">Tầm nhìn: {w.visibility / 1000} km</p>
          </div>

          <div className="wind">
            <p className="speed">Gió: {w.windSpeed} m/s</p>
            <p className="gust">Gió giật: {w.windGust} m/s</p>
          </div>
          <div className="sun">
            <p>Mặt trời mọc: {w.sunrise} </p>
            <p>Mặt trời lặn: {w.sunset} </p>
          </div>

          <div className="weather-updated">
            <div className="last-updated">
              Cập nhật lần cuối: {w.lastUpdated}
            </div>
            <div className={`reset`} onClick={handleReset}>
              {<img src={resetIcon} alt="reset" />}
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container">
      <Headers>
        <p className="desc">
          Chinh phục ReactJS cùng F8 -
          <a
            href="https://fullstack.edu.vn/"
            target="_blank"
            rel="noopener noreferrer">
            fullstack.edu.vn
          </a>
          Học lập trình để đi làm!
        </p>
      </Headers>
      <Navigation>
        <h2>Bài tập 2.1.7: Weather App ROUTES</h2>
        <a
          href="https://github.com/xuanphao19/ReactJS-Practice-F88/blob/main/src/homework/homework_2/Homework_2_6/Homework_2_6.jsx"
          className="repositories"
          target="_blank"
          rel="noopener noreferrer">
          <span>⭐</span> Repositories GitHub
        </a>
      </Navigation>

      <div className="exercise-content">
        <div className="answer-content weather-city">
          {error && (
            <p className="error">
              {error}
              <span onClick={() => setError("")}>❌</span>
            </p>
          )}
          <div className="list-weather-city">
            {!weather.length ? <Loading /> : <Weather weather={weather} />}
          </div>
          <div className="weather-input" onClick={handleGetWeather}>
            <input
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onFocus={handleInputFocus}
              type="text"
              value={newCity}
              placeholder="Nhập thành phố của bạn"
              id="cityInput"
            />
            <button className="add-newcity">Xem thời tiết</button>
          </div>
        </div>
      </div>
    </div>
  );
}
