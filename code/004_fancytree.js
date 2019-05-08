$(function(){
    $('#tree').fancytree({
      checkbox: true,
      selectMode: 3,
      source:[{"title":"Node1","key":"Node1", "folder":true},
              {"title":"Node2","key":"Node2", "folder":false},
              {"title":"Node3", "folder":false, "children":[
                {"title":"Node3Child1","checkbox":false, "folder":false},
                {"title":"Node3Child2", "folder":false},
                {"title":"Node3Child3", "folder":false},
              ]},
             ],
       activate: function(event, data){
                $("#status").text("Activate: " + data.node);
            },
         
      
    });
    $('#btn').click(function(){
      var treeSelected = $('#tree').fancytree("getTree"),
          nodeSelected2 = treeSelected.getNodeByKey("Node2");
              nodeSelected2.toggleSelected()
    });
    });