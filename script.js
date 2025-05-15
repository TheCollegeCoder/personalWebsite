
// const observer = new IntersectionObserver((entries, observer) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       // When .skills section is in view
//       entry.target.querySelectorAll('.progress').forEach(progress => {
//         const percentText = progress.querySelector('h3 span').innerText;
//         const percentValue = percentText.replace('%', '');
//         const bar = progress.querySelector('.bar span');
//         bar.style.width = percentValue + '%';
//       });

//       // Optional: Stop observing after first trigger
//       observer.unobserve(entry.target);
//     }
//   });
// }, {
//   threshold: 0.3, // 30% of section must be visible
// });

// // Start observing the .skills section
// observer.observe(document.querySelector('.skills'));


// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     const bars = entry.target.querySelectorAll('.progress');

//     if (entry.isIntersecting) {
//       // Animate in
//       bars.forEach(progress => {
//         const percentText = progress.querySelector('h3 span').innerText;
//         const percentValue = percentText.replace('%', '');
//         const bar = progress.querySelector('.bar span');
//         bar.style.width = percentValue + '%';
//       });
//     } 
//     // else {
//     //   // Reset when out of view
//     //   bars.forEach(progress => {
//     //     const bar = progress.querySelector('.bar span');
//     //     bar.style.width = '0%';
//     //   });
//     // }
//   });
// }, {
//   threshold: .3,
// });

// observer.observe(document.querySelector('.skills'));

// const skillsSection = document.querySelector('.skills');
// const skillBars = document.querySelectorAll('.skills .bar span');

// const observer = new MutationObserver(mutations => {
//   mutations.forEach(mutation => {
//     if (
//       mutation.type === 'attributes' &&
//       skillsSection.classList.contains('show-animate')
//     ) {
//       // Delay the animation slightly after class is added
//       setTimeout(() => {
//         document.querySelectorAll('.skills .progress').forEach(progress => {
//           const percent = progress.querySelector('h3 span').innerText.replace('%', '');
//           progress.querySelector('.bar span').style.width = percent + '%';
//         });
//       }, 2000); // adjust delay if needed
//     }

//     // Optional: reset animation when class is removed
//     if (
//       mutation.type === 'attributes' &&
//       !skillsSection.classList.contains('show-animate')
//     ) {
//       skillBars.forEach(bar => bar.style.width = '0%');
//     }
//   });
// });

// // Observe class changes on .skills
// observer.observe(skillsSection, {
//   attributes: true,
//   attributeFilter: ['class']
// });

const skillsSection = document.querySelector('.skills');
const skillBars = document.querySelectorAll('.skills .bar span');

const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
      const isVisible = skillsSection.classList.contains('show-animate');

      if (isVisible) {
        // Animate bars in
        setTimeout(() => {
          document.querySelectorAll('.skills .progress').forEach(progress => {
            const percent = progress.querySelector('h3 span').innerText.replace('%', '');
            const bar = progress.querySelector('.bar span');
            bar.style.width = percent + '%';
          });
        }, 3000); // optional delay
      } else {
        // Reset bars with reflow
        skillBars.forEach(bar => {
          bar.style.transition = 'none';      // Temporarily disable transition
          bar.style.width = '0%';             // Reset
          void bar.offsetWidth;               // Force reflow
          bar.style.transition = 'width 1s ease-in-out';  // Re-enable animation
        });
      }
    }
  });
});

observer.observe(skillsSection, {
  attributes: true,
  attributeFilter: ['class']
});




let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
      });
      sec.classList.add('show-animate');
    } 
    else{
      sec.classList.remove('show-animate');
      
    }

  });

  let header = document.querySelector('header')
  header.classList.toggle('sticky', window.scrollY > 100);

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
  

  let footer = document.querySelector('footer');

  footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);

}