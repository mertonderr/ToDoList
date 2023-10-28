let addButton = document.querySelector(".addButton");
let listElement = document.querySelector(".listElement");
let sonucDiv = document.getElementById("sonuc");
let listDiv = document.getElementById("sonuc");
let itemCount = 0; 


listDiv.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        if (event.target.style.textDecoration === "line-through") {
            event.target.style.textDecoration = "none";
        } else {
            event.target.style.textDecoration = "line-through";
        }   
    }   
    else if (event.target.classList.contains("deleteButton")) {
        let listItem = event.target.nextSibling; 
        while (listItem && listItem.tagName !== "LI") {
            listItem = listItem.nextSibling;
        }
        if (listItem && listItem.tagName === "LI") {
            sonucDiv.removeChild(listItem); 
            event.target.remove(); 
            itemCount--; 

            if (itemCount < maxItemCount) {
                addButton.disabled = false;
            }
            
        }       
    }
});


addButton.onclick = function() {

    let kullaniciMetni = listElement.value.trim();
    let maxLength = 10;
    
    if (listElement.length > maxLength) {
        listElement = listElement.slice(0, maxLength) + "\n" + listElement.slice(maxLength);
    }
    if (itemCount >= 6) {
        alert("Maksimum 6 öğe ekleyebilirsiniz. Daha fazla ekleyemezsiniz.");
        return;
    }
    
    if (kullaniciMetni !== "") {
        let sonuc = document.querySelector('#sonuc')
        var deleteButton = document.createElement('div')
        deleteButton.innerText="Sil"
        deleteButton.classList.add('deleteButton')
      
        sonuc.appendChild(deleteButton)
        
        let eskiMetin = sonucDiv.innerHTML;
        
        sonucDiv.innerHTML = eskiMetin + "<br>" + "<li>" + kullaniciMetni;
        listElement.value = "";
        itemCount++; 

      
    }   
    else{
        alert("Boş bir değer giremezsiniz."); 
    }     
};   










