import url from "./url.js"

async function getData() {

    try {
        const personajeData = await fetch(url);
        if(!personajeData.ok){
            throw new Error("error..",personajeData.status);
        }

        const tranformtData = await data.json();
        return tranformtData.data.data


    } catch (error) {
        console.log(error.message)
        }
    }


export default getData;
