
import  weatherAPI  from "./weather-api.js";

function testConstructURL(){

    //object for weather api

    const weatherAPIObj = new weatherAPI();

    weatherAPIObj.constructURL("Singapore");
    
}

// invoke the function

async function testInvokeURL(){

    const weatherAPIObj = new weatherAPI();

    weatherAPIObj.constructURL("Indonesia");

    const responseJSON = await  weatherAPIObj.invokeURL();

    console.log(responseJSON);
}
// testConstructURL();

testInvokeURL();
