nombre = "Tony";
apellido = "Baldessari";
estudiante = `${nombre} ${apellido}`;  // es lo mismo que poner nombre + " " + apellido
estudianteMayus = estudiante.toUpperCase();
estudianteMinus = estudiante.toLowerCase();
cantLetras = estudiante.length;
primeraLetraNombre = nombre.at(0);
ultimaLetraApellido = apellido[apellido.length-1];
eliminaEspacios = estudiante.replace(/ /g, "");
incluido = estudiante.includes(nombre);

console.log("El nombre del estudiante esta incluido: " + incluido); 
