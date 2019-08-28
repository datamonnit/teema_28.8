window.onclick = function(event){
    console.log(event.target);
    if(!event.target.matches('.drop-btn')){
        var dropdowns = document.getElementsByClassName("dropdown-content");
        console.log(dropdowns);
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
    }
}

function blockToggle(blockId) {
    console.log(blockId);
    var x = document.getElementById(blockId);
    x.classList.toggle("responsive");
    // console.log(x);
    // if (x.className === "topnav") {
    //     x.className += " responsive";
    // } else {
    //     x.className = "topnav";
    // }
}

function childToggle(x){
    var subMenu = x.nextSibling.nextSibling;
    subMenu.classList.toggle("show");
    // if (subMenu.style.display != 'block') {
    //     subMenu.style.display = 'block';
    // } else {
    //     subMenu.style.display = 'none';
    // }
    
}