$(() => {
    //Submit event that takes user input, saves to an object
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        let newBurger = {
            burger_name: $("#newburger").val().trim(),
            devoured: 0,
        };
        // console.log(newBurger)
        //Some validation to make sure the user isn't POSTing an empty string
        if (newBurger.burger_name.length > 0) {
            //ajax POST the object we just created
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(function () {
                console.log("Added new burger")
                location.reload();
            });
        } else {
            alert("Nice try. :)")
        };
    });
    //Click event for the devour button
    $(".devour").on("click", function () {
        let id = $(this).data('id');
        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: {
                burgerid: id
            }
        }).then(function () {
            location.reload();
        });
    });
    //CLick event for the delete button
    $(".delete").on("click", function () {
        event.preventDefault()
        const id = $(this).data("id")
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(function(){
            location.reload();
        });
    });
});
