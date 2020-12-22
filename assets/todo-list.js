$(document).ready(() => {
  $("form").on("submit", function(){
    var item = $("form input");
    var todo = { item: item.val() };

    $.ajax({
      type: "POST",
      url: "/todo",
      data: todo,

      success: (data) => {
        // do something with the data cia front-endframework
        location.reload();
      },
    });

    return false;
  });

  $('li').on('click', () => {
    var item = $(this).text().replace(/ /g, "-");
    $.ajax({
      type: "DELETE",
      url: "/todo/" + item,

      success: (data) => {
        location.reload();
      },
    });
  });
});
