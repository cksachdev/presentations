$(function () {
  $("body").html("<dir id='tree'></dir>");
  $('#tree').fancytree({
    source: {
      url: "./data/002.json"
    },
    expand: function(event, data) {
      console.log("In expand event..."+data.node.title);
    },
    deactivate: function(event, data) {
      console.log("In deactivate event..."+ data.node.title);
    },
    activate: function(event, data) {
      console.log("In activate event..."+ data.node.title);
    },
    blurTree: function(event, data) {
      console.log("In blur tree event...");
    },
    create: function(event, data) {
      console.log("In create event");
    },
    init: function(event, data, flag) {
      console.log("IN init function.....");
    },
    focusTree: function(event, data) {
      console.log(event, data);
    },
    restore: function(event, data) {
      console.log(event, data);
    },
  }).on("mouseenter mouseleave", ".fancytree-title", function(event){
    // Add a hover handler to all node titles (using event delegation)
    var node = $.ui.fancytree.getNode(event);
    node.info(event.type);
  });
});