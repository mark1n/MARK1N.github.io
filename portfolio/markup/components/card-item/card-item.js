
var archiveLink = document.querySelectorAll('.card-item-archive .card-item__link');

for (var i = 0; i < archiveLink.length; i++) {
	archiveLink[i].addEventListener('click', function(e) {
		e.preventDefault();
	});	
}






