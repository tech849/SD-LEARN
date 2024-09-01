function menubox(){ 
document.getElementById("mout1").style.display="inline";
document.getElementById("mout1").innerHTML="<button onclick='close1();'style='font-size:40px;border:0px solid transparent;background-color:transparent;color:gold;'>X</button><br><ul onclick='viewchm();'>COMPUTER&nbsp;HARDWARE&nbsp;<br>MAINTAINANCE</ul><ul onclick='viewchm();'>MOBILE&nbsp;COMPUTING</ul></div>";
 } 
function close1(){
document.getElementById("mout1").style.display="none";
 document.getElementById("mout1").innerHTML="<embed src='https://i.ibb.co/59xZxtQ/image.png' style='width:35px;height:35px; border-radius:30px;position:absolute;left:10px;background-color:green;top:0px;'alt='MENU'onclick='menubox();'></embed></p></td>"; 
}