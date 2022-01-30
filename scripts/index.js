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
        case (pagePosition > 3532):
            links.forEach(link => {
                link.classList.remove('scroll-location-2')
                link.classList.add('scroll-location-3')
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