function onPageLoad() {
    console.log( "document loaded" );
    var url = "http://127.0.0.1:5000/Bangalore_names";
    $.get(url,function(data) {
        console.log("got response for Bangalore_names request");
        if(data) {
            var locations = data.locations;
            var uiLocations = document.getElementById("uiLocations");
            $('#uiLocations').empty();
            for(var i in locations) {
                var opt = new Option(locations[i]);
                $('#uiLocations').append(opt);
            }
        }
    });
  }
  
  window.onload = onPageLoad;