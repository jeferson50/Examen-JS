import getData from "../API/getData";

async function showData () {
    const apiData = await getData();
    const div = document.getElementById("container");

    apiData.forEach(e => {
        const  pe = document.createElement("p");
        pe.innerHTML = e.data;
        div.appendChild(pe);

    });


}
