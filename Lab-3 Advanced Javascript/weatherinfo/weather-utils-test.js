
import weatherAPI from "./weather-api.js";
import weatherUtils from "./weather-util.js";

async function testConvertResponse() {
    const weatherAPIObj = new weatherAPI();

    weatherAPIObj.constructURL("Indonesia");

    const responseJSON = await  weatherAPIObj.invokeURL();

    console.log(responseJSON);

    const outcome = weatherUtils.convertResponse(responseJSON);

    console.log("Converted Response");
    console.log(outcome);
    
}
testConvertResponse();