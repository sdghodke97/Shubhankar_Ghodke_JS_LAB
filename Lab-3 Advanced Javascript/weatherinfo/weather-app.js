import weatherAPI from "./weather-api.js";
import weatherUtils from "./weather-util.js";


class weatherApp {
    init() {
        this.addListeners();
    }

    addListeners() {

        const searchTextFieldElement = document.querySelector(".search-box")

        searchTextFieldElement.addEventListener("keypress", (event) => {

            const keyCode = event.keyCode

            console.log(`keycode${keyCode}`);
            if (keyCode == 13) {
                //enter key code = 13

                const userIp = event.target.value;
                const weatherAPIObj = new weatherAPI();
                weatherAPIObj.constructURL(userIp);
                weatherAPIObj.invokeURL()
                    .then((responseJSON) => {
                        const convertResponse = weatherUtils.convertResponse(responseJSON);

                        //cityname
                        const cityElement = document.querySelector(".location .city")
                        cityElement.innerText = convertResponse.CityName;

                        //date
                        const dateElement = document.querySelector(".location .date")
                        dateElement.innerText = convertResponse.DATE;

                        //temperature
                        const temperatureElement = document.querySelector(".current .temp")
                        temperatureElement.innerText = convertResponse.TEMPERATURE;

                        //weather type
                        const weatherElement = document.querySelector(".current .weather")
                        weatherElement.innerText = convertResponse.WEATHER_TYPE;

                        //low-high element
                        const lowHighElement = document.querySelector(".current .hi-low")
                        lowHighElement.innerText = `${convertResponse.MIN_TEMPERATURE}/${convertResponse.MAX_TEMPERATURE}`;


                    })
            }
        })

        //keyPress



    }
}
export { weatherApp }