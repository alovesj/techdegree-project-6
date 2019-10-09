const vid = document.querySelector('video');
const captions = document.querySelectorAll('.text .capt');
const spans = document.querySelectorAll('span');

//create and event listener that will trigger as the vid time updates, attach it to the vid element
vid.addEventListener('timeupdate', () => {
  for (var i = 0; i < captions.length; i++) {
    const caption = captions[i];
    var start = caption.dataset.start;
    var end = caption.dataset.end;
    if (vid.currentTime >= start && vid.currentTime < end) {
      caption.classList.add("highlight");
    } else {
      caption.classList.remove("highlight");
    }
  }
});

$(spans).click(function(event) {
  const captionStart = parseFloat(event.target.getAttribute('data-start'));
  vid.setCurrentTime(captionStart);
  vid.play();
});
