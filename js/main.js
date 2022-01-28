console.log("RacerJS")

const getF1RacerAPI = async function(raceSeason, raceRound){
    let response = await fetch(`http://ergast.com/api/f1/${raceSeason}/${raceRound}/driverStandings.json`);
    let data = await response.json();
    console.log(data.MRData)
    return await data
}

const racerForm = document.getElementById('racerForm');

function generateTable(results){
    document.getElementById("raceTable").innerHTML = "";
    
    let raceResults = document.querySelector('#raceTable');
    // ROW 1 -- HEADER ROW
    let headerRow = document.createElement('thead');
    headerRow.setAttribute("font-weight", "bold");
    raceResults.append(headerRow);

    
    let header1 = document.createElement('td');
    header1.innerText = `Position`
    raceResults.append(header1)
    let header2 = document.createElement('td');
    header2.innerText = `Points`
    raceResults.append(header2)
    let header3 = document.createElement('td');
    header3.innerText = `Wins`
    raceResults.append(header3)
    let header4 = document.createElement('td');
    header4.innerText = `First Name`
    raceResults.append(header4)
    let header5 = document.createElement('td');
    header5.innerText = `Last Name`
    raceResults.append(header5)
    let header6 = document.createElement('td');
    header6.innerText = `DOB`
    raceResults.append(header6)
    let header7 = document.createElement('td');
    header7.innerText = `Nationality`
    raceResults.append(header7)
    let header8 = document.createElement('td');
    header8.innerText = `Constructor`
    raceResults.append(header8)

    //   LOOP THROUGH 7 records ; if record exists, add to table    //////////////////////////////////
    for(i = 0; i < 7; i++){
        if(results.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].position){
            let row2 = document.createElement('tr');
            raceResults.append(row2);

            let position1 = document.createElement('td');
            position1.innerText = `${results.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].position}`;
            raceResults.append(position1);

            let points1 = document.createElement('td');
            points1.innerText = `${results.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].points}`;
            raceResults.append(points1);

            let wins1 = document.createElement('td');
            wins1.innerText = `${results.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].wins}`;
            raceResults.append(wins1);

            let firstName1 = document.createElement('td');
            firstName1.innerText = `${results.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.givenName}`;
            raceResults.append(firstName1);

            let lastName1 = document.createElement('td');
            lastName1.innerText = `${results.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.familyName}`;
            raceResults.append(lastName1);

            let dob1 = document.createElement('td');
            dob1.innerText = `${results.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.dateOfBirth}`;
            raceResults.append(dob1);

            let nationality1 = document.createElement('td');
            nationality1.innerText = `${results.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.nationality}`;
            raceResults.append(nationality1);

            let constructor1 = document.createElement('td');
            constructor1.innerText = `${results.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].constructorId}`;
            raceResults.append(constructor1);
        }
    }

}

racerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    let resultsFormSeason = e.target.raceSeason.value;
    let resultsFormRound = e.target.raceRound.value;
    console.log(resultsFormSeason, resultsFormRound);
    let results = await getF1RacerAPI(resultsFormSeason, resultsFormRound);
    console.log(results);
    generateTable(results)
})