

class weatherUtils {

    static convertResponse(responseJSON) {

        const weatherResponse = {
            CityName: `${responseJSON.name},${responseJSON.sys.country}`,
            DATE: weatherUtils.getTodaysDate(),
            TEMPERATURE: responseJSON.main.temp,
            WEATHER_TYPE: responseJSON.weather[0].main,
            MIN_TEMPERATURE: responseJSON.main.temp_min,
            MAX_TEMPERATURE: responseJSON.main.temp_max
        }
        return weatherResponse;
    }

    static getTodaysDate() {
        const today = new Date();
        const dateAsString = today.toLocaleDateString("en-US", {
            weekday: 'long',
            year: "numeric",
            month: "long",
            day: "numeric"
        })
        return dateAsString;
    }
}
export default weatherUtils;