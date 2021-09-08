

var rad1= Math.random();

rad1= rad1*3 +1;
rad1=Math.floor(rad1);

var rad2= Math.random();

rad2= rad2*3 +1;

rad2=Math.floor(rad2);

var str;
var str2;

switch (rad1) {
  case 1:   document.querySelector(".img1").src="stone.jpg"; str=1;
      break;
    case 2:   document.querySelector(".img1").src="paper.jpg"; str=2;
      break;
      case 3:   document.querySelector(".img1").src="scissor.png"; str=3;
        break;

}
switch (rad2) {
  case 1:   document.querySelector(".img2").src="stone.jpg";  str2=1;
    break;
    case 2:   document.querySelector(".img2").src="paper.jpg";  str2=2;
      break;
      case 3:   document.querySelector(".img2").src="scissor.png";  str2=3;
        break;

}

if(str==str2)
{
       document.querySelector("h1").textContent=" DRAW";
       document.querySelector(".p1").style.color="#ffec04";
       document.querySelector(".p2").style.color="#ffec04";


}

else{

if(( str==1 && str2==3)  || (str==2 && str2==1)   || (str==3 && str2==2)    )
{
       document.querySelector("h1").textContent="PLAYER 1 WINS";
       document.querySelector(".p1").style.color="#ffec04";




}
else
{
       document.querySelector("h1").textContent="PLAYER 2 WINS";
        document.querySelector(".p2").style.color="#ffec04";


}

}
