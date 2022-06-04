
checked=false;
function checkedAll (form1) {
	var aa= document.getElementById('form2');
	
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

function CheckAll(chk)
{
	document.getElementById('chkall').style.display='none';
		document.getElementById('unchkall').style.display='';

for (i = 0; i < chk.length; i++)
chk[i].checked = true ;
}

function UnCheckAll(chk)
{
	document.getElementById('unchkall').style.display='none';
		document.getElementById('chkall').style.display='';
for (i = 0; i < chk.length; i++)
chk[i].checked = false ;
}


function CheckAll2(chk)
{
if(document.getElementById('branchName2').checked == true) { 
for (i = 0; i < chk.length; i++)
chk[i].checked = true ;
}
 else {
for (i = 0; i < chk.length; i++)
chk[i].checked = false ;
}
}


function CheckAll4(chk)
{
	//alert(chk)
if(document.getElementById('problemDept').checked == true) { 
for (i = 0; i < chk.length; i++)
chk[i].checked = true ;
}
 else {
for (i = 0; i < chk.length; i++)
chk[i].checked = false ;
}
}


function CheckAll3(chk)
{
if(document.getElementById('subcategory2').checked == true) { 
for (i = 0; i < chk.length; i++)
chk[i].checked = true ;
}
 else {
for (i = 0; i < chk.length; i++)
chk[i].checked = false ;
}
}

function confirmdelete()
{

   var privs = document.getElementsByName("uid[]");
    var privschecked = false;
 for (var i = 0; i < privs.length; i++) {
    if (privs[i].checked) {
     privschecked = true;
       break;
      }
   }
    if (!privschecked) {
    alert('Select atleast one checkbox to delete');
    return false;
  }
  
  
   var confirmmsg = confirm("Do you really want to delete?");
   if(confirmmsg == true)
   {
   document.getElementById("del").value = 3;
   //alert(document.getElementById("act").value);
   }
  
   return true;
}


function confirmact()
{

  var privs = document.getElementsByName("uid[]");
    var privschecked = false;
 for (var i = 0; i < privs.length; i++) {
    if (privs[i].checked) {
     privschecked = true;
       break;
      }
   }
    if (!privschecked) {
    alert('Select atleast one checkbox to Activate');
    return false;
  }
  
  
   var confirmmsg = confirm("Do you really want to Activate?");
   if(confirmmsg == true)
   {
   document.getElementById("act").value = 1;
   //alert(document.getElementById("act").value);
   }
 
  
  
  
   return true;

}


function confirmoutbound()
{

  var privs = document.getElementsByName("uid[]");
    var privschecked = false;
 for (var i = 0; i < privs.length; i++) {
    if (privs[i].checked) {
     privschecked = true;
       break;
      }
   }
    if (!privschecked) {
    alert('Select atleast one checkbox to Activate Outbound Call');
    return false;
  }
  
  
   var confirmmsg = confirm("Do you really want to Activate Outbound Call?");
   if(confirmmsg == true)
   {
   document.getElementById("outbound").value = 4;
   //alert(document.getElementById("act").value);
   }
 
  
  
  
   return true;

}



function confirmticket()
{

  var privs = document.getElementsByName("uid[]");
    var privschecked = false;
 for (var i = 0; i < privs.length; i++) {
    if (privs[i].checked) {
     privschecked = true;
       break;
      }
   }
    if (!privschecked) {
    alert('Select atleast one checkbox to Activate Ticket Cration');
    return false;
  }
  
  
   var confirmmsg = confirm("Do you really want to Activate Ticket Cration?");
   if(confirmmsg == true)
   {
   document.getElementById("ticket").value = 5;
   //alert(document.getElementById("act").value);
   }
 
  
  
  
   return true;

}





function confirmblk()
{
   var privs = document.getElementsByName("uid[]");
    var privschecked = false;
 for (var i = 0; i < privs.length; i++) {
    if (privs[i].checked) {
     privschecked = true;
       break;
      }
   }
    if (!privschecked) {
    alert('Select atleast one checkbox to Block');
    return false;
  }
  
  
  var confirmmsg = confirm("Do you really want to block?");
   if(confirmmsg == true)
   {
   document.getElementById("blk").value = 2;
  // alert(document.getElementById("blk").value);
   }
 
   
  
   return true;
   
   
   
   

}








function confirmdelete222()
{

   
  
   var confirmmsg = confirm("Do you really want to delete?");
   if(confirmmsg == true)
   {
   document.getElementById("de22l").value = 23;
   //alert(document.getElementById("act").value);
   }
  
   return true;
}