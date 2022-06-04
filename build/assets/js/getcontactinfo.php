<?php
include 'include/dbe2e.php';

$shid = $_GET['shid'];

 

$selectconatcts = mysqli_query($conne2e,"select * from poorvika_e2e.tbl_contactdetails where cid = '$shid' ");
$fetchcontacts = mysqli_fetch_array($selectconatcts);
 
echo $shinfo = '<table align="center" width="50%" border="0" cellspacing="0" cellpadding="0" style="font-size:14px; ">
  <tr>
    <td width="26%" height="50" valign="top"  style="padding-left:10px;"><strong>Department :</strong></td>
    <td width="74%" height="50" valign="top" >'.strip_tags($fetchcontacts['department']).'</td>
  </tr>
  <tr>
    <td height="50" bgcolor="#FFFFFF" style="padding-left:10px;"><strong>Issue  :</strong></td>
    <td height="50" bgcolor="#FFFFFF"> '.$fetchcontacts['issuename'].'</td>
  </tr>
  <tr>
    <td height="50"  style="padding-left:10px;"><strong>Contact Person :</strong></td>
    <td height="50" >'.$fetchcontacts['contactperson'].'</td>
  </tr>
  <tr>
    <td height="50" bgcolor="#FFFFFF" style="padding-left:10px;"><strong>Mobile Number :</strong></td>
    <td height="50" bgcolor="#FFFFFF">'.$fetchcontacts['mobileno'].'</td>
  </tr>
  <tr>
    <td height="50"  style="padding-left:10px;"><strong>Landline Number :</strong></td>
    <td height="50" >'.$fetchcontacts['landlineno'].'</td>
  </tr>
  <tr>
    <td height="50" bgcolor="#FFFFFF" style="padding-left:10px;"><strong>Mail Id  :</strong></td>
    <td height="50" bgcolor="#FFFFFF">'.$fetchcontacts['mailid'].'</td>
  </tr>
</table>


';
?>

                 
                                             
