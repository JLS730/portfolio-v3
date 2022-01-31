const aboutMeLink = document.querySelector('.about-me-link')
const skillsLink = document.querySelector('.skills-link')
const contactLink = document.querySelector('.contact-link')

aboutMeLink.addEventListener('click', (e) => {
    e.preventDefault()
    window.scrollTo(0, 3210)
})

skillsLink.addEventListener('click', (e) => {
    e.preventDefault()
    window.scrollTo(0, 4118)
})

contactLink.addEventListener('click', (e) => {
    e.preventDefault()
    window.scrollTo(0, 5260)
})

document.addEventListener('scroll', () => {
    let pagePosition = document.documentElement.scrollTop

    const links = document.querySelectorAll('.link')

    switch(true) {
        case (pagePosition < 407):
            links.forEach(link => {
                link.classList.remove('scroll-location-1')
            })
            break
        case (pagePosition > 407 && pagePosition < 2651):
            links.forEach(link => {
                link.classList.remove('scroll-location-2')
                link.classList.add('scroll-location-1')
            })
            break
        case (pagePosition > 2651 && pagePosition < 3532):
            links.forEach(link => {
                link.classList.remove('scroll-location-1')
                link.classList.remove('scroll-location-3')
                link.classList.add('scroll-location-2')
            })
            break
        case (pagePosition > 3532 && pagePosition < 4884):
            links.forEach(link => {
                link.classList.remove('scroll-location-2')
                link.classList.remove('scroll-location-4')
                link.classList.add('scroll-location-3')
            })
            break
        case (pagePosition > 4884):
            links.forEach(link => {
                link.classList.remove('scroll-location-3')
                link.classList.add('scroll-location-4')
            })
            break
        default:
            return
    }

    console.log(pagePosition)
})

document.addEventListener('keypress', (e) => {
    const links = document.querySelectorAll('.link')
    let pagePosition = document.documentElement.scrollTop


    if(e.key === 'r') {
        console.log(pagePosition)
    }
})

// window.scrollTo(0,document.body.scrollHeight);