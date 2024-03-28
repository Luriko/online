const button = document.getElementById('send');
const phone = document.getElementById('phone');
const message = document.getElementById('message');

button.disabled = true;
// Маска ввода
phone.addEventListener('input', function() {
    let value = phone.value.replace(/\D/g, ''); 

    if (value.length == 0) {
        phone.value = '' + value;
    }
    else if (value.length < 3) {
        phone.value = '+' + value;
    } else if (value.length < 7) {
        phone.value = '+' + value.substring(0, 1) + ' (' + value.substring(1);
    } else if (value.length < 10) {
        phone.value = '+' + value.substring(0, 1) + ' (' + value.substring(1, 4) + ') ' + value.substring(4);
    } else if (value.length < 11) {
        phone.value = '+' + value.substring(0, 1) + ' (' + value.substring(1, 4) + ') ' + value.substring(4, 7) + '-' + value.substring(7);
        button.disabled = true;
    } else {
        phone.value = '+' + value.substring(0, 1) + ' (' + value.substring(1, 4) + ') ' + value.substring(4, 7) + '-' + value.substring(7, 9) + '-' + value.substring(9, 11);
        button.disabled = false;
    }
});

button.addEventListener('click', function(e){
    e.preventDefault();
    const url = 'http://paper/index.php'; // Update with the correct path to your PHP script
    const body = JSON.stringify({
        'phone': phone.value,
        'message': message.value,
    });
    const options = {
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: body,
    };
    fetch(url, options)
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    phone.value = '';
    message.value = '';
});
