
const vid = document.querySelector('video');
const captions = document.querySelectorAll('.text .capt');
const spans = document.querySelectorAll('span');

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

spans.addEventListener('click',() => {
  for (let i = 0; i < spans.length; i++) 


});
// const span = document.querySelectorAll('span');
// //check methods on video element
// span.addEventListener('click', () => {
//
//     caption.classList.add("highlight");
//
//     let start = caption.dataset.start;
//     vid.currentTime = start;
//   });
//






  //   //start back here
  //   //found how to make them both numbers, now I need to make the span clickable
  //   video.currentTime == Number(spanTime);
  //   console.log(spanTime);
  // }
  //
  // });
