function planning_menu() {
	document.getElementById("planning_dropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.drop_button')) {
    var dropdowns = document.getElementsByClassName("dropdown_content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 