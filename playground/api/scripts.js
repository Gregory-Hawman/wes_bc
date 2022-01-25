const BASE_URL = "https://swapi.dev/api";

$("document").ready(() => {
  $("#people").click(() => {
    const peopleRequestObject = {
      url: `${BASE_URL}/people`,
      method: "GET",
      success: (data) => {
        console.log("SUCCESS");
        console.log(data);

        data.results.forEach((item) => {
          $("#people-list").append(`<li>${item.name}</li>`);
        });
      },
      error: (data) => {
        console.log("ERROR");
        console.log(data);
      },
    };

    $.ajax(peopleRequestObject);
  });
});