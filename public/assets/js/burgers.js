// Make sure we wait to attach our handlers until the DOM is fully loaded.
// Jump function
function jumpScroll() {
	window.scroll(0,3000); // horizontal and vertical scroll targets
};
$(function() {
  $.ajax("/burgers", {
    type: "GET"
  }).then(function(data) {
    var devoured = $("#devoured");
    var notDevoured = $("#notDevoured");

    var burgers = data.burgers;
    var len = burgers.length;

    for (var i = 0; i < len; i++) {
      var new_elem;
        

      if (burgers[i].devoured) {
        new_elem =
        "<div class='row burger-row'>"+"<div class='col-md-9'>" +burgers[i].id + ". "+ burgers[i].burger_name+ "</div>" + "<div class='col-md-3'>"+" <button class='delete-burger btn  btn-danger' data-id='" +
        burgers[i].id +
        "'>Delete</button></div></div>";
      } else {
        new_elem = "<div class='row burger-row'>"+"<div class='col-md-9'>"+burgers[i].id + ". "+ burgers[i].burger_name+ "</div>" + "<div class='col-md-3'>"+"<button  class='change-devoured btn btn-primary ' data-id='" +
        burgers[i].id +
        "' data-newdevoured='" +
        !burgers[i].devoured +
        "'>"  + "Devour";
      }
      


      if (burgers[i].devoured) {
        devoured.append(new_elem);
      } else {
        notDevoured.append(new_elem);
      }
    }
  });

  $(document).on("click", ".change-devoured", function(event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured")===true;

    var newDevouredState = {
      devoured: newDevoured
    };

    // Send the PUT request.
    $.ajax("/burgers/" + id, {
      type: "PUT",
      data: JSON.stringify(newDevouredState),
      dataType:'json',
      contentType: 'application/json'
    }).then(function() {
      console.log("changed sleep to", newDevoured);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    jumpScroll();
    var newBurger = {
      burger_name: $("#new-burger")
        .val()
        .trim(),
    };
   
    // Send the POST request.
    $.ajax("/burgers", {
      type: "POST",
      data: JSON.stringify(newBurger),
      dataType:'json',
      contentType: 'application/json'
    }).then(function() {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  
  });

  $(document).on("click", ".delete-burger", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/burgers/" + id, {
      type: "DELETE"
    }).then(function() {
      console.log("deleted burger", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
