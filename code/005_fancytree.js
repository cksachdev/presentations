$(function () {
  $("body").html("<dir id='tree'></dir>");
  $('#tree').fancytree({
    extensions: ["dnd5", "edit"],
    source: {
      url: "./data/002.json"
    }, dnd5: {
      autoExpandMS: 400,
      focusOnClick: true,
      preventVoidMoves: true, // Prevent dropping nodes 'before self', etc.
      preventRecursiveMoves: true, // Prevent dropping nodes on own descendants
      dragStart: function (node, data) {
        return true;
      },
      dragEnter: function (node, data) {
        return true;
      },
      dragDrop: function (node, data) {
        data.otherNode.moveTo(node, data.hitMode);
      }
    },
    activate: function (event, data) {
      console.log("This is in activate method");
    },
  });
});