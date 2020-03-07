$(() => {
    $(".create-form").on("submit", function () {
        event.preventDefault();

        let newBurger = {
            burger_name: $("#newburger").val().trim(),
            devoured: 0,

        }
        console.log(newBurger)


        if (newBurger.burger_name.length > 0) {
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(function () {
                console.log("Added new burger")
                location.reload()

            })
        } else {
            alert("Nice try. :)")
        }
    })


    $(".devour").on("click", function () {
        let id = $(this).data('id');
        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: {
                burgerid: id
            }
        }).then(function () {
            location.reload();
        })
    })

    $(".delete").on("click", function () {
        event.preventDefault()

        const id = $(this).data("id")

        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload())
    })
})
