// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

const colorStates = {
  "red" : "",
  "": "red"
};



// Your JavaScript code goes here!
const articleHearts = document.querySelectorAll('.like-glyph')
function likeCallback(e){
  const heart = e.target
  mimicServerCall()
  .then(function(serverMessage){
    alert("You notified the server")
    alert(serverMessage)
    heart.innertext=glyphStates[heart.innerText]
    heart.style.color = colorStates[heart.style.color]

  })
  .catch(function(error){
    const errorModal=document.getElementById('modal')
    const errorMessage =`Something went wrong`


    errorModal.classList.remove('hidden');
    errorModal.querySelector('h2').textContent = 'Error';
    errorModal.querySelector('p').textContent = errorMessage;


    setTimeout(() => {
      errorModal.classList.add('hidden');
    }, 3000);
  })

}

for (const glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
  }





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
