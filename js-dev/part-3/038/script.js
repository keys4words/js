// localStorage.setItem('number', 1);

// console.log(localStorage.getItem("number"));

// localStorage.removeItem('number');

// localStorage.clear();


window.addEventListener("DOMContentLoaded", function(){
    let checkbox = document.getElementById('rememberMe'),
        change = document.getElementById('change'),
        form = document.getElementsByTagName('form')[0];

    if(localStorage.getItem('isChecked') === 'true') {
        checkbox.checked = true;
    }

    if(localStorage.getItem('bg') === "changed"){
        form.style.backgroundColor = "#FF4746";
    }
    
    checkbox.addEventListener('click', function() {
        localStorage.setItem('isChecked', true);
    });

    change.addEventListener('click', function () {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = "#FF4746";
    });

    let person = {
        name: 'Max',
        age: 41,
        tech: ['python', 'js']
    };

    let serializedPerson = JSON.stringify(person);
    localStorage.setItem('Maxim', serializedPerson);
    
    console.log(JSON.parse(localStorage.getItem('Maxim')));
    

});