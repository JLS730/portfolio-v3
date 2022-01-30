const navigationLinks = document.querySelector('.navigation-links')
const introduction = document.querySelector('.introduction')
const introductionTop = document.querySelector('.introduction-top')
const introductionMiddle = document.querySelector('.introduction-middle')
const introductionName = document.querySelector('.introduction-name')
const introductionBottom = document.querySelector('.introduction-bottom')
const callToActionContainer = document.querySelector('.call-to-action-container')

const portfolioTitle = document.querySelector('.portfolio-title')

const projectImage1 = document.querySelector('.project-image-1')
const projectImage2 = document.querySelector('.project-image-2')
const projectImage3 = document.querySelector('.project-image-3')
const projectImage4 = document.querySelector('.project-image-4')

const projectInfo1 = document.querySelector('.info-container-1')
const projectInfo2 = document.querySelector('.info-container-2')
const projectInfo3 = document.querySelector('.info-container-3')
const projectInfo4 = document.querySelector('.info-container-4')

const aboutMeSectionTitle = document.querySelector('.about-me-section-title')
const aboutMeImageContainer = document.querySelector('.about-me-image-container')
const aboutMeDescription = document.querySelector('.about-me-description')

const skillsSectionTitle = document.querySelector('.skills-section-title')
const skillsContainer = document.querySelector('.skills-container')

gsap.from(navigationLinks, {x: 200, opacity: 0, duration: 1})
gsap.from(introductionTop, { delay: 1, opacity: 0, duration: 1})
gsap.from(introductionMiddle, { delay: 1.5, opacity: 0, duration: 1})
gsap.from(introductionName, { delay: 2, opacity: 0, duration: 1})
gsap.from(introductionBottom, { delay: 3, opacity: 0, duration: 1})
gsap.from(callToActionContainer, { delay: 4.5, opacity: 0, duration: 1})

let initialScrollPosition = document.documentElement.scrollTop

document.addEventListener('scroll', () => {
    let scrollTriggerPosition = document.documentElement.scrollTop

    portfolioAnimations(scrollTriggerPosition)
})

function portfolioAnimations(scrollTriggerPosition) {
    if(!portfolioTitle.classList.contains('active')) {
        if(scrollTriggerPosition > 407) {
            portfolioTitle.classList.add('active')
            
            setTimeout(() => {
                projectInfo1.classList.add('active')

                setTimeout(() => {
                    projectImage1.classList.add('active')
                }, 300)
            }, 1000)
        }
    }

    if(scrollTriggerPosition > 1121) {
        projectInfo2.classList.add('active')

        setTimeout(() => {
            projectImage2.classList.add('active')
        }, 300)
    }
    
    if(scrollTriggerPosition > 1631) {
        projectInfo3.classList.add('active')

        setTimeout(() => {
            projectImage3.classList.add('active')
        }, 300)
    }
    
    if(scrollTriggerPosition > 2141) {
        projectInfo4.classList.add('active')

        setTimeout(() => {
            projectImage4.classList.add('active')
        }, 300)
    }
    
    if(scrollTriggerPosition > 2651) {
        aboutMeSectionTitle.classList.add('active')

        setTimeout(() => {
            aboutMeDescription.classList.add('active')
            
            setTimeout(() => {
                aboutMeImageContainer.classList.add('active')
            }, 300)
        }, 500)
    }
    
    if(scrollTriggerPosition > 3531) {
        skillsSectionTitle.classList.add('active')

        setTimeout(() => {
            skillsContainer.classList.add('active')
            
        }, 1000)
    }
}

portfolioAnimations(initialScrollPosition)