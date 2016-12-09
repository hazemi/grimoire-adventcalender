$(function(){
  $("body > h1#b").text("changed");
  $("input").on("change",function(){
    $("h1").text(this.value);
  });
});
