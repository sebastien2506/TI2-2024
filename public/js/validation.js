function validateForm(e) {
  const nom = document.getElementById("nom").value;
  const prenom = document.getElementById("prenom").value;
  const mail = document.getElementById("email").value;
  const mess = document.getElementById("message").value;


  if (nom.length > 100 || prenom.length > 100||prenom.trim().length==0) {
    alert("Le nom ou prénom doit avoir au max 100 caractéres");
    return false;
  }     else if (!/\./.test(mail)) {
    alert("email doit contenir  un . ");
    return false;
}    else if (!/@/.test(mail)) {
  alert("email doit contenir un @ ");
  return false;
}
  else if (!/@.*\./.test(mail)) {
    alert("apres le @ il faut le . pas avant !!!!!! ");
    return false;}
else if (mess.trim().length === 0 || mess.trim().length>600)
  {
    alert("faut au moins 1 character et max 600")
    return false;
  }

  alert("Bienvenue " + prenom);
  return true;
}
