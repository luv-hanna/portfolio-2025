window.onload = function () {

    gsap.registerPlugin(ScrollTrigger); // GSAP 라이브러리의 스크롤트리거를 등록


    //.main .title-wrap
    gsap.to(".title-wrap", {
        opacity: 0,
        y: -200,
        scrollTrigger: {
            trigger: ".main",
            start: "top top",
            end: "center top",
            scrub: true,
        }
    });

    // .main logoWrap
    gsap.timeline({
        scrollTrigger: {
            trigger: '.main',
            start: 'top top',
            end: 'bottom top',
            scrub: 2,
        }
    })
        .to('.logoWrap #d', { x: -150, y: 250, rotate: 20, ease: 'none', duration: 5 }, 0)
        .to('.logoWrap #e1', { x: -30, y: 150, rotate: -10, ease: 'none', duration: 5 }, 0)
        .to('.logoWrap #s', { x: 0, y: 400, rotate: -10, ease: 'none', duration: 5 }, 0)
        .to('.logoWrap #i', { x: 50, y: 300, rotate: 10, ease: 'none', duration: 5 }, 0)
        .to('.logoWrap #g', { x: 100, y: 100, rotate: -10, yease: 'none', duration: 5 }, 0)
        .to('.logoWrap #n', { x: 50, y: 400, rotate: 20, yease: 'none', duration: 5 }, 0)
        .to('.logoWrap #e2', { x: 30, y: 200, rotate: -10, ease: 'none', duration: 5 }, 0)
        .to('.logoWrap #r', { x: 60, y: 500, rotate: -10, ease: 'none', duration: 5 }, 0)


    // .section-01 profile line
    gsap.utils.toArray('.line').forEach((selector) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: selector,
                start: 'top 85%',
                end: 'top 10%',
                scrub: 1,
            }
        })
            .fromTo(selector, { opacity: 0, y: 100, }, { opacity: 1, y: 0, ease: 'none', duration: 5 }, 0)
    });

    // .section-02 profile .down_text p
    gsap.utils.toArray('.up_box_text p').forEach((selector) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: selector,
                start: '100% 100%',
                end: '100% 100%',
                scrub: 1,
            }
        })
            .fromTo(selector, { overflow: 'hidden', opacity: 0, y: 150, }, { opacity: 1, y: 0, ease: 'none', duration: 5 }, 0);
    });

    // .section-02 profile .down_text p
    gsap.utils.toArray('.down-box .down_text').forEach((selector) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: selector,
                start: '100% 100%',
                end: '100% 100%',
                scrub: 1,
            }
        })
            .fromTo(selector, { overflow: 'hidden', opacity: 0, y: 150, }, { opacity: 1, y: 0, ease: 'none', duration: 5 }, 0);
    });


    // .section-02 profile .brick_info p
    gsap.utils.toArray('.brick_info p').forEach((selector) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: selector,
                start: '100% 100%',
                end: '100% 100%',
                scrub: 1,
            }
        })
            .fromTo(selector, { overflow: 'hidden', opacity: 0, y: 150, }, { opacity: 1, y: 0, ease: 'none', duration: 5 }, 0);
    });


    //section-03 title
    gsap.utils.toArray('.section-03 .title').forEach((selector) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: selector,
                start: "top 40%", // ← 더 내려갔을 때 시작
                end: "bottom 50%",
                scrub: 1,
            }
        })
            .fromTo(selector,
                { overflow: 'hidden', y: 180 }, // 아래에 위치
                { y: 0, ease: 'none', duration: 1 } // 위로 올라옴
            )
    });


    //.section-04 .listbox
    gsap.utils.toArray('.section-04 .listbox li').forEach((selector) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: selector,
                start: 'top 80%',
                end: 'top 30%',
                scrub: 1,
                // markers: true
            }
        })
            .fromTo(selector,
                {
                    y: 50,
                    opacity: 0,
                    scale: 0.9,
                    filter: 'brightness(0.5)',
                    transformOrigin: 'top center'
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    filter: 'brightness(1)',
                    ease: 'power2.out'
                }
            );
    });


    //.section-04 .listbox li
    gsap.utils.toArray('.section-04 .listbox li').forEach((selector, t) => {
        ScrollTrigger.create({
            trigger: selector,
            start: 'top bottom',
            onEnter: () => {
                gsap.set(selector, {
                    rotationX: '-65deg',
                    z: '-500px',
                    opacity: 0,
                }),
                    gsap.to(selector, {
                        rotationX: 0,
                        z: '0',
                        opacity: 1,
                        delay: t % 3 * 0.05,
                    })
            },
            // markers: true
        })

    });



}

// .section-03 .panel
function openPanel(clickedPanel) {
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => {
        if (panel === clickedPanel) {
            panel.classList.toggle('open');
        } else {
            panel.classList.remove('open');
        }
    });
}
