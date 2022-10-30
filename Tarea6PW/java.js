function myFunction() {
    var c = 0;

    let N0 = document.getElementById("nombre").value;


    //Validacion numero de control
    let N1 = document.getElementById("num_control").value;
    const regex = /^(m|c)?[0-9]{2}(120|121)[0-9]{3}$/i;
    var numC;
  
    if (regex.test(N1)) {
      text="Numero de control aceptable";
      numC = regex.exec(N1);
      c++;
      var VNC = document.getElementById("VN_control");
      VNC.style.color = 'greenyellow';
    }
    else {
      text="Numero de control inaceptable";
      var VNC = document.getElementById("VN_control");
      VNC.style.color = '#FF0000';
    }
  
    document.getElementById("VN_control").innerHTML = text;

//Validacion telefono
    let N2 = document.getElementById("num_telefono").value;
    const regex3 = /^(443)[0-9]{7}$/i;
  
    if (regex3.test(N2)) {
      text="Numero de telefono aceptable";
      c++;
      var valNumTelefono = document.getElementById("VN_telefono");
      valNumTelefono.style.color = 'greenyellow';
    }
    else {
      text="Numero de telefono inaceptable";
      var valNumTelefono = document.getElementById("VN_telefono");
      valNumTelefono.style.color = '#FF0000';
    }
  
    document.getElementById("VN_telefono").innerHTML = text;

    //Validacion RFC
    let N3 = document.getElementById("num_RFC").value;
    const regex2 = /^[A-Z]{4}([0-9]{6})\w{3}$/i;
    var fechaNac;
  
    if (regex2.test(N3)) {
      text="Numero RFC aceptable";
      fechaNac = regex2.exec(N3);
      c++;
      var valNumRFC = document.getElementById("VN_RFC");
      valNumRFC.style.color = 'greenyellow';
    }
    else {
      text="Numero RFC inaceptable";
      var valNumRFC = document.getElementById("VN_RFC");
      valNumRFC.style.color = '#FF0000';
    }
  
    document.getElementById("VN_RFC").innerHTML = text;


    

    //Validacion correo electronico
    let N4 = document.getElementById("correo").value;
    const regex4 = /^l((m|c)?[0-9]{2}(120|121)[0-9]{3})@morelia.tecnm.mx$/i;
    var correoElectronico;
  
    if (regex4.test(N4)) {
      correoElectronico = regex4.exec(N4);
      if(correoElectronico[1] == numC[0]){
        text="Corrreo electronico aceptable";
        c++;
        var VC = document.getElementById("V_correo");
        VC.style.color = 'greenyellow';
      }
      else {
        text="El numero de control y correo no coinciden";
        var VC = document.getElementById("V_correo");
    VC.style.color = '#FF0000';
      }
    }
    else {
      text="Correo electronico inaceptable";
      var VC = document.getElementById("V_correo");
      VC.style.color = '#FF0000';
    }
  
    document.getElementById("V_correo").innerHTML = text;


    //Mensaje
    if(c == 4){
      text="Usuario verificado: " + N0 +" Nacido en la fecha: " + fechaNac[1];
      var user = document.getElementById("VUser");
      user.style.color = 'greenyellow';
    } else {
      text="Algo esta mal, checa tus datos.";
      var user = document.getElementById("VUser");
      user.style.color = '#FF0000';
      user.style.fontWeight = 'bold';
    }
    document.getElementById("VUser").innerHTML = text;
  
  }