
//define constant for API key
const API_Id = "40639dddd6d7483dbac015207a26a368";
//define constant for units
const UNITS = "metric"
//define the baseURL as constant
const WEATHER_API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather" ;

class weatherAPI {

    constructor(){
        this.apiURL= new URL(WEATHER_API_BASE_URL);
    }

    constructURL(CityName){

        this.apiURL.searchParams.append("q",CityName);
        this.apiURL.searchParams.append("appid",API_Id);
        this.apiURL.searchParams.append("units",UNITS);

        console.log(this.apiURL.toString());

    }

    async invokeURL(){

        const responseobj = await  fetch(this.apiURL.toString());
        const responseJSON = await responseobj.json();
        return responseJSON;

    }

    async invokeURL2(){
        const responseObj = await fetch(this.apiURL.toString())
        .then( (response)=>{
            return response.json()
        })
        .then( (responseJSON) =>{
            return responseJSON;
        })
        .catch( (error) =>{
            console.log("Error accessing the API " + error); 
        })
        
        return responseObj;
    }
}
export default weatherAPI;