function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
init()


function crsr(){
    var circle = document.querySelector("#circle");
    var vid = document.querySelector(".vid");
    var herop = document.querySelector(".hero-p");
    var logo = document.querySelector(".logo");
    var list = document.querySelector(".list");
    


window.addEventListener("mousemove",function(det){
    // document.querySelector("#circle").style.transform =`translate(${det.clientX}px, ${det.clientY}px)`
    gsap.to(circle,{
        x:det.clientX,
        y:det.clientY,
        duration:.3,
        ease:Expo
    })
})
document.querySelectorAll("nav").forEach(function(list){
    list.addEventListener("mousemove",function(det){
        gsap.to("#circle",{
            scale:4,
        }) 
    },"an")
    
    list.addEventListener("mouseleave",function(det){
        gsap.to("#circle",{
            scale:1,
        }) 
    },"an")
    
})

document.querySelectorAll("img").forEach(function(img){
    img.addEventListener("mousemove",function(det){
        gsap.to("#circle",{
            scale:3,
        }) 
    },"an")
    
    img.addEventListener("mouseleave",function(det){
        gsap.to("#circle",{
            scale:1,
        }) 
    },"an")
    
})

document.querySelectorAll("button").forEach(function(button){
    button.addEventListener("mousemove",function(det){
        gsap.to("#circle",{
            scale:2,
        }) 
    },"an")
    
    button.addEventListener("mouseleave",function(det){
        gsap.to("#circle",{
            scale:1,
        }) 
    },"an")
    
})


document.querySelectorAll(".head1").forEach(function(head1){
    head1.addEventListener("mousemove",function(det){
        gsap.to("#circle",{
            scale:10,
        }) 
    },"an")
    
    head1.addEventListener("mouseleave",function(det){
        gsap.to("#circle",{
            scale:1,
        }) 
    },"an")
    
})

document.querySelectorAll(".head2").forEach(function(head2){
    head2.addEventListener("mousemove",function(det){
        gsap.to("#circle",{
            scale:10,
        }) 
    },"an")
    
    head2.addEventListener("mouseleave",function(det){
        gsap.to("#circle",{
            scale:1,
        }) 
    },"an")
    
})

document.querySelectorAll(".logo-imgs").forEach(function(clogos){
    clogos.addEventListener("mousemove",function(det){
        gsap.to("#circle",{
            scale:6,
        }) 
    },"an")
    
    clogos.addEventListener("mouseleave",function(det){
        gsap.to("#circle",{
            scale:1,
        }) 
    },"an")
    
})

herop.addEventListener("mousemove",function(det){
    gsap.to("#circle",{
        borderRadius:0,
        scale:6,
    }) 
},"an")

herop.addEventListener("mouseleave",function(det){
    gsap.to("#circle",{
        borderRadius:"50%",
        scale:1,
    }) 
},"an")

vid.addEventListener("mousemove",function(det){
    gsap.to("#circle",{
        borderRadius:"40%",
        height:"0.6vw",
        width:"1.5vw",
        scale:4,
    }) 
},"an")

vid.addEventListener("mouseleave",function(det){
    gsap.to("#circle",{
        borderRadius:"50%",
        height:"1vw",
        width:"1vw",
        scale:1,
    }) 
},"an")

document.querySelectorAll(".f-list").forEach(function(flist){
    flist.addEventListener("mousemove",function(det){
        gsap.to("#circle",{
            scale:3,
        }) 
    },"an")
    
    flist.addEventListener("mouseleave",function(det){
        gsap.to("#circle",{
            scale:1,
        }) 
    },"an")
    
})
document.querySelectorAll(".head3").forEach(function(head3){
    head3.addEventListener("mousemove",function(det){
        gsap.to("#circle",{
            borderRadius:0,
            scale:3,
            width:"3vw",
        }) 
    },"an")
    
    head3.addEventListener("mouseleave",function(det){
        gsap.to("#circle",{
            borderRadius:"50%",
            scale:1,
            width:"1vw",
        }) 
    },"an")
    
})

}
crsr()

gsap.from("nav",{
    z:-50,
    opacity:0,
    duration:1,
},)

gsap.to(".hero",{
    y:450,
    scrollTrigger:{
        trigger:".hero",
        scroller:".main",
        start:"top 20%",
        end:"top -30%",
        scrub:1
    }
},)

function startanim(){
    var t = gsap.timeline();
   
    t.to(".bound-elem",{
       y:0,
       ease: Expo.easeInOut,
       duration:2,
       stagger:.2
    })
   }
   startanim()


function tl(){
    var tl=gsap.timeline({
        scrollTrigger:{
            trigger:".page1",
            scroller:".main",
            start:"top 0%",
            end:"top -30%",
            scrub:1,
        }
    });
    
    tl.to(".frist-h1",{
        x:-100,
        filter: "blur(5px)",
        opacity:0,
    },"ani");
    tl.to(".second-h1",{
        x:100,
        filter: "blur(5px)",
        opacity:0,
    },"ani");
    tl.to(".hero p",{
        z:-100,
        filter: "blur(5px)",
        opacity:0,
    },"ani");
    
    tl.to(".vid video",{
        z:100,
        width:"110vw",
        ease:".5s",
    },"ani");
    
}
tl()
function tl2(){
    var tl2=gsap.timeline({
        scrollTrigger:{
            trigger:".page1 h1",
            scroller:".main",
            start:"top 55%",
            end:"top -10%",
            scrub:true,
        }
    })
    
    tl2.to(".page2 h1",{
        color:"#fff",
    },"anim") 
}

tl2()
function tl3(){
    var tl3=gsap.timeline({
        scrollTrigger:{
            trigger:".page2",
            scroller:".main",
            start:"top 20%",
            end:"top 20%",
            scrub:1,
        }
    })
    tl3.to(".main",{
        backgroundColor:"#E6E4E1"
    
    },"anim")
    
    tl3.to(".page2 h1",{
        color:"#000",
        
    },"anim")
}
tl3()
function tl4(){
    var tl4=gsap.timeline({
        scrollTrigger:{
            trigger:".page3",
            scroller:".main",
            start:"77% 50%",
            end:"150% 50%",
            scrub:2,
           pin:".page3"
    
        }
    });
    tl4.to(".p3-center",{
       height: "100vh",
       scrub:true,
    },)
    tl4.to(".p3-top",{
        top:"-50%",
    },"a")
    
    tl4.to(".p3-bottom",{
        bottom:"-60%"
    },"a")

    tl4.to(".top-h",{
        top:"90%"
    },"a")
    tl4.to(".bottom-h",{
        bottom:"-50%"
    },"a")

    tl4.to(".center-content h2",{
        marginTop:0,
        opacity:1,
    },"a")
}

tl4()

document.querySelectorAll(".elem").forEach(function(elem){
    var rotate = 0;
    var dif = 0;
    elem.addEventListener("mouseleave", function(dets){
        gsap.to(elem.querySelector("img"),{
            opacity: 0,
            ease: Power4,
            duration:.5,
        });
    });
    elem.addEventListener("mousemove", function(dets){
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    dif = dets.clientX - rotate;
    rotate = dets.clientX;
        gsap.to(elem.querySelector("img"),{
            opacity: 1,
            ease: Power4,
            top: diff ,
            left:dets.clientX,
            rotate: gsap.utils.clamp(-20,20, dif *2)
        })
    });
}); 
