let liParent = document.querySelector(".list-group");
let input = document.querySelector(".form-control");


input.onkeypress = function(e) {
    
    if (e.keyCode == 13 && input.value != "") {
        liParent.innerText = "";
        for (let i = 1; i <= input.value; i++) {
            let box = document.createElement("div");
            box.classList.add("elements-box");
            liParent.append(box);
            let li = document.createElement("li");
            li.classList.add("list-group-item","mt-2");
            li.innerText = i;
            let icon = document.createElement("i");
            icon.classList.add("fas","fa-times","mt-2");
            box.append(li);
            box.append(icon);
            
            icon.onclick = function() {
                box.remove();
            }
            
            
        }
        input.value = "";
       
    }
    
   
}