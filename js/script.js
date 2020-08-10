window.addEventListener('load', start);

var name = null;

function start() {
  name = document.querySelector('#Label');
  Label.addEventListener('keyup', countName);
}

function countName(event) {
  var countName = event.target.value;
  search(countName);
}

function search(countName) {
  const allpeople = people.results.map((person) => {
    return {
      name: person.name.first + ' ' + person.name.last,
      idade: person.dob.age,
      gender: person.gender,
      imagem: person.picture.large,
    };
  });

  const filterName = allpeople.filter((people) =>
    people.name.toLowerCase().includes(countName.toLowerCase())
  );
  console.log(filterName);
  printfilter(filterName);
}

function printfilter(filterName) {
  var html1 = '<div>';

  filterName.forEach(({ name, imagem, idade }) => {
    const html = `
      <div class="Box1">
        <img src="${imagem}" alt="${name}" class="circle">
        <label class="Name_age">${name} , ${idade} anos</label>
      </div>
    `;

    html1 = html1 + html;
  });
  html1 = html1 + '</div>';
  var Box1 = document.getElementById('2');
  Box1.innerHTML = html1;
  dostatic(filterName);
}

function dostatic(filterName) {
  const totalages = filterName.reduce((accumulator, current) => {
    return accumulator + current.idade;
  }, 0);

  let genderfemale = 0;
  for (let i = 0; i < filterName.length; i++) {
    if (filterName[i].gender == 'female') {
      genderfemale = genderfemale + 1;
    }
  }

  let gendermale = 0;
  for (let i = 0; i < filterName.length; i++) {
    if (filterName[i].gender == 'male') {
      gendermale = gendermale + 1;
    }
  }

  let allpeopleselect = 0;
  for (let i = 0; i < filterName.length; i++) {
    allpeopleselect = allpeopleselect + 1;
  }

  const Media_ages = totalages / allpeopleselect;
  let htmlstatisc = '<div>';

  htmlstatisc =
    htmlstatisc +
    `
    <div class="4">
      <p class="Name_age">Soma das idades: ${totalages}</p>
      <p class="Media_age">Media das idades: ${Media_ages.toFixed(2)}</p>
      <p class="genderfemale">Mulheres: ${genderfemale}</p>
      <p class="gendermale">Homens: ${gendermale}</p>
  </div>
`;

  htmlstatisc = htmlstatisc + '</div>';
  var Box2 = document.getElementById('3');
  Box2.innerHTML = htmlstatisc;

  let search = `<p class="search"> Usuarios encontrados: ${allpeopleselect}</p>
`;
  const searcher = document.getElementById('search');
  searcher.innerHTML = search;
}
