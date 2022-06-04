

$(document).ready(function(){	
	var employeeData = $('#expenselist').DataTable({
								   
		"lengthChange": false,
		"processing":true,
		"serverSide":true,
		"order":[],
	
		"ajax":{
			url:"expenseaction.php?act=$act",
			type:"POST",
			data:{action:'listEmployee'},
			dataType:"json"
		},
		"columnDefs":[
			{
				"targets":[0, 6, 7],
				"orderable":false,
			},
		],
		"pageLength": 5
	});	
	

	  


});


	
 function deleteconfirm(delid) {
	  
	  alert("gfdgdg");
	  var x = confirm('Are you sure delete?');
	  if(x) {
	  window.location.href = 'expenseinvoices.php?delid='+delid+'&act=del&flid=5';
	  }
	  
	  }
	  
 	  checked=false;
function checkedAll () {
	alert("ffsdf");
	var aa= document.getElementById('form1');
	
	 if (checked == false)
          {
           checked = true
          }
        else
          {
          checked = false
          }
	for (var i =0; i < aa.elements.length; i++) 
	{
	 aa.elements[i].checked = checked;
	}
      }