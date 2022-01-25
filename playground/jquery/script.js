$("document").ready(() => {
    console.log($("#main-header").text());
  
    $("#click-me").click(() => {
      $("#main-list").append("<li>List Item</li>");
    });
  });
  