

function addpost(){
    var title= document.getElementById("title");
    var description =document.getElementById("description");

if(title.value.trim() && description.value.trim()){
    var posts = document.getElementById("posts")
    posts.innerHTML +=
    `<div class="card">
    <div class="card-header">
      @post
    </div>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <p>${title.value}</p>
        <footer class="blockquote-footer">${description.value}</cite></footer>
      </blockquote>
    </div>
  </div>`
 }
 else{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'please enter title & description',
      })
 }
}
