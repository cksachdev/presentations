 $(function () {
   var stext = "<dir id='status'>Ready::</div><p><button id='btn' name='clickMe'>clickMe</button></p>";
   $("body").html("<dir id='tree'></dir>"+stext);
   $('#tree').fancytree({
    checkbox: true,
    selectMode: 3,
    source: {
      url: "./data/001.json"
    },
  });
  $('#btn').click(function () {
    var treeSelected = $('#tree').fancytree("getTree"),
      nodeSelected2 = treeSelected.getNodeByKey("Node2");
    nodeSelected2.toggleSelected()
  });
 });