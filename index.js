

onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);

    
};

// document.addEventListener("DOMContentLoaded", function() {
  
//   setTimeout(function() {
//       const text=document.querySelectorAll("h1");
//       text.forEach(function(h1) {
//         h1.style.display = "block";
//     });
//   }, 3000); 
// });
  

document.getElementById('login').addEventListener('submit', (e)=>{
  e.preventDefault();

  const answer=document.getElementById('answer').value;

  if( '08022022' === answer){
    window.location.href = 'content.html';
  }else alert("Wrong answer")

  document.getElementById('answer').value="";

  
  });