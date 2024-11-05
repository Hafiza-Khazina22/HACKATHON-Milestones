const resume = document.getElementById('form') as HTMLFormElement;
const formDisplayElement = document.getElementById('resume-display') as HTMLDivElement

// FORM SUBMISSION
resume.addEventListener('submit',(event: Event) => {
    event.preventDefault();
 

    //COLLECT INPUT 
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experiance= (document.getElementById('experiance') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    //GENERATE THE RESUME DYNAMICALLY
    const resumeHTML =`
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:<b>${name}</p>
    <p><b>Name:<b>${email}</p>
    <p><b>Name:<b>${phone}</p>
     
    
    <h3>Education</h3>
    <p>${education}</p>
    
    <h3>Experiance</h3>
    <p>${experiance}</p>
    
    <h3>Skills</h3>
    <p>${skills}</p>
    `;

    //DISPLAY GENERATED RESUME
    if(formDisplayElement){
        formDisplayElement.innerHTML = resumeHTML;
    }else {
        console.error('the resume display element is missing.');
    }
})
