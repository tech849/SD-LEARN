function mysearch(){
         var data1 = document.getElementById("searchin").value;
         if(data1.toUpperCase() == 'CHM'){
          document.getElementById("searchout1").innerHTML="<h5>CHM:COMPUTER HARDWARE MAINTAINANCE</h5><hr><br><table><tr><td><embed style='width:190px;height:190px;'src='/motherboard.png'></embed></td><td><a href='/CHM_R_PANDA.pdf'>DOWNLOAD</a></td><br><td><a onclick='viewchm();'>VIEW</a></td></tr></table>";
}
 else if(data1.toUpperCase() == 'C'){
document.getElementById("searchout1").innerHTML="<h5><h3>CHM:</h3>COMPUTER HARDWARE MAINTAINANCE</h5><hr><br><tr><td><embed style='width:190px;height:190px;'src='/motherboard.png'></embed></td><td><a href='/CHM_R_PANDA.pdf'>DOWNLOAD</a></td></tr></table>";
}
else {
document.getElementById("searchout1").innerHTML="<p>Loading......</p>" ;
}
}
function  viewchm(){
document.getElementById("searchout1").innerHTML="<embed style='width:99%;height:99%;' src='/CHM_R_PANDA.pdf'></embed>";
}
