function check(){
  const posts=document.querySelectorAll("post");
  posts.forEach(function(post){ 
    post.addEventListener("click",() => { 
      const postId = post.getAttribute("data-id");
      const XHR=new XHLHttpRequest();
      XHR.open("GET",'/posts/${postID}', true);
      XHR.responseType="json";
      XHR.send();
      XHR.onload = () => {
        if (XHR.status != 200) {
          alert(`Error ${XHR.status}: ${XHR.statusText}`);
          return null;          
        }
        const item = XHR.response.post;
        if (item.checked === true) {
        post.setAttribute("data-check", "true");
        } else if (item.checked === false) {
        post.removeAttribute("data-check");
        }
      };
    });
  });
}
window.addEventListener("load",check);