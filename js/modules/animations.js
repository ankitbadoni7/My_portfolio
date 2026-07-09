gsap.registerPlugin(ScrollTrigger);

// =========================
// HERO TIMELINE
// =========================

const heroTL = gsap.timeline({
    defaults: {
        ease: "power3.out"
    }
});

heroTL

.from("#menu", {
    y: -40,
    opacity: 0,
    duration: 0.5
})

.fromTo(".hero_subtitle",
{
    opacity: 0,
    y: 35
},
{
    opacity: 1,
    y: 0,
    duration: 0.7
})

.from(".hero_title", {
    y: 70,
    opacity: 0,
    duration: 0.9
}, "-=0.35")

.from(".hero_role", {
    y: 30,
    opacity: 0,
    duration: 0.6
}, "-=0.45")

.from(".hero_hash", {
    scale: 0.7,
    opacity: 0,
    duration: 0.45
}, "-=0.3")

.fromTo("#cvBtn",
{
    opacity: 0,
    y: 25
},
{
    opacity: 1,
    y: 0,
    duration: 0.6
}, "-=0.2")
.fromTo(".hero_glass",
{
    opacity: 0,
    visibility: "hidden",
    filter: "blur(12px)"
},
{
    opacity: 1,
    visibility: "visible",
    filter: "blur(0px)",
    duration: 0.8,
    ease: "power2.out"
});

gsap.to(".tech-bubble",{
    y:-20,
    duration:3,
    repeat:-1,
    yoyo:true,
    ease:"sine.inOut",
    stagger:0.3
});

// ======================================
// ABOUT SECTION
// ======================================

const aboutTL = gsap.timeline({
    scrollTrigger: {
        trigger: ".about",
        start: "top 72%",
        toggleActions: "play none none none",
        once: true
    },
    defaults: {
        ease: "power3.out",
        duration: 0.8
    }
});

aboutTL

// Title
.from(".about_title", {
    opacity: 0,
    y: 35
})

// Paragraphs
.from(".about_text > p", {
    opacity: 0,
    y: 25,
    stagger: 0.18
}, "-=0.45")

// Social Icons
.fromTo(".social_icon",
{
    opacity: 0,
    y: 20,
    scale: 0.9
},
{
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.5,
    stagger: 0.08,
    clearProps: "opacity,transform"
}, "-=0.35")

// Experience Button
.from(".about_btn", {
    opacity: 0,
    y: 20
}, "-=0.30")

// Glass Rectangle
.from(".about_glass_bg", {
    opacity: 0,
    duration: 0.7
}, "-=0.55")

// Image
.from(".about_image_wrap", {
    opacity: 0,
    scale: 0.95,
    duration: 0.7
}, "-=0.35");