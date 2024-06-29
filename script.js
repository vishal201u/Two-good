
function locomotiveAnimation(){
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
locomotiveAnimation();

function navAnimation(){
  gsap.to(".nav .left h1", {
    y: "-100%",
    scrollTrigger: {
      trigger: ".page1",
      scroller: ".main",
      start: "top top",
      end: "top -5%",
      scrub: true
    }
  });
  
  gsap.to(".left svg",{
    y:-83,
    scrollTrigger: {
      trigger:".page1",
      scroller:".main",
      start:"top top",
      end:"top -5%",
      scrub:true
    }
  });
  
  gsap.to(".right h3",{
    y:-100,
    opacity:0,
    scrollTrigger: {
      trigger:".page1",
      scroller:".main",
      start:"top top",
      end:"top -5%",
      scrub:2
    }
  });
}
navAnimation()



function videoconAnimation(){
  var circle = document.querySelector(".circle");
var videocon = document.querySelector(".video-cont");

videocon.addEventListener("mouseenter", function(){
  gsap.to(circle,{
    scale:1,
    opacity:1

  });
});

videocon.addEventListener("mouseleave", function(){
  gsap.to(circle,{
    scale:0,
    opacity:0

  });
});

videocon.addEventListener("mousemove", function(dets){
  gsap.to(circle,{
    left:dets.x-50,
    top:dets.y-40,
    duration:1,
    ease:"power3.out"
  })
})
};
videoconAnimation();

function loadingAnimation(){
  gsap.from(".text h1",{
    y:150,
    opacity:0,
    duration:0.8,
    ease:"power3",
    delay:0.5,
    stagger:0.2
  })
};
loadingAnimation();

gsap.from(".main .video-cont",{
  scale:0.7,
  opacity:0,
  duration:0.5,
  delay:1.3
})

function crsrAnimation(){
  var crsr = document.querySelector(".crsr");
var imgs = document.querySelectorAll(".page4 img")
imgs.forEach(function(dets){
  dets.addEventListener("mouseenter",function(){
    gsap.to(crsr,{
      scale:1,
      opacity:1
    })
  })
  dets.addEventListener("mouseleave",function(){
    gsap.to(crsr,{
      scale:0,
      opacity:0
    })
  })
  dets.addEventListener("mousemove",function(events){
    
    gsap.to(crsr,{
      left:events.x-60,
      top:events.y-70,
    })
  })

})
}
crsrAnimation();




