async function loadUsers() {
  const response = await fetch("https://raw.githubusercontent.com/Solnick/users/master/db.json");
  return response.json();
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const users = await loadUsers();
    const divContainer = document.getElementById('content');
      var temp = "";

      users.users.forEach((itemData) => {
        temp += "<tr>";
        temp += "<td>" + itemData.uris.company +  "</td>";
        temp += "<td>" + itemData.email + "</td>";
      });


      
      console.log(temp)  
      document.getElementById('data').innerHTML = temp;
  } catch (e) {
    console.log('ERROR');
    console.log(e);
  }
  });


  /*fetch("https://raw.githubusercontent.com/Solnick/users/master/db.json").then(
  res => {
    res.json().then(
      dane => {
        console.log(dane.users);
        console.log(dane.companies);
          if (dane.users.length > 0) {

          var temp = "";
          dane.users.forEach((itemData) => {
            temp += "<tr>";
            temp += "<td>" + itemData.uris.company + "</td>";
            temp += "<td>" + itemData.name + "</td>";
            temp += "<td>" + itemData.email + "</td>";
          });
          dane.companies.forEach((itemData2) => {
            temp += "<td>" + itemData2.name + "</td></tr>";
          });

          document.getElementById('data').innerHTML = temp;

        }
      }
    ) 
  }
)
*/