const pic=document.getElementById("pictures");
        const vid=document.getElementById("video");
        const toTal =document.getElementById("total");
        const namee =document.getElementById("name");
        const contact =document.getElementById("contact");
        const date =document.getElementById("date");
        const time =document.getElementById("time");
        const eventt =document.getElementById("event");
        const paragraphBox =document.getElementById("para");
    
        function calculator() {
            const picturesQuote=[0,220,450,900]
            const videosQuote=[0,700,1500,2200]

            let picValue= pic.value;
            let vidValue=vid.value;
            let nameValue= namee.value;
            let contactValue= contact.value;
            let dateValue= date.value;
            let timeValue= time.value;
            let eventValue= eventt.value;
            
            const pricePic=picturesQuote[picValue]
            const priceVid=videosQuote[vidValue] 

            const Total= pricePic + priceVid;
            toTal.innerHTML=  ` R${Total}`;
            console.log(nameValue)

            paragraphBox.innerHTML=`
             <p>Name    :       ${nameValue}</p>
             <p>Contact :       ${contactValue}</p>
             <p>Event   :       ${eventValue}.</p>
             <p>Picture Package : ${picValue}</p>
            <p>Video Package    : ${vidValue} </p>
             <p>Date    :       ${dateValue}</p>
             <p>Time    :       ${timeValue}PM.</p> 
            <p> Total    :            R${Total}. </p>
            If you have confirmed this, please send it to focustripod_vz management `;
            
            paragraphBox.classList.add("confirmtext",'confirmcontainer');

        }


        const menuBtn = document.getElementById("menubtn");
const navLinks = document.getElementById('navlinks');
const menuBtnIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click',(e)=>{
    navLinks.classList.toggle('open');

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute('class',isOpen?'ri-close-line':'ri-menu-line')
});

 navLinks.addEventListener('click',(e)=>{
    navLinks.classList.remove('open');
    menuBtnIcon.setAttribute('class','ri-menu-line');
}) 
const scrollRevealOption = {
    distant: "50px",
    origin: "botton",
    duration: 1000,
};
ScrollReveal().reveal(".aboutcontainer .sectionheader",{
    ...scrollRevealOption,
});
ScrollReveal().reveal(".aboutcontainer .sectiondescription",{
    ...scrollRevealOption,
    delay: 500,
    interval:500
});
ScrollReveal().reveal(".aboutcontainer img",{
    ...scrollRevealOption,
    delay: 1500,
    
});
ScrollReveal().reveal(".servicecontainer .sectionheader",{
    ...scrollRevealOption,
});
ScrollReveal().reveal(".servicecontainer .sectiondescription",{
    ...scrollRevealOption,
    delay: 500,
    
});
ScrollReveal().reveal(".servicecard",{
    ...scrollRevealOption,
    duration: 1000,
    delay: 1000,
    interval: 500,

    
});

const swiper = new Swiper('.swiper',{
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
});
ScrollReveal().reveal(".blogcontent .sectionheader",{
    ...scrollRevealOption,
    
    
});
ScrollReveal().reveal(".blogcontent h4",{
    ...scrollRevealOption,
    delay: 500,
    
});
ScrollReveal().reveal(".blogcontent p",{
    ...scrollRevealOption,
    delay: 1000,
    
});
ScrollReveal().reveal(".blogcontent .blogbtn",{
    ...scrollRevealOption,
    delay: 1500,
    
});
const instagram = document.querySelector(".instagramflex");

Array.from(instagram.children).forEach((item) =>{
    const duplicateNode =item.cloneNode(true);
    duplicateNode.setAttribute('aria-hidden',true);
    instagram.appendChild(duplicateNode);
})

