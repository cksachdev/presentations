$(function () {
  $("body").html("<dir id='tree'></dir>");
  $('#tree').fancytree({
    extensions: ["dnd5", "edit"],
    source: {
      url: "./data/002.json"
    },
  });
  $.contextMenu({
    selector: "#tree span.fancytree-title",
    items: {
      "cut": {name: "Cut", icon: "cut",
          callback: function(key, opt){
            var node = $.ui.fancytree.getNode(opt.$trigger);
            alert("Clicked on " + key + " on " + node);
          }
        },
      "copy": {name: "Copy", icon: "copy"},
      "paste": {name: "Paste", icon: "paste", disabled: false },
      "sep1": "----",
      "edit": {name: "Edit", icon: "edit", disabled: true },
      "delete": {name: "Delete", icon: "delete", disabled: true },
      "more": {name: "More", items: {
        "sub1": {name: "Sub 1"},
        "sub1": {name: "Sub 2"}
        }}
      },
    callback: function(itemKey, opt) {
      var node = $.ui.fancytree.getNode(opt.$trigger);
      alert("select " + itemKey + " on " + node);
    }
  });

});