nombre = "Tony";
apellido = "Baldessari";
estudiante = `${nombre} ${apellido}`;  // es lo mismo que poner nombre + " " + apellido
estudianteMayus = estudiante.toUpperCase();
estudianteMinus = estudiante.toLowerCase();
cantLetras = estudiante.length;
primeraLetraNombre = nombre.charAt(0);
ultimaLetraApellido = apellido.charAt(9);
eliminaEspacios = estudiante.trim();
incluido = estudiante.includes("Tony");

console.log("El nombre del estudiante esta incluido: " + incluido); 
