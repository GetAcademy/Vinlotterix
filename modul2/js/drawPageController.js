function velgAlleEllerIngen(alle) {
    model.personer.velgAlle = alle;
    for (let person of model.personer.liste) {
      person.erValgt = alle;
    }
    visPersoner();
  }
  
  function leggTilPerson() {
    const navn = document.getElementById('nyPerson').value;
    const id = model.personer.liste.map(p => p.id).reduce((max, value) => Math.max(max, value), -1) + 1;
    model.personer.liste.push(
      { id: id, navn: navn, erValgt: true });
    visPersoner();
  }
  
  function velgPerson(id) {
    const person = finnPerson(id);
    person.erValgt = !person.erValgt;
    visPersoner();
  }
  
  function slettPerson(id) {
    model.personer.liste = model.personer.liste.filter(p => p.id !== id);
    visPersoner();
  }
  
  function trekk() {
    let antall = model.personer.trekkAntall;
    const personerListe = model.personer.liste.filter(p => p.erValgt);
    const indekser = Array.from(personerListe.keys());
    const vinnere = [];
    while (antall-- > 0 && indekser.length > 0) {
      const tilfeldigIndeks = Math.floor(Math.random() * indekser.length);
      const indeks = indekser.splice(tilfeldigIndeks, 1);
      vinnere.push(personerListe[indeks].navn);
    }
    model.trekninger.unshift({
      vinnere: vinnere,
      tid: lagDatoTekstNåForLagring(),
      deltakere: personerListe.map(p => p.navn)
    });
    visTrekninger();
  }
  
  function justerAntall(delta) {
    model.personer.trekkAntall =
      Math.max(1, model.personer.trekkAntall + delta);
    visPersoner();
  }
  
  function finnPerson(id) {
    return model.personer.liste.filter(p => p.id === id)[0];
  }