
let getElementFromString = (string) => {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}

document.getElementById('b1').onclick = function () {
    let email = document.getElementById('emailId').value
    let name = document.getElementById('fullName').value
    let password = document.getElementById('password').value
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if ((email && name && password) === '') {
        let empty
        if (name == '') {
            empty = "Name"
        }
        else if (email == '') {
            empty = 'Email'
        }
        else {
            empty = 'Password'
        }
        let notify = document.getElementById('notify');
        let string = `<div class="notification border border-1 rounded">
                            <img class="cancel" src="./6820-cancel-or-error.gif"/>
                            <span id="text" >The ${empty} is required</span>
                          </div>`;
        let headerElement = getElementFromString(string);
        notify.appendChild(headerElement);
        setTimeout(() => {
            document.getElementById('notify').innerHTML = ''
        }, 2000);
    }
    else if (!(email.match(mailformat))) {
        let notify = document.getElementById('notify');
        let string = `<div class="notification  border border-1 rounded">
                            <img class="cancel" src="./6820-cancel-or-error.gif"/>
                            <span id="text">Invalid email</span>
                          </div>`;
        let headerElement = getElementFromString(string);
        notify.appendChild(headerElement);
        setTimeout(() => {
            document.getElementById('notify').innerHTML = ''
        }, 2000);
    }
    else if (password.length < 6) {
        let notify = document.getElementById('notify');
        let string = `<div class="notification border border-1 rounded">
                            <img class="cancel" src="./6820-cancel-or-error.gif"/>
                            <span id="text" >The password should be at<br/> least 6 characters</span>
                          </div>`;
        let headerElement = getElementFromString(string);
        notify.appendChild(headerElement);
        setTimeout(() => {
            document.getElementById('notify').innerHTML = ''
        }, 2000);
    }
    else {
        document.getElementById('firstSection').style.display = 'none'
        document.getElementById('secondSection').style.display = 'block'
    }

};
document.getElementById('b2').onclick = function () {
    document.getElementById('firstSection').style.display = 'block'
    document.getElementById('secondSection').style.display = 'none'
}
document.getElementById('b3').onclick = function () {
    let businessName = document.getElementById('businessName').value
    let cb = document.querySelector('#invalidCheck')
    if (businessName == '') {
        let notify = document.getElementById('notify');
        let string = `<div class="notification  border border-1 rounded">
                            <img class="cancel" src="./6820-cancel-or-error.gif"/>
                            <span id="text">Business Name is required</span>
                          </div>`;
        let headerElement = getElementFromString(string);
        notify.appendChild(headerElement);
        setTimeout(() => {
            document.getElementById('notify').innerHTML = ''
        }, 2000);
    }
    else if (!(cb.checked)) {
        let notify = document.getElementById('notify');
        let string = `<div class="notification border border-1 rounded">
                            <img class="cancel" src="./6820-cancel-or-error.gif"/>
                            <span id="text" >The terms must be accepted.</span>
                          </div>`;
        let headerElement = getElementFromString(string);
        notify.appendChild(headerElement);
        setTimeout(() => {
            document.getElementById('notify').innerHTML = ''
        }, 2000);
    }


}