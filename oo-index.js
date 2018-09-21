const eventArea = document.getElementById('event_area')
const imageArea = document.getElementById('image_area')

const restartButton = document.getElementById('restart').addEventListener("click",()=> Unicorn.restart())
const attackButton = document.getElementById('attack').addEventListener("click",()=> Unicorn.attack())
const defendButton = document.getElementById('defend').addEventListener("click",()=> Unicorn.defend())
const healButton = document.getElementById('heal').addEventListener("click",()=> Unicorn.heal())
const breakdanceButton = document.getElementById('breakdance').addEventListener("click",()=> Unicorn.breakdance())
const eatButton = document.getElementById('eat').addEventListener("click",()=> Unicorn.eatCronut())

class Unicorn {
  constructor(name, occupation) {
    this.name = name;
    this.occupation = occupation;
    this.health = 1000
  }


    static restart() { //defined without an object
    while (eventArea.hasChildNodes()) {
        eventArea.removeChild(eventArea.lastChild);
    }
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("Out on the street, ready to go!"));
    eventArea.prepend(div);
    imageArea.className = 'new';
  }

   static attack() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("'ATTAAAAAAAAAK!''"));
    eventArea.prepend(div);
    imageArea.className = 'attack';
  }

   static defend() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("You put sunglasses on."));
    eventArea.prepend(div);
    imageArea.className = 'defend';
  }

   static heal() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("You feel refreshed after yoga."));
    eventArea.prepend(div);
    imageArea.className = 'heal';
  }

   static breakdance() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("It's really spinning class"));
    eventArea.prepend(div);
    imageArea.className = 'breakdance';
  }

   static eatCronut() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("You've gained 1000 health points."));
    eventArea.prepend(div);
    imageArea.className = 'eat';
  }

} //unicorn class

unicorn1 = new Unicorn('Justin', 'dev')
// debugger
