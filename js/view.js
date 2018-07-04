const details = document.getElementById('details');
const similar = document.getElementById('similar');
init();

function init() {
    var id = getID();
    const doc = doctors.filter(doctor => {
        return doctor.id == id;
    });
    showDetails(doc);
    showSimilars(doc);
}

function getID() {
    var u = window.location.href; //window.location.href
    var url = new URL(u);
    return url.searchParams.get('id');
}

function showDetails(doc) {
    var name1 = document.createElement('h4');
    name1.innerHTML = doc[0].name;
    details.appendChild(name1);

    var sp = document.createElement('div');
    sp.innerHTML = doc[0].specialty;
    details.appendChild(sp);

    var address = document.createElement('div');
    address.innerHTML = doc[0].address;
    details.appendChild(address);
    
    var city = document.createElement('div');
    city.innerHTML = doc[0].city;
    details.appendChild(city);

    var zip = document.createElement('div');
    zip.innerHTML = doc[0].zip_code;
    details.appendChild(zip);

    var phone = document.createElement('div');
    phone.innerHTML = doc[0].phone;
    details.appendChild(phone);
}

function showSimilars(doc) {
    var n = doctors.length;
    var id1 = doc[0].id;
    // console.log(doc);
    for(var i =1; i<=3; i++) {
        var s1 = document.createElement('div');
        var a1 = document.createElement('a');
        var a2 = document.createElement('div');

        var index = (id1+i)%3;
        a1.innerHTML = doctors[index].name;
        a1.setAttribute('href', `/view.html?id=${id1+i}`)
        a2.innerHTML = doctors[index].specialty;
        s1.appendChild(a1);
        s1.appendChild(a2);
        s1.classList +='card flex';
        
        s1.style.minHeight = '100px';
        s1.style.minWidth = '300px';
        similar.appendChild(s1);
    }
}