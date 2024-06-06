async function titanic() {
    const requestURL = "https://lpbgith.github.io/my-repository/JSON/titanic.json";
    const response = await fetch(requestURL);
    const data = await response.json();
    
    content(data);
  }
  
  function content(data) {

    const mainElement = document.querySelector('main');

    data.forEach((element) => {
      const card = document.createElement('div');
      card.classList.add('card');
  
      if (element.Survived === 1) {
        element.Survived = 'Sì';
      } else if (element.Survived === 0) {
        element.Survived = 'No';
      }
  
      const name = document.createElement('h4');
      name.textContent = `Name: ${element.Name}`;
  
      const sex = document.createElement('p');
      sex.textContent = `Sex: ${element.Sex}`;
  
      const age = document.createElement('p');
      age.textContent = `Age: ${element.Age}`;
  
      const start = document.createElement('p');
      start.textContent = `Embarked: ${element.Embarked}`;
  
      const classe = document.createElement('p');
      classe.textContent = `Class: ${element.Pclass}`;
  
      const survive = document.createElement('p');
      survive.textContent = `Survived: ${element.Survived}`;
  
  
      card.appendChild(name);
      card.appendChild(sex);
      card.appendChild(age);
      card.appendChild(start);
      card.appendChild(classe);
      card.appendChild(survive);
  
      mainElement.appendChild(card);
    });
  }
  
  titanic();