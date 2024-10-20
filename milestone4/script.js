var resume = document.getElementById('form');
var formDisplayElement = document.getElementById('resume-display');
// FORM SUBMISSION
resume.addEventListener('submit', function (event) {
    event.preventDefault();
    //COLLECT INPUT 
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experiance = document.getElementById('experiance').value;
    var skills = document.getElementById('skills').value;
    //GENERATE THE RESUME DYNAMICALLY
    var resumeHTML = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:<b><span contenteditable=\"true\">".concat(name, "</span></span></p>\n    <p><b>Email:<b><span contenteditable=\"true\"><").concat(email, "</span></p>\n    <p><b>Phone:<b><span contenteditable=\"true\">").concat(phone, "</span></p>\n     \n    \n    <h3>Education</h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n    \n    <h3>Experiance</h3>\n    <p contenteditable=\"true\">").concat(experiance, "</p>\n    \n    <h3>Skills</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    //DISPLAY GENERATED RESUME
    if (formDisplayElement) {
        formDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('the resume display element is missing.');
    }
});
