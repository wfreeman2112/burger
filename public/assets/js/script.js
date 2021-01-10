$(".devouredbtn").on("click", function(){
    var id = $(this).attr("data-id")
    var newBody = {
      devoured: 1   
    }
    $.ajax({
        url:"/api/burgers/" + id, 
        method: "PUT",
        data: newBody
    }).then(function(){
        location.reload()
    })
})