const API_URL = getHostURL();

$(document).ready(function() {
    const params = parseQuery(window.location.search);
    
    getUsers(params.id)
        .then(addInfo)
        .then(getCars)
        .then(appendCars)









    // *****************************FUNCTIONS



    function appendCars(carArray) {
        carArray.forEach(index => {
            $('.cars').append(`
          <div class="col s12 m6">
                  <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                      <span class="card-title">${index.model}</span>
                        <ul>
                          <li>${index.make}</li>
                          <li>${index.year}</li>
                          <li>${index.color}</li>
                          </ul>
                    </div>
                    <div class="card-action">
              <a href="#">Delete This Car</a>
              <a href="#">Edit Info</a>
            </div>
                  </div>
                </div>
`)
        });



    }

    function getCars(id) {
        return $.get(`${API_URL}/users/${id}/car`)



    }





    function addInfo(data) {

        $('.user').append(`<h1>${data.f_name} ${data.l_name}</h1>`);
        return data.id;

    }




    function getUsers(id) {

        return $.get(`${API_URL}/users/${id}`)

    };


});

function parseQuery(query) {
    return query.substr(1).split('&').reduce((params, keyValue) => {
        const parts = keyValue.split('=');
        params[parts[0]] = parts[1];
        return params;
    }, {});
}

function getHostURL() {
    if (window.location.host.indexOf('localhost') != -1) {
        return 'http://localhost:3000'
    } else {
        return 'https://carapp-matt-steven.herokuapp.com'
    }
}
