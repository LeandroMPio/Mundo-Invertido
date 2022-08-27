const txtName = document.querySelector('#txtName');
const txtEmail = document.querySelector('#txtEmail');
const txtLevel = document.querySelector('#txtLevel');
const txtCharacter = document.querySelector('#txtCharacter');
const btnSubscribe = document.querySelector('#btnSubscribe');
const formSubscribe = document.querySelector('#formSubscribe');

formSubscribe.addEventListener('submit', (event) => {
  event.preventDefault();
  const subscription = {
    name: txtName.value,
    email: txtEmail.value,
    level: txtLevel.value,
    character: txtCharacter.value
  }

  // Salvar no banco de dados!
  console.log(subscription)
})