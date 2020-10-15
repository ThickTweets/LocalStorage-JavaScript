$(document).ready(function () {
	$("#signup-form").submit(function () {
		var nombre1 = $("#nombre").val();
		var contraseña = $("#clave").val();

		localstorage.setItem("n1",nombre1);
		localstorage.setItem("p1",contraseña);
	});

	$("#login-form").submit(function (){
		var entradaNombre = $("#nombre2").val();
		var entradaContraseña = $("#contraseña2").val();

		var nombreGuardado = localstorage.getItem("n1");
		var	claveGuardada = localstorage.getItem("p1");

		if (entradaNombre = nombreGuardado && entradaContraseña == claveGuardada) {
			alert("Has ingresado al sistema");
		}
		else {
			alert("Datos insertados incorrectos");
		}
	});
});
