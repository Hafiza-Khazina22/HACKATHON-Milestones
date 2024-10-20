var Form = document.getElementById('form');
var resumeDisplayElement = document.getElementById('resume-display');
// FORM SUBMISSION
Form.addEventListener('submit', function (event) {
    event.preventDefault();
    //COLLECT INPUT 
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experiance = document.getElementById('experiance').value;
    var skills = document.getElementById('skills').value;
    //GENERATE THE RESUME DYNAMICALLY
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:<b>".concat(name, "</p>\n    <p><b>Name:<b>").concat(email, "</p>\n    <p><b>Name:<b>").concat(phone, "</p>\n     \n    \n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n    \n    <h3>Experiance</h3>\n    <p>").concat(experiance, "</p>\n    \n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    ");
    //DISPLAY GENERATED RESUME
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('the resume display element is missing.');
    }
});
