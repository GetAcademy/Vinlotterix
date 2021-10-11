function selectAllOrNone(selectAll) {
    model.inputs.drawPage.selectAll = selectAll;
    for (let person of model.inputs.drawPage.list) {
      person.isSelected = selectAll;
    }
    updateView();
  }
  
  function addPerson() {
    const name = model.inputs.drawPage.name;
    const maxId = model.inputs.drawPage.list.map(p => p.id).reduce((max, value) => Math.max(max, value), -1);
    model.personer.liste.push(
      { id: maxId+1, name: name, isSelected: true });
    updateView();
  }
  
  function selectPerson(id) {
    const person = findPerson(id);
    person.isSelected = !person.isSelected;
    updateView();
  }
  
  function deletePerson(id) {
    model.inputs.drawPage.list = model.inputs.drawPage.list.filter(p => p.id !== id);
    updateView();
  }
  
  function draw() {
    let count = model.inputs.drawPage.trekkAntall;
    const selectedPeople = model.inputs.drawPage.liste.filter(p => p.isSelected);
    const indexes = Array.from(selectedPeople.keys());
    const winners = [];
    while (count-- > 0 && indexes.length > 0) {
      const randomIndex = Math.floor(Math.random() * indexes.length);
      const index = indexes.splice(randomIndex, 1);
      winners.push(selectedPeople[index].name);
    }
    model.draws.unshift({
      winners: winners,
      time: lagDatoTekstNåForLagring(),
      participants: selectedPeople.map(p => p.name)
    });
    updateView();
  }
  
  function changeDrawCount(delta) {
    model.inputs.drawPage.drawCount =
      Math.max(1, model.inputs.drawPage.trekkAntall + delta);
    updateView();
  }
  
  function findPerson(id) {
    return model.inputs.drawPage.liste.find(p => p.id === id);
  }