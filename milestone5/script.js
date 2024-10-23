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
document.getElementById('generateUrl').addEventListener('click', function () {
    var username = document.getElementById('username').value;
    var resumeUrl = "https://example.com/resume/".concat(username); // Replace with your actual URL structure
    document.getElementById('resumeUrl').innerText = resumeUrl;
    document.getElementById('result').classList.remove('hidden');
});
document.getElementById('downloadPdf').addEventListener('click', function () {
    var username = document.getElementById('username').value;
    var pdfContent = "Resume for ".concat(username, "\n\nThis is where your resume content goes."); // Replace with actual resume content
    var blob = new Blob([pdfContent], { type: 'application/pdf' });
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = "".concat(username, "_resume.pdf");
    link.click();
});
