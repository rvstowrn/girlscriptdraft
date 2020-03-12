let el=document.getElementsByClassName('hero')[0];
let balls=[
	{'radius':50,'x':1,'y':40,color: 'red'},
	{'radius':40,'x':10,'y':20,color: 'green'},
	{'radius':30,'x':20,'y':60,color: 'blue'},
	{'radius':20,'x':30,'y':2,color: 'yellow'},
	{'radius':20,'x':40,'y':80,color: 'red'},
	{'radius':25,'x':50,'y':5,color: 'blue'},
	{'radius':30,'x':60,'y':70,color: 'green'},
	{'radius':30,'x':70,'y':6,color: 'red'},
	{'radius':50,'x':80,'y':80,color: 'yellow'},
	{'radius':40,'x':90,'y':50,color: 'blue'}
]
for(let i=0;i<balls.length;i++){
	let node = document.createElement("div");
	let style=`height:${balls[i].radius}px;width:${balls[i].radius}px;background:${balls[i].color};
	border-radius:50%;position:absolute;top:${balls[i].y}%;left:${balls[i].x}%;z-index:-1`
	node.setAttribute('style',style)
	el.appendChild(node);  
}          
