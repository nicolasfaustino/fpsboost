document.getElementById("distance").oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #409232 0%, #76D166 ' + value + '%, #fff ' + value + '%, white 100%)'
};

document.getElementById("light").oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #409232 0%, #76D166 ' + value + '%, #fff ' + value + '%, white 100%)'
};

document.getElementById("texture").oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #409232 0%, #76D166 ' + value + '%, #fff ' + value + '%, white 100%)'
};

document.getElementById("shadow").oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #409232 0%, #76D166 ' + value + '%, #fff ' + value + '%, white 100%)'
};

document.onkeyup = data => {
    if (data["key"] === "Escape"){
        $.post("http://fpsboost/saveInformantion",JSON.stringify({
            distance: document.getElementById("distance").value,
            light: document.getElementById("light").value,
            texture: document.getElementById("texture").value,
            shadow: document.getElementById("shadow").value
        }));
        $(".container").css("display","none");
    }
};

window.addEventListener("message",function(event){
	switch (event["data"]["Action"]){
		case "Display":
			$(".container").css("display","flex");
            document.getElementById("distance").value = event["data"]["distance"]
            document.getElementById("light").value = event["data"]["light"]
            document.getElementById("texture").value = event["data"]["texture"]
            document.getElementById("shadow").value = event["data"]["shadow"]
		break;
	}
});