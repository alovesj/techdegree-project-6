
const vid = document.querySelector('video');
const captions = document.querySelectorAll('.text .capt');

//create and event listener that will trigger as the vid time updates, attach it to the vid element
vid.addEventListener('timeupdate', () => {
  for (let i = 0; i < captions.length; i++) {
    const caption = captions[i];
    let start = caption.dataset.start;
    let end = caption.dataset.end;
    if (vid.currentTime >= start && vid.currentTime < end) {
      caption.classList.add("highlight");
    } else {
      caption.classList.remove("highlight");
    }
  }
});

const span = document.querySelector('span');
const spanTime = document.querySelector('span').dataset.start;
const video = document.querySelector('video');
//check methods on video element
span.addEventListener('click', () => {
  for (let i = 0; i < span.length; i++) {
    const chosenspan = span[i];
    chosenspan.classList.add('highlight');






    //start back here
    //found how to make them both numbers, now I need to make the span clickable
    video.currentTime == Number(spanTime);
    console.log(spanTime);
  }

  });
