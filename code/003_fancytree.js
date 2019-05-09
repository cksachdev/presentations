$(function () {
  $("body").html("<dir id='tree'></dir>");
  $('#tree').fancytree({
    checkbox: true,
    extensions: ["childcounter"],
    source: {
      url: "./data/002.json"
    },
    childcounter: {
      deep: true,
      hideZeros: true,
      hideExpanded: true
    },
    loadChildren: function (event, data) {
      // update node and parent counters after lazy loading
      data.node.updateCounters();
    }
  });
});