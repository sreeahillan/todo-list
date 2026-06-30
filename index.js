var inputbox = $("#search-box");
var Tasklist = $("#Task-list");

function adding() {
  if (inputbox.val() === "") {
    alert("Please type a task!");
  } else {
    var list = $("<li></li>");
    list.html(inputbox.val());
    Tasklist.append(list);
    var del = $("<span></span>");
    del.html("\u00d7");
    list.append(del);
  }
  inputbox.val("");
}

$(Tasklist).click(function (e) {
  if (e.target.nodeName === "LI") {
    $(e.target).toggleClass("checked");
  }
});

