function controlPass()
{
	let mypass=document.getElementById("user_password").value;
	let myConPass=document.getElementById("conPass").value;
	let condition1=(mypass!="")&&(myConPass!="");
	let condition2=(mypass.length>=8)&&(mypass.length<=20);
	let condition3=(myConPass.length>=8)&&(myConPass.length<=20);
	
	
	if(condition1&&condition2&&condition3)
	{	
        
		if(mypass===myConPass)
		{
			document.getElementById("myForm").addEventListener("submit", function(event)
																	     { 
																		   this.submit();
																	     });
		}
		else
		{
			const checking=document.getElementById("warnUsers");
			if(checking===null)
			{
				const warning=document.createElement("p");
				warning.setAttribute("id","warnUsers");
				warning.innerText = "*Passwords do not match!";
				const collection=document.getElementsByClassName("fcol");
				collection[0].appendChild(warning);
			}
			document.getElementById("myForm").addEventListener("submit", function(event)
																	     { 
																		   event.preventDefault();
																	     });
			document.getElementById("user_password").value="";
			document.getElementById("user_password").style.borderColor="red";
			
			document.getElementById("conPass").value="";
			document.getElementById("conPass").style.borderColor="red";
		}
	}
}

document.getElementById("CreateAcc").addEventListener("click", controlPass);