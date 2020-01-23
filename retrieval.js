$(document).ready(function() {
  $("#retrieve-resources").click(function() {
    var displayResources = document.getElementById("display-resources");
    var iso2code = $("#country").val();
    $(displayResources).html("Loading data from JSON source...");
    $.ajax({
      type: "GET",
      url: "https://restcountries.eu/rest/v2/alpha",
      data: {
        codes: iso2code
      },
      success: function(result) {
        // Build output render
        var output =
          "<table><thead><tr><th>Name</th><th>Alpha 2 Code</th><th>Alpha 3 Code</th></thead><tbody>";
        for (var i in result) {
          output += `<tr><td> ${result[i].name} </td><td> ${result[i].alpha2Code} </td><td> ${result[i].alpha3Code} </td></tr>`;
          output += "</tbody></table>";
        }
        $(displayResources).html(output);

        // Add bootstrap class to the table for styling
        $("table").addClass("table");
      }
    });
  });
});
