$(function () {
  $("body").html("<dir id='tree'></dir>");
  $('#tree').fancytree({
    extensions: ["edit"],
    quicksearch: true,
    source: {
      url: "./data/003.json"
    },
    edit: {
      triggerStart: ["f2", "dblclick", "shift+click", "mac+enter"],
      beforeEdit: function (event, data) {
      },
      edit: function (event, data) {
      },
      beforeClose: function (event, data) {
        console.log(event.type, event, data);
        if (data.originalEvent.type === "mousedown") {
        }
      },
      save: function (event, data) {
        console.log("save...", this, data);
        setTimeout(function () {
          $(data.node.span).removeClass("pending");
          data.node.setTitle(data.node.title + "!");
        }, 2000);
        return true;
      },
      close: function (event, data) {
        if (data.save) {
          $(data.node.span).addClass("pending");
        }
      }
    },
  });
});