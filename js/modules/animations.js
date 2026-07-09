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

