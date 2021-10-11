// view
const dagsNavn = [
    'søndag', 'mandag', 'tirsdag',
    'onsdag', 'torsdag', 'fredag',
    'lørdag'
];

function updateViewWinnersPage() {
    let html = '';
    let cssClass = 'førsteTrekning';
    for (let trekning of model.draws) {
        const tid = new Date(trekning.time);
        const datoTekst = lagDatoTekstForVisning(tid);
        const ukedag = dagsNavn[tid.getDay()];
        const vinnere = trekning.winners;
        const deltakere = trekning.participants;
        const vinnerOrd = vinnere.length === 1 ? 'Vinneren' : 'Vinnerne';

        html +=
            `<p>
          <small>${ukedag} ${datoTekst}</small><br/>
          <b class="${cssClass}">${vinnerOrd} er ${createTextList(vinnere)}!</b><br/>
          <small>Trukket fra totalt ${deltakere.length} personer: ${createTextList(deltakere)}</small>
      </p>`;
        cssClass = '';
    }
    document.getElementById('innhold').innerHTML = html;
}

function createTextList(liste) {
    if (liste.length === 0) return '';
    if (liste.length === 1) return liste[0];

    const tekstListe = liste.join(', ');
    const indexSisteKomma = tekstListe.lastIndexOf(',');
    return tekstListe.substr(0, indexSisteKomma) +
        ' og ' + tekstListe.substr(indexSisteKomma + 1);
}