
let text = ['Hello' , 'my' , 'name' , 'is' , 'Asif' ];
let greetingEl = document.querySelector('#greeting-el')

for ( i = 0; i < text.length; i++){
    greetingEl.textContent += text[i] + " ";
}

