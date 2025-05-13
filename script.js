
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


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const bars = entry.target.querySelectorAll('.progress');

    if (entry.isIntersecting) {
      // Animate in
      bars.forEach(progress => {
        const percentText = progress.querySelector('h3 span').innerText;
        const percentValue = percentText.replace('%', '');
        const bar = progress.querySelector('.bar span');
        bar.style.width = percentValue + '%';
      });
    } else {
      // Reset when out of view
      bars.forEach(progress => {
        const bar = progress.querySelector('.bar span');
        bar.style.width = '0%';
      });
    }
  });
}, {
  threshold: 0.2,
});

observer.observe(document.querySelector('.skills'));