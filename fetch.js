function mysearch(){
         var data1 = document.getElementById("searchin").value;
         
         if(data1.toUpperCase() == 'CHM'){  
         document.getElementById("searchout3").innerHTML="<table><tr><td><embed style='width:250px;height:auto;'src='https://i.ibb.co/bNVQGhp/CHM-BY-R-PANDA.jpg' href=''></embed></td><td><a href='https://tech849.github.io/SD-LEARN/CHM-R.PANDA'>CHM: R.PANDA(COMPLETE NOTE)</a></td></tr><tr><td><embed style='width:250px;height:auto;'src='https://i.ibb.co/B66j0dZ/image.jpg' href='https://tech849.github.io/SD-LEARN/CHM-AN'></embed></td><td><a href='https://tech849.github.io/SD-LEARN/CHM-AN'>CHM: ANONYMOUS(CHAPYER-3)</a></td></tr></table>";
}
 else if(data1.toUpperCase() == 'C'){
document.getElementById("searchout3").innerHTML="<table><tr><td><embed style='width:250px;height:auto;'src='https://i.ibb.co/bNVQGhp/CHM-BY-R-PANDA.jpg' href='https://tech849.github.io/SD-LEARN/CHM-R.PANDA'></embed></td><td><a href='https://tech849.github.io/SD-LEARN/CHM-R.PANDA'>CHM: R.PANDA(COMPLETE NOTE)</a></td></tr><tr><td><embed style='width:250px;height:auto;'src='https://i.ibb.co/B66j0dZ/image.jpg' href='https://tech849.github.io/SD-LEARN/CHM-AN'></embed></td><td><a href='https://tech849.github.io/SD-LEARN/CHM-AN'>CHM: ANONYMOUS(CHAPYER-3)</a></td></tr></table>";
}
  if(data1.toUpperCase() == 'SQL'){
          document.getElementById("searchout3").innerHTML="<table><tr><td><embed style='width:250px;height:auto;'src='https://i.ibb.co/VB1swdG/image.jpg'href='https://tech849.github.io/SD-LEARN/SQL'></embed></td><td><a href='https://tech849.github.io/SD-LEARN/SQL'>SQL:STRUCTURAL QUERRY LANGUAGE</a></td></tr></table>";
}
  if(data1.toUpperCase() == 'S'){
          document.getElementById("searchout3").innerHTML="<table><tr><td><embed style='width:250px;height:auto;'src='https://i.ibb.co/VB1swdG/image.jpg'href='https://tech849.github.io/SD-LEARN/SQL'></embed></td><td><a href='https://tech849.github.io/SD-LEARN/SQL'>SQL:STRUCTURAL QERRY LANGUAGE</a></td></tr></table>";
}
}