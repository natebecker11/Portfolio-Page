// event listener for making thumb paragraphs and links appear on hover
document.querySelectorAll('.thumb-box').forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.querySelectorAll('.thumb-card-double-header').forEach(item => {
      item.style.color = '#ef6461';
    })
  })
  item.addEventListener('mouseleave', () => {
    item.querySelectorAll('.thumb-card-double-header').forEach(item => {
      item.style.color = '#ffffff';
    })
  })
})