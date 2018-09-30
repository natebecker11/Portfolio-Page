// event listener for making thumb paragraphs and links appear on hover
document.querySelectorAll('.thumb-box').forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.querySelectorAll('.thumb-header').forEach(item => {
      item.style.color = '#ef6461';
    })
    // item.querySelector('.thumb-card-single-header').style.color = '#ef6461';
    item.querySelector('.thumb-bg').style.opacity = .8;
    item.querySelector('.url-logo').style.opacity = 1;
    item.querySelector('.git-logo').style.opacity = 1;
    item.querySelector('.thumb-text').style.opacity = 1;
  })
  item.addEventListener('mouseleave', () => {
    item.querySelectorAll('.thumb-header').forEach(item => {
      item.style.color = '#ffffff';
    })
    // item.querySelector('.thumb-card-single-header').style.color = '#ffffff';
    item.querySelector('.thumb-bg').style.opacity = 1;
    item.querySelector('.url-logo').style.opacity = 0;
    item.querySelector('.git-logo').style.opacity = 0;
    item.querySelector('.thumb-text').style.opacity = 0;
  })
})