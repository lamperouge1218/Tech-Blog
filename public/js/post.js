async function postFormHandler(event) {
  event.preventDefault();
  console.log("hello world");
  // get the information from the post form
  const title = document.querySelector("#post-title").value;
  const post_text = document.querySelector("#post-text").value;

  // if both fields have content
  if (title && post_text) {
    // POST to the post route
    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        post_text,
      }),
      headers: { "Content-Type": "application/json" },
    });
    // when the fetch promise is fufilled, check the response status; if the response is good, load the dashboard; if there is an error, alert with the status
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector(".post-form").addEventListener("click", postFormHandler);
