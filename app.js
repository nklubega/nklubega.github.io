const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSelections = document.querySelector('.main-content')
function pageTransition() {
    //Button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += 'active-btn'
        })
        
    }

    allSelections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if (id) {
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')

            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section)=> {
                section.classList.remove('active')
            })
            
            const element = document.getElementById(id);
            element.classList.add('active')
        }
    })

    //Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',()=>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })

}

(function() {
  emailjs.init("AJEdqWZgDx7yh0f0P"); // Replace with your EmailJS User ID
})();

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("contact_service", "template_np88wvo", this)
      .then(function () {
        alert("Message sent successfully!");
        contactForm.reset();
      }, function (error) {
        alert("Failed to send message. Please try again.");
        console.error("EmailJS error:", error);
      });
  });
}



pageTransition();

