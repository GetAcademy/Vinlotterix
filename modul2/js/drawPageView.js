function updateViewDrawPage() {
    let html = `<table>
                  <tr>
                    <td><input type="checkbox"
                               onclick="velgAlleEllerIngen(this.checked)"
                               ${getChecked(model.inputs.drawPage.selectAll)}/></td>
                    <td><b>Personer</b></td>
                    <td>
                    </td>
                  </tr>`;
    for (let person of model.inputs.drawPage.list) {
      html += `<tr>
                  <td><input type="checkbox"
                             onclick="velgPerson(${person.id})" 
                             ${getChecked(person.isSelected)}"/></td>
                  <td>${person.name}</td>
                  <td><button class="litenKnapp"  onclick="slettPerson(${person.id})">x</button></td>
                </tr>`;
    }
    html += `<tr>
                <td></td>
                <td colspan="3">
                  <input size="6" type="text" id="nyPerson"/>
                  <button class="litenKnapp" onclick="leggTilPerson()">legg til person</button>
                </td>
             </tr>
             <tr><td>&nbsp;</td></tr>
             <tr>
                <td colspan="3">
                  <button class="knapp" onclick="trekk()">Trekk!</button>
                  <input type="number" size="1" value="${model.inputs.drawPage.drawCount}" onchange="model.inputs.drawPage.drawCount = parseInt(this.value)"/>
                  <button class="" onclick="justerAntall(1)">▲</button>
                  <button class="" onclick="justerAntall(-1)">▼</button>
                </td>
              </tr>
            </table>`;
    document.getElementById('app').innerHTML = `
        <div class="page">
            <div class="header" id="header">
                Vinlotterix 🍷
            </div>
            <div class="innhold">${html}</div>
            <div class="meny">
                <button class="knapp fixed" onclick="visPersoner()">Personer</button><br />
                <button class="knapp fixed" onclick="visTrekninger()">Vinnere</button><br />
            </div>
        </div>  
    `;
  }
  
  function getChecked(isSelected) {
    return isSelected ? 'checked="checked"' : '';
  }