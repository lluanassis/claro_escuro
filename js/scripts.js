function mudaModo(){
	mudaClasses();
	mudaTexto();
}

function mudaClasses(){
	button.classList.toggle(darkModeClass);
	h1.classList.toggle(darkModeClass);
	body.classList.toggle(darkModeClass);
	footer.classList.toggle(darkModeClass);
}

function mudaTexto(){
	const lightMode = "Modo Claro";
	const darkMode = "Modo Escuro";

	if(button.classList.contains(darkModeClass)){
		button.innerHTML = lightMode;
		h1.innerHTML = '<i class="fas fa-moon" aria-hidden="true"></i>' + ' ' +  darkMode + " Ligado";
		return;
	}

	button.innerHTML = darkMode;
	h1.innerHTML = '<i class="fas fa-sun" aria-hidden="true"></i>' + ' ' + lightMode + " Ligado";
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

console.log(body);

button.addEventListener('click', mudaModo);