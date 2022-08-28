import { getHellfireClubeSubscriptions, subscribeToHellfireClube } from "./firebase/hellfire-clube.js";

const txtName = document.querySelector('#txtName');
const txtEmail = document.querySelector('#txtEmail');
const txtLevel = document.querySelector('#txtLevel');
const txtCharacter = document.querySelector('#txtCharacter');
const formSubscribe = document.querySelector('#formSubscribe');

formSubscribe.addEventListener('submit', async (event) => {
  event.preventDefault();
  const subscription = {
    name: txtName.value,
    email: txtEmail.value,
    level: txtLevel.value,
    character: txtCharacter.value
  }

  // Salvar no banco de dados!
  const subscriptionId = await subscribeToHellfireClube(subscription);
  alert(`Inscrito com sucesso: ${subscriptionId}`)

  txtName.value = '';
  txtEmail.value = '';
  txtLevel.value = '';
  txtCharacter.value = '';
})

async function loadData() {
  const subiscriptions = await getHellfireClubeSubscriptions();
  console.log(subiscriptions)
}

loadData()