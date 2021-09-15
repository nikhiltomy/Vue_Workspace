
function validateForm() {

    if (document.myForm.name.value == null) {
        document.myForm.name.focus();
        document.getElementById('invname').innerHTML="Enter a valid Name";
        return false;
    }
    if (!/^[a-zA-Z][a-zA-Z\s]*$/g.test(document.myForm.name.value)) {
        document.myForm.name.focus();
        document.getElementById('invname').innerHTML="Only alphabets are allowed";
        return false;
    }
    if (!/^\d{10}$/g.test(document.myForm.phone.value)) {
        document.myForm.name.focus();
        document.getElementById('invphone').innerHTML="Enter a valid 10 digit phone number";
        return false;
    }
}

// const xhl = new XMLHttpRequest();
// xhl.open('post','https://httpbin.org/post')


// const form = {
//     name:document.getElementById('name'),
//     age:document.getElementById('age'),
//     gender:document.getElementById('gender'),
//     email:document.getElementById('email'),
//     phone:document.getElementById('phone'),
//     subject:document.getElementById('subject'),
//     submit:document.getElementById('submit')
// }

// console.log(form);


const contactForm = document.getElementById("myForm");

contactForm.addEventListener("submit", function (event) {
let valid_status=validateForm();
    event.preventDefault();

    var request = new XMLHttpRequest();
    var url = "https://httpbin.org/post";
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var jsonData = JSON.parse(request.response);
            console.log(jsonData);
            document.getElementById('myForm').style.display="none";
            document.getElementById('success_msg').innerHTML="Your submission has been sent :)";

        } else if (request.status !== 200) {
            document.getElementById("error_msg").innerHTML = "Form Submittion Failed";
        }
    };
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var subject = document.getElementById("subject").value;



    var data = JSON.stringify({ "name": name, "age": age, "gender": gender, "email": email, "phone": phone, "subject": subject });

    if(valid_status != false){
    request.send(data);
    }
});