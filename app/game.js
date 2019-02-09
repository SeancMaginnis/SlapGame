let target = {
  name: "steven",
  health: 100,
  hits: 0,
  items: []

}
let items = {
  hpotion: { name: 'hpotion', modifier: -2, discription: 'Heals' },
  steroid: { name: 'steroid', modifier: 4, discription: 'RAGE' },
  pwn: { name: 'pwn', modifier: 100, discription: 'WIN' }

}
let kick = 10,

  modifierActivated = false

function slap() {
  if (target.health >= 1) {
    let damage = 1 + addMods();
    target.health -= damage;
    target.hits++
  }
  update()
}
function roundhouse() {
  if (target.health >= 1) {
    let damage = 10 + addMods();
    target.health -= damage;
    target.hits++
  }
  update()
}

function crowbar() {
  if (target.health >= 1) {
    target.health -= 20;
    target.hits++;
  }
  update()
}
function sshot() {
  if (modifierActivated == false) {
    target.items.push(items.steroid);
    modifierActivated = true;
  }
  update()
}
function potion() {
  if (modifierActivated == false) {
    target.items.push(items.hpotion);
    modifierActivated = true;
  }
  update()
}
function pwn() {
  if (modifierActivated == false) {
    target.items.push(items.pwn);
    modifierActivated = true
  }
}
function addMods() {
  let modifierTotal = 0;
  for (let i = 0; i < target.items.length; i++) {
    modifierTotal = target.items[i].modifier;
  }
  return modifierTotal
}

function update() {
  document.getElementById('name').innerText = `${target.name}`
  document.getElementById('hits').innerText = `${target.hits}`
  if (target.health <= 0) {
    document.getElementById('health').innerText = 'YOU WIN'
  }
  else {
    document.getElementById('health').innerText = `${target.health}`
  }
}
update()
