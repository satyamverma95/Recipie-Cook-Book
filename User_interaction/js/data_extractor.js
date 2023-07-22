
var cuisine_recipe_list = {}

function readTextFile(file)
{
  $.getJSON(file, function(json) {
    populate_list(json)
  });
}


function populate_list(data_object){

  //console.log(cuisine_recipe_list)
  cuisine_recipe_list = data_object //Stroing varibale in global varibale for access across all function.

  var select = document.getElementById("cuisine_id");
  var options = Object.keys(data_object)

  el = document.createElement("option");
  el.textContent = "None";
  el.value = opt;
  select.appendChild(el)

  for(var i = 0; i < options.length; i++) {
      var opt = options[i];
      var el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      select.appendChild(el);
  }

}

function populate_recipe(){

  cuisine_selected = document.getElementById("cuisine_id").value
  document.getElementById('recipe_id').innerHTML = ""

  var select = document.getElementById("recipe_id");
  var options = Object.keys(cuisine_recipe_list[cuisine_selected])


  for(var i = 0; i < options.length; i++) {
      var opt = options[i];
      var el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      select.appendChild(el);
  }


}


function fetch_recipe_details (){

  cuisine_selected = document.getElementById("cuisine_id").value
  recipe_selected = document.getElementById("recipe_id").value

  //console.log(cuisine_selected, recipe_selected )

  $.ajax({
    url: "http://127.0.0.1:52650/script/",
    type: 'POST',
    dataType: 'json',
    cors: true,
    contentType: 'application/json;charset=UTF-8',
    secure: true,
    data : {
      'cuisine' : cuisine_selected, 
      'recipe'  : recipe_selected
    },
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
    success: function (data, status, xhr) {
        console.log('success');
    },
    error: function (jqXhr, textStatus, errorMessage) {
        console.log(errorMessage);
    }

  })
  


}




function init(){

  readTextFile("data/recipe_links.json")
  
}



