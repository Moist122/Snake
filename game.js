var direction; //0=right 1=down 2=left 3=up
var X;
var Y;
var position;
var previous;
var l;
var score;
var XC;
var YC;
var positionC;

function new_coin()
{
	XC=Math.floor(Math.random()*12+1);
	YC=Math.floor(Math.random()*12+1);
	positionC='b'+XC+'.'+YC;
	for (i=0;i<=l+1;i++)
	{
		if (positionC==position[i]) {new_coin(); return;}
	}
	document.getElementById(positionC).innerHTML='<img src="img/coin.gif" />'
}

function mainmenu()
{
	document.getElementById("menu").innerHTML='<div class="button" onclick="play()">New game</div><br /><div class="button" onclick="options()">Options</div><br /><div class="button" onclick="credits()">Credits</div><br /><div class="button" onclick="instruction()">Instruction</div>';
}

function create()
{
	var board="";
	for (i=0;i<12;i++)
	{
	var i1=i+1;
		for (j=0; j<12; j++)
		{
		var j1=j+1;
		board=board+'<div class="board" id="b'+j1+'.'+i1+'"></div>';
		}
	}
	document.getElementById("game").innerHTML=board;
	l=0;
}

function game_over()
{
	var score=l-2;
	document.getElementById("menu").innerHTML="<br />You lost!<br />Score: "+score+'<br /><br /><div class="button" onclick="location.reload()">Main menu</div>';
}

function win()
{
	var score=l-2;
	document.getElementById("menu").innerHTML="<br />Congratulations!<br />You won!<br />Score: "+score+'<br /><br /><div class="button" onclick="location.reload()">Main menu</div>';
}

//movement
function move()
{	
	switch(direction)
	{
		//right
		case 0:
		{
			X++;
			if (X>12)
			{
				game_over();
			}
			else
			{
				for (i=l+1;i>0;i--)
				{
					position[i]=position[i-1];
				}
			
				position[0]='b'+X+'.'+Y;
				document.getElementById(position[0]).innerHTML='<img src="img/head0.gif" />';
				switch (previous[0])
				{
					case 0: {document.getElementById(position[1]).innerHTML='<img src="img/body02.gif" />'; break;}
					case 1: {document.getElementById(position[1]).innerHTML='<img src="img/body_bent3.gif" />'; break;}
					case 3: {document.getElementById(position[1]).innerHTML='<img src="img/body_bent4.gif" />'; break;}
				}
				for(i=l;i>0;i--)
				{
					previous[i]=previous[i-1];
				}
				previous[0]=0;
				break;
			}
		}
	
		//down
		case 1:
		{
			Y++;
			if (Y>12)
			{
				game_over();
			}
			else
			{
				for (i=l+1;i>0;i--)
				{
					position[i]=position[i-1];
				}
			
				position[0]='b'+X+'.'+Y;
				document.getElementById(position[0]).innerHTML='<img src="img/head1.gif" />';
				switch (previous[0])
				{
					case 0: {document.getElementById(position[1]).innerHTML='<img src="img/body_bent1.gif" />'; break;}
					case 1: {document.getElementById(position[1]).innerHTML='<img src="img/body13.gif" />'; break;}
					case 2: {document.getElementById(position[1]).innerHTML='<img src="img/body_bent4.gif" />'; break;}
				}
				for(i=l;i>0;i--)
				{
					previous[i]=previous[i-1];
				}
				previous[0]=1;
				break;
			}
		}
		//left
		case 2:
		{
			X--;
			if (X<1)
			{
				game_over();
			}
			else
			{
				for (i=l+1;i>0;i--)
				{
					position[i]=position[i-1];
				}
			
				position[0]='b'+X+'.'+Y;
				document.getElementById(position[0]).innerHTML='<img src="img/head2.gif" />';
				switch (previous[0])
				{
					case 1: {document.getElementById(position[1]).innerHTML='<img src="img/body_bent2.gif" />'; break;}
					case 2: {document.getElementById(position[1]).innerHTML='<img src="img/body02.gif" />'; break;}
					case 3: {document.getElementById(position[1]).innerHTML='<img src="img/body_bent1.gif" />'; break;}
				}
				for(i=l;i>0;i--)
				{
					previous[i]=previous[i-1];
				}
				previous[0]=2;
				break;
			}
		}
		//up
		case 3:
		{
			Y--;
			if (Y<1)
			{
				game_over();
			}
			else
			{
				for (i=l+1;i>0;i--)
				{
					position[i]=position[i-1];
				}
			
				position[0]='b'+X+'.'+Y;
				document.getElementById(position[0]).innerHTML='<img src="img/head3.gif" />';
				switch (previous[0])
				{
					case 0: {document.getElementById(position[1]).innerHTML='<img src="img/body_bent2.gif" />'; break;}
					case 2: {document.getElementById(position[1]).innerHTML='<img src="img/body_bent3.gif" />'; break;}
					case 3: {document.getElementById(position[1]).innerHTML='<img src="img/body13.gif" />'; break;}
				}
				for(i=l;i>0;i--)
				{
					previous[i]=previous[i-1];
				}
				previous[0]=3;
				break;
			}
		}
	}
	for (i=3;i<=l;i++)
		{if (position[0]==position[i]) {game_over(); return;}}
	
	if (position[0]==positionC) {new_coin(); l++; if (l==52) {win(); return;}}
	
	else
	{
	//tail
		if (position[0]!=position[l+1]){document.getElementById(position[l+1]).innerHTML="";}
		switch (previous[l-1])
		{
			case 0: {document.getElementById(position[l]).innerHTML='<img src="img/tail0.gif" />'; break;}
			case 1: {document.getElementById(position[l]).innerHTML='<img src="img/tail1.gif" />'; break;}
			case 2: {document.getElementById(position[l]).innerHTML='<img src="img/tail2.gif" />'; break;}
			case 3: {document.getElementById(position[l]).innerHTML='<img src="img/tail3.gif" />'; break;}
		}
	}
	setTimeout("move()",400);
}
//start
function play()
{
	create();
	
	position=new Array(54);
	previous=new Array(54);
	X=3;
	Y=6;
	direction=0;
	previous[0]=0;
	previous[1]=0;
	previous[2]=0;
	l=2;
	document.getElementById("b3.6").innerHTML='<img src="img/head0.gif" />';
	position[0]='b3.6';
	document.getElementById("b2.6").innerHTML='<img src="img/body02.gif" />';
	position[1]='b2.6';
	document.getElementById("b1.6").innerHTML='<img src="img/tail0.gif" />';
	position[2]='b1.6';
	
	document.getElementById("menu").innerHTML='<br />Control:<br /><br /><span onclick="up()" class="control" id="up">↑</span><br /><span onclick="left()" class="control" id="left">← </span><span onclick="down()" class="control" id="down">↓</span><span onclick="right()" class="control" id="right">→</span><span style="clear:both"></span>';
	new_coin();
	setTimeout("move()",400);
}

//keyboard control
/*direction.onkeydown = function(e) {
  e = e || event
  switch(e.keyCode) {
	case 37: // left
	{
		this.value=2;
		break;
	}
	case 38: // up
	{
		this.value=3;
		break;
	}
	case 39: // right
	{	
		this.value=0;
		break;
	}
	case 40: // down
	{
		direction=1;
		break;
	}
  }
}*/


//control
function right()
{
	if (previous[0]!=2) direction=0;
}
function down()
{
	if (previous[0]!=3) direction=1;
}
function left()
{
	if (previous[0]!=0) direction=2;
}
function up()
{
	if (previous[0]!=1) direction=3;
}

function options()
{
	document.getElementById("menu").innerHTML='<br />Options:<br /><br />Snake colors, sounds and difficulty levels!<br /><br />Soon<br /><br /><div class="button" onclick="mainmenu()">Main menu</div>' //maybe even multiplayer?
}
function credits()
{
	document.getElementById("menu").innerHTML='<br />Credits:<br /><br />Everything: Moist<br /><br /><div class="button" onclick="mainmenu()">Main menu</div>'
}
function instruction()
{
	document.getElementById("menu").innerHTML='<br />Instruction:<br /><br />Use arrow keys on the screen to control the snake and collect 50 coins. Avoid touching borders and your tail. Thats it. ;)<br /><br /><div class="button" onclick="mainmenu()">Main menu</div>'
}