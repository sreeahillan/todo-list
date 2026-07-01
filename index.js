var inputbox = $("#search-box");
var Tasklist = $("#Task-list");

function adding() {
  if (inputbox.val() === "") {
    var para = $("<p>Type Any Task !</p>");
    $(".row").after(para);
    setTimeout(() => {
      $(para).remove();
    }, 1000);
  } else {
    var list = $("<li></li>");
    list.html(inputbox.val());
    Tasklist.append(list);
    var del = $("<span></span>");
    del.html("\u00d7");
    list.append(del);
  }
  inputbox.val("");
  storeData();
}

$(Tasklist).click(function (e) {
  if (e.target.nodeName === "LI") {
    $(e.target).toggleClass("checked");
  } else if (e.target.nodeName === "SPAN") {
    $(e.target).parent().remove();
  }
  storeData();
});

function storeData () { 
  localStorage.setItem("data" , Tasklist.html());
 }

 function showData(){
  Tasklist.html(localStorage.getItem("data"));
 }

 showData();