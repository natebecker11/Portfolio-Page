


// event listener for making thumb paragraphs and links appear on hover
document.querySelectorAll('.thumb-box').forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.querySelectorAll('.thumb-header').forEach(item => {
      item.classList.add('text-accent-color');
    })
    // item.querySelector('.thumb-card-single-header').style.color = '#ef6461';
    item.querySelector('.thumb-bg').style.opacity = .8;
    item.querySelector('.url-logo').style.opacity = 1;
    item.querySelector('.git-logo').style.opacity = 1;
    item.querySelector('.thumb-text').style.opacity = 1;
  })
  item.addEventListener('mouseleave', () => {
    item.querySelectorAll('.thumb-header').forEach(item => {
      item.classList.remove('text-accent-color');
    })
    // item.querySelector('.thumb-card-single-header').style.color = '#ffffff';
    item.querySelector('.thumb-bg').style.opacity = 1;
    item.querySelector('.url-logo').style.opacity = 0;
    item.querySelector('.git-logo').style.opacity = 0;
    item.querySelector('.thumb-text').style.opacity = 0;
  })
})

const delay = interval => {
  return new Promise(resolve => {
    setTimeout(resolve, interval);
  });
}

// const initializeTrans = (a, b, time) => {
//   return new Promise((resolve, reject) => {
//     if (a && b) {
//       a.forEach(item => {
//         // console.log(item)
//         item.classList.add('transparent')
//       })
//       setTimeout(resolve(a, b), time)
//     }
//     else reject(err);
//   })
// }

// transition from active page to new page
const sectTrans = (newC) => {
  let oldBoxes = document.querySelectorAll('.active-box');
  let newBoxes = document.querySelectorAll('.' + newC + '-box');
  let oldLink = document.querySelector('.active-link');
  let newLink = document.querySelector('.' + newC + '-link');

  oldBoxes.forEach(item => {
    item.classList.add('transparent')
  })
  delay(500)
    .then(() => {
      oldBoxes.forEach(item => {
        item.classList.add('hidden')
      })
    })
    .then(() => {
      oldBoxes.forEach(item => {
        item.classList.remove('active-box')
      })
      oldLink.classList.remove('active-link')
    })
    .then(() => {
      newBoxes.forEach(item => {
        item.classList.remove('hidden', 'transparent')
        item.classList.add('active-box')
      })
      newLink.classList.add('active-link')
    })
}

