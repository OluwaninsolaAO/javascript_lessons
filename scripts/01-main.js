$("#headline").text("Lorem ipsum dolor sit, amet.");
$("#body").text(
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit ratione porro, dolores doloremque repudiandae laudantium reprehenderit quod magni maxime? Facere hic voluptatibus perferendis tenetur ullam porro eaque dolore, cum sequi?"
);

// alert("Headline: " + $("#headline").text());
// alert("Body: " + $("#body").text());
// alert("Value: " + $(".btn").val());

function toggleClass(sender) {
  if ($(sender).hasClass("btn-primary")) {
    $(sender).removeClass("btn-primary");
    $(sender).addClass("btn-danger");
  } else {
    $(sender).removeClass("btn-danger");
    $(sender).addClass("btn-primary");
  }
}

let count = 0;

function append() {
  if (count < 7) {
    $("#todo").append(`<li>New Item ${++count}!</li>`);
  }
}

function prepend() {
  if (count < 7) {
    $("#todo").prepend(`<li>New Item ${++count}!</li>`);
  }
}
