const API_URL = getHostURL();

$(document).ready(function(){
const params = parseQuery(window.location.search);

getUsers(params.id);

  function getUsers(params.id){

    $.get(`${API_URL}/users/${params}`, function(data){
      console.log(data);
    });
  };

});

function parseQuery(query){
  return query.substr(1).split('&').reduce((params, keyValue)=>{
    const parts =  keyValue.split('=');
    params[parts[0]] = parts[1];
    return params;
  }, {});
}

function getHostURL(){
  if (window.location.host.indexOf('localhost')!= -1){
    return 'http://localhost:3000'
  } else {
    return 'https://carapp-matt-steven.herokuapp.com'
  }
}
