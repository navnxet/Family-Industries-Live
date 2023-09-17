const tl = gsap.timeline();
tl.from('nav',{
    y:-120,
    duration:.7,
    ease:'power4',
    opacity: 0 
})
.from('h1',{
    x:-120,
    duration:.7,
    ease: 'power4',
    opacity: 0 
}, 'name')
.from('p',{
    x:-120,
    duration:.7,
    ease: 'power4',
    opacity: 0 
}, 'name')
.from('video',{
    x:120,
    duration:.7,
    ease: 'power4',
    opacity: 0 
}, 'name')
.from('.one, .two',{
    y:120,
    duration:.7,
    ease:'power4',
    opacity: 0 
})
