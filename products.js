// implementando el metodo POST:
async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return response.json();
}

async function getData(url = '') {
    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    });
    return response.json();
}

getData('https://api.escuelajs.co/api/v1/products?limit=10&offset=10').then((value => {
    let index = 1;
    value.forEach(data => {
        console.log('element', data);
        addRow('products', data);
        index++;
    });
}));

function addRow(tableID, data) {
    var tableRef = document.getElementById(tableID);
    var newRow =   tableRef.insertRow(1);
    var newCell =  newRow.insertCell(0);
    var newCell1 = newRow.insertCell(1);
    var newCell2 = newRow.insertCell(2);
    var newCell3 = newRow.insertCell(3);

    let id = document.createTextNode(data.id);
    let title = document.createTextNode(data.title);
    let price = document.createTextNode(data.price);
    let description = document.createTextNode(data.description);

    newCell.appendChild(id);
    newCell1.appendChild(title);
    newCell2.appendChild(price);
    newCell3.appendChild(description);
}


let table = document.getElementById('products');

