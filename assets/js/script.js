
// function to set a delay between actions
const delay = interval => {
  return new Promise(resolve => {
    setTimeout(resolve, interval);
  });
}

// transition from active page to new page, taking new page name as parameter
const sectTrans = (newC) => {
  // define the current/new page-content/link
  let oldBoxes = document.querySelectorAll('.active-box');
  let newBoxes = document.querySelectorAll('.' + newC + '-box');
  let oldLink = document.querySelector('.active-link');
  let newLink = document.querySelector('.' + newC + '-link');
  // fade the old content away
  oldBoxes.forEach(item => {
    item.classList.add('transparent')
  })
  // wait .5s
  delay(500)
    .then(() => {
      // remove from DOM
      oldBoxes.forEach(item => {
        item.classList.add('hidden')
      })
    })
    .then(() => {
      // remove active status
      oldBoxes.forEach(item => {
        item.classList.remove('active-box')
      })
      oldLink.classList.remove('active-link')
    })
    .then(() => {
      // fade in and display new content, tag as active
      newBoxes.forEach(item => {
        item.classList.remove('hidden', 'transparent')
        item.classList.add('active-box')
      })
      newLink.classList.add('active-link')
    })
}


// event listener for head links
document.querySelectorAll('.head-link').forEach(item => {
  item.addEventListener('click', () => {
    if (!item.classList.contains('active-link')){
      sectTrans(item.getAttribute('data-name'))
    }
  })
})

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