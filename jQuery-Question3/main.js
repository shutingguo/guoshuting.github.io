

var box = ["1", "2", "3", "4", "5"];
var Random = box[Math.floor(Math.random() * box.length)];
var lastClass;

$(function() {
      $(".frame").click( function(){
      	lastClass = box[Random(0,box.length)];
            $(".box").split("fill");
           }
      );
});