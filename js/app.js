
const vid = document.getElementById('video');
const span = document.getElementsByTagName('span');
const caption = document.getElementsByClassName('capt');
const captStart = document.querySelectorAll('caption.dataset');
const dataset = span.dataset;
  // const captEnd = document.querySelector(`span[data-end]`);
  // //const captEnd = document.querySelector(`span[data-end="${e.data-end}"]`);

  //create and event listener that will trigger as the video time updates, attach it to the video element
//vid.addEventListener('timeupdate', () => {

    //inside the event listener. loop over each span element
console.log(caption.dataset.start);

if(vid.currentTime == captStart) {
  console.log('hiya');
}
//});




//caption.className = 'highlight';


// for (let i = 0; i < caption.length; i += 1) {
//       if(vid.currentTime > captStart){
//           span[i].className = 'highlight';
//         } else {
//           caption[i].className = 'capt';
//         };
//       };
//
//
//   });
