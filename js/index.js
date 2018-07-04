const body = document.getElementById('doctors-data');
const search = document.getElementById('search');
const filter = document.getElementById('filter');
search.addEventListener('keyup', searchResults);
init();

function init() {
    calculateScore();
    displayData(doctors);
}


function searchResults(e) {
    var value = search.value;
    console.log(value);
    var field = filter.value;
    if( value !== '') {
        const data = doctors.filter(doctor => {
            return doctor[field].toLowerCase().includes(value.toLowerCase());
        });
        displayData(data);
    } else {
        displayData(doctors);
    }
}

function displayData(data) {
    var node = document.createElement('tbody')
    body. innerHTML = '';
    data.map(doctor => {
        var row = document.createElement('tr')
        var rowdata = `
            <td><a href="./view.html?id=${doctor.id}"> ${doctor.name} </a></td>
            <td> ${doctor.address}</td>
            <td> ${doctor.specialty}</td>
            <td> ${doctor.city}</td>
            <td> ${doctor.score}</td>
        `  ;
        row.innerHTML = rowdata;
        row.classList += 'row-data';
        node.appendChild(row);    
    });
    body.innerHTML = node.innerHTML;
}

function calculateScore() {
    doctors.forEach(doctor => {
        doctor.score = Math.floor(Math.random() * 100); 
    })
}