// gsap.from("#page1 #box", {
//     scale: 0,
//     delay: 2,
//     duration: 2,
//     rotate: 360
// })
// gsap.from("#page2 #box", {
//     scale: 0,
//     delay: 1,
//     duration: 2,
//     rotate: 360,
//     scrollTrigger: {
//         trigger: "#page2 #box",
//         scroller: "body",
//         markers: true,
//         start: "top 60%",
//         scrub: 2 //Works with scroll totall dependent on scroll
//     }
// })

gsap.to("#page2 h1", {
    transform: "translateX(-190%)",
    scrollTrigger: {
        trigger: "#page2",
        delay: 2,
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true //stops the section to from scrolling until the animation is completed.
    }
})