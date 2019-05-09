$(function () {
  node = null;
  $("body").html("<dir id='tree'></dir>");
  $('#tree').fancytree({
    checkbox: true,
    source: {
      url: "./data/001.json"
    },
    renderNode: function (event, data) {
      var currentNode = data.node;
      console.log("Current Node :: ", currentNode)
      var nodeSpan = $(currentNode.span);
      if (!nodeSpan.data("rendered")) {
        var deleteButton = $('<a class="deleteIcon" href=\'#\'><img class="deleteImg" onclick="deleteFromFancytree()" src="icons8-trash-can-15.png"/></a>');
        nodeSpan.append(deleteButton);
        deleteButton.hide();
        nodeSpan.hover(function () {
          console.log("mouse entered" + data.node.title)
          deleteButton.show();
          node = currentNode;
        }, function () {
          deleteButton.hide();
        });
        nodeSpan.data('rendered', true);
      }
    }
  });
});

function deleteFromFancytree() {
  var text = node.span.innerText
  console.log("This is the text...." + text)
  node.remove();
  console.log("node removed....")
}