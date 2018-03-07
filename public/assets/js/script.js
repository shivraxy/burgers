$(function() {
    $("#addNew").on("click", function(event) {
        event.preventDefault();
        var newburger = {
            burger_name: $("#newBurger").val().trim(),
            devoured: 0,
        };

        $.ajax("/api/burger", {
            type: "POST",
            data: newburger,
        }).then(function() {
            console.log("created new burger");
            location.reload();
        });
    });

    $(".eatbutton").on("click", function(event) {
        event.preventDefault();
        var updateburger = {
            update_burger_name: this.id,
        };

        $.ajax("/api/updateburger", {
            type: "POST",
            data: updateburger,
        }).then(function() {
            location.reload();
        });
    })
});