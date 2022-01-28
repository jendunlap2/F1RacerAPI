console.log("RacerJS")

const getF1RacerAPI = async function(raceSeason, raceRound){
    let response = await fetch(`http://ergast.com/api/f1/${raceSeason}/${raceRound}/driverStandings.json`);
    let data = await response.json()
    console.log(data.MRData)
    return await data
}

const racerForm = document.getElementById('racerForm');

function addToTable(results){
    document.getElementById("raceResults").innerHTML = "";

    // var table = document.getElementById("raceReslts");
    // var header = table.createTHead();
    // var row = header.insertRow(0);
    // var cell = row.insertCell(0);
    // cell.innerHTML = `${results.data}`
  

    let raceResults = document.getElementById('#raceResults');
    let tHeader = document.createElement('thead');
    tHeader.innerText = "Position"
    let cell = document.createElement('td')
    cell.innerText = `${results}`;

}

racerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    let resultsFormSeason = e.target.raceSeason.value;
    let resultsFormRound = e.target.raceRound.value;
    console.log(resultsFormSeason, resultsFormRound);
    let results = await getF1RacerAPI(resultsFormSeason, resultsFormRound);
    console.log(results);
    addToTable(results)
})