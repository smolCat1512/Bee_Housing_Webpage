const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modal_container.classList.add('show');
    console.log('open');
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});

const handleSubmit = async () => {
    alert(`Thanks for logging your complaint. Your feedback is very important to us and we're keen to resolve any of your concerns swiftly. We'll be in touch with you shortly`);
    const from = document.getElementById('from').value;
    const body = document.getElementById('body').value;
    console.log(from, body);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({ "from": from, "body": body });
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    fetch("https://licorice-eland-9853.twil.io/create-complaint", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    return false;
};
