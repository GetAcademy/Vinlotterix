function lagDatoTekstForVisning(dato) {
  return dato.toLocaleString().replace(',', '').substr(0, 15);
}

function lagDatoTekstForLagring(dato) {
  return dato.toISOString().substr(0, 16).replace('T', ' ');
}

function lagDatoTekstNåForLagring() {
  return lagDatoTekstForLagring(new Date());
}