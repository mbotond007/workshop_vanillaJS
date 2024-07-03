function usercheck2(func)
{
   fetch("modules/usercheck.php", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({})
  })
  .then(response => response.json())
  .then(answer => {func(answer)}) //send json, not string
  .catch(error => {
   console.error('Error:', error);
   });

}
