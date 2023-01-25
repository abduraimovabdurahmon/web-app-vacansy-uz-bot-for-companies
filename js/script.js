const tg = window.Telegram.WebApp;

tg.ready()
tg.expand()

const mainButton = Telegram.WebApp.MainButton;

mainButton.text = 'Yuborish';
mainButton.hide();

Telegram.WebApp.onEvent('mainButtonClicked', async ()=>{
    data.type = await 'c';
    tg.sendData(JSON.stringify(data));
})

let data = {};

const checkText = (regex, id, value, idName)=>{
    if(value == ''){
        document.getElementsByClassName('errorMessage')[id].style.display = 'none';
        return document.getElementById(idName).style.border = '1px solid blueviolet';
    }

    if(regex.test(value)){
        document.getElementsByClassName('errorMessage')[id].style.display = 'none';
        document.getElementById(idName).style.border = '1px solid green';
    }
    else{
        document.getElementsByClassName('errorMessage')[id].style.display = 'block';   
    }
}


const checkSelect = (idName)=>{
    document.getElementById(idName).style.border = '1px solid green';
}


document.getElementById('company').addEventListener('input', function() {
    data.company = this.value;
    check(data);
    checkText(/^[A-Za-z\s]{0,50}$/g, 0, this.value, 'company');
});

// phone
document.getElementById('phone').addEventListener('input', function() {
    data.phone = this.value;
    check(data);
    checkText(/^9989[012345789][0-9]{7}$/g, 1, this.value, 'phone');
});

// email
document.getElementById('email').addEventListener('input', function() {
    data.email = this.value;
    check(data);
    checkText(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/g, 2, this.value, 'email');
});

// location
document.getElementById('location').addEventListener('input', function() {
    data.location = this.value;
    check(data);
    checkSelect('location');
})

// telegram
document.getElementById('telegram').addEventListener('input', function() {
    data.telegram = this.value;
    check(data);
    checkText(/^@[A-Za-z0-9_]{5,25}$/, 3, this.value, 'telegram');
})

// price
document.getElementById('price').addEventListener('input', function() {
    data.price = this.value;
    check(data);
    checkText(/^[0-9]{0,9}$/g, 4, this.value, 'price');
})

// experience
document.getElementById('experience').addEventListener('input', function() {
    data.experience = this.value;
    check(data);
    checkSelect('experience');
})

// speciality
document.getElementById('speciality').addEventListener('input', function() {
    data.speciality = this.value;
    check(data);
    checkSelect('speciality');
})

// time to apply
document.getElementById('time1').addEventListener('input', function() {
    data.time1 = this.value;
    check(data);
    checkSelect('time1');
})

// time to apply
document.getElementById('time2').addEventListener('input', function() {
    data.time2 = this.value;
    check(data);
    checkSelect('time2');
})

// time to apply
document.getElementById('time3').addEventListener('input', function() {
    data.time3 = this.value;
    check(data);
    checkSelect('time3');
})

// time to apply
document.getElementById('time4').addEventListener('input', function() {
    data.time4 = this.value;
    check(data);
    checkSelect('time4');
})

// info
document.getElementById('info').addEventListener('input', function() {
    data.info = this.value;
    check(data);
    checkText(/^[A-Za-z0-9\s.+#!]{0,150}$/g, 5, this.value, 'info');
})


const check = (data) => {
    if(data.company && data.phone && data.email && data.telegram && data.price && data.location && data.experience && data.speciality && data.time1 && data.time2 && data.time3 && data.time4 && data.info) {
        if(/^[A-Za-z\s]{0,50}$/g.test(data.company) && /^9989[012345789][0-9]{7}$/g.test(data.phone) && /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/g.test(data.email) && /^@[A-Za-z0-9_]{5,25}$/g.test(data.telegram) && /^[0-9]{0,9}$/g.test(data.price) && /^[A-Za-z0-9\s.+#!]{0,150}$/g.test(data.info)){
            mainButton.show();
            console.log(data);
        }
        else{
            mainButton.hide();
        }
    }
    else{
        mainButton.hide();
    }
    
}