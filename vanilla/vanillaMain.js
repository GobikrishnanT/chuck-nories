

async function fetchTheData() {

    let responseData = await fetch("http://api.icndb.com/jokes/random/1");
    
    let responsedata_Json = responseData.json();
    return responsedata_Json;
}



let thatBtn = document.querySelector("button");
thatBtn.addEventListener(("click") , (event) => {
    fetchTheData()
    .then((neededData) => {
    document.querySelector(".forJoke").textContent = neededData.value[0]["joke"];
});
})




