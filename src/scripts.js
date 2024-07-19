var mode = "email"
			let btn = document.querySelector("#submit");
			//make an onkeypress for .main input
			let email = document.querySelector(".main input");
			email.onkeyup=()=>{
				if (event.key === 'Enter') {
							btn.click()
						}
				if(mode=="email"){
					if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value))
					{
						btn.style.display="block"
						btn.style.opacity=1
						
					}
					else
					{
						btn.style.display="none"
						btn.style.opacity=0
					}
				}
			}

			btn.onclick=()=>{
				
				btn.innerHTML=`<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><style>.spinner_aj0A{transform-origin:center;animation:spinner_KYSC .75s infinite linear}@keyframes spinner_KYSC{100%{transform:rotate(360deg)}}</style><path fill="white" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" class="spinner_aj0A"/></svg>`
				if(mode=="email"){
				setTimeout(change, 2000)
				}
				else{
					//window.location.href("index.html")
				}
			}
			var change = () => {
				mode="password"
				email.value=""
				email.type="password"
				btn.style.display="block"
				btn.style.opacity=1
				document.querySelector(".main h1").innerText="Welcome Back!"
				btn.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
						</svg>`
				document.querySelector("a.forgotpsw").style.display="block"
				email.parentElement.querySelector("label").innerText="Password"
			}
			let i = 120
			function animate(){
				document.body.style.setProperty("--degs", i+"deg")
				i+=0.2
			}
			setInterval(animate, 20)