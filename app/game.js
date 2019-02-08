let target = {
  name: "steven",
  health: 100,
  hits: 0,
  items: ['hpotion', 'steriod', 'pwn']

}
let items = {
  hpotion: { name: 'hpotion', modifier: 2, discription: 'Heals' },
  steroid: { name: 'steroid', modifier: 4, discription: 'RAGE' },
  pwn: { name: 'pwn', modifier: 100, discription: 'WIN' }


}
let kick = 10

function slap() {
  if (target.health >= 1) {
    target.health--;
    target.hits++
  }
  update()
}
function roundhouse() {
  if (target.health >= 1) {
    target.health -= kick;
    target.hits++
  }
  update()
}

function crobar() {
  if (target.health >= 1) {
    target.health -= 20;
    target.hits++;
  }
  update()
}

function update() {
  document.getElementById('name').innerText = `${target.name}`
  document.getElementById('health').innerText = `${target.health}`
  document.getElementById('hits').innerText = `${target.hits}`
}
update()
