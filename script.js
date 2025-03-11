function cursoreffect(){
var page1Content= document.querySelector("#page1-content");
var cursor = document.querySelector("#cursor");

page1Content.addEventListener("mousemove", (dets) => {
    gsap.to(cursor,{
        x: dets.x,
        y: dets.y,
        
    })
});

page1Content.addEventListener("mouseenter", () => {
    gsap.to(cursor, {scale: 1,
        opacity: 1,
    });
});
page1Content.addEventListener("mouseleave", () => {
    gsap.to(cursor, {scale: 0.1,
        opacity: 0,
    });
});
}
cursoreffect();
function page2content(){
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#page2heading, #paragraph", {
        y: 50,
        opacity: 0,
        ease: "power2.out",
        duration: 1.5,
        scrollTrigger: {
            trigger: "#page2",
            start: "top 85%",
            scrub: 2,
        }
    });

    gsap.to("#page2heading", {
        y: -50,
        ease: "none",
        scrollTrigger: {
            trigger: "#page2",
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
        }
    });

    gsap.to("#paragraph", {
        y: -30,
        ease: "none",
        scrollTrigger: {
            trigger: "#page2",
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
        }
    });
});
}
page2content();
function page4(){
    gsap.to("#page4-content",{
        x:"-50%",
        duration:20,
        repeat:-1,
        ease:"linear"
    });  
}
page4();
function page5(){
    gsap.to(".scroll-container",{
        x:"-50%",
        duration:20,
        repeat:-1,
        ease:"linear"
    });
}
page5();

function page7Animation() {
    gsap.to("#page7 video", {
        scale: 1.1,               
        opacity: 1,
        scrollTrigger: {
            trigger: "#page7",
            start: "top 70%",     
            end: "top 30%",  
            scrub: true,
            pin: true,            
            anticipatePin: 1
        }
    });
    
}   
page7Animation();

function page8(){
    const heading = document.querySelector("#heading");

    heading.addEventListener("mouseenter", () => {
        gsap.to(heading, {
            opacity: 0,           
            duration: 0.2,
            onComplete: () => {
                heading.innerHTML = "About Us"; 
                gsap.to(heading, {
                    opacity: 1,   
                    color: "black",
                    duration: 0.2
                });
            }
        });
    });

    heading.addEventListener("mouseleave", () => {
        gsap.to(heading, {
            opacity: 0,           
            duration: 0.3,
            onComplete: () => {
                heading.innerHTML = "Get to know Us!"; 
                gsap.to(heading, {
                    opacity: 1,   
                    color: "black",
                    duration: 0.3
                });
            }
        });
    });
}
page8();




