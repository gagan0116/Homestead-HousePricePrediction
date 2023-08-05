function onPageLoad() {
    console.log( "document loaded" );
    var url = "http://127.0.0.1:5000/mumbai_names";
    $.get(url,function(data) {
        console.log("got response for mumbai_names request");
        if(data) {
            var m_locations = data.m_locations;
            var uuiLocations = document.getElementById("uuiLocations");
            $('#uiLocations').empty();
            for(var i in m_locations) {
                var opt = new Option(m_locations[i]);
                $('#uuiLocations').append(opt);
            }
        }
    });
  }
  
  window.onload = onPageLoad;