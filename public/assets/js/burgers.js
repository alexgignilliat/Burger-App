$(() => {
    $(".create-form").on("submit", function () {
        event.preventDefault();
        console.log("")

        let newBurger = {
            burger_name: $("#newburger").val().trim(),
            devoured: 0,

        }
        console.log(newBurger)


        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("Added new burger")
            location.reload()

        })
    })

    $(".devour").on("click", function () {
        let id = $(this).data('id');
        console.log(id)

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
