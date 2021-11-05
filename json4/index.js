async function loadData() {
  const response = await fetch("https://raw.githubusercontent.com/Solnick/users/master/db.json");
  return response.json();
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const jsondata_var = await loadData();
    const divContainer = document.getElementById('content');
      var table_data = "";
      var table_data2 = "";


      /*jsondata_var.companies.forEach((itemData2) => {
        table_data2 += "{" +itemData2 + "}";
      })*/
      
      jsondata_var.companies.forEach((itemData) => {
        table_data += "<tr>";
        table_data += "<td>" + itemData.name +  "</td>";
        table_data += "<td>" +"Tu bym chcial dane z table_data2 wstawic(if uris: z users == uri: z companies) to zaciągnąc user id"+  "</td>";
      })

      

      /*users_var.companies.forEach((itemData) => {        
        table_data += "<tr>";
        table_data += "<td>" + itemData.name +  "</td>"+"</tr>";
      })
      users_var.users.forEach((itemData2) => {        
        table_data2 += "<tr>";
        table_data2 += "<td>" + itemData2.name +  "</td>"+"</tr>";
      })*/


      /*const a =users_var.companies.name 
      const b =users_var.users.name 
      a.forEach((itemData1) => {
        table_data += "<tr>"+ "<td>" + itemData1+ "</td>" +"</tr>";
        table_data += "<tr>"+ "<td>" + itemData1+ "</td>" +"</tr>";
  
      /*b.forEach((itemData2) => {
        if (itemData1.name == itemData2.name) {
        table_data += "<tr>"+ "<td>" + itemData2.name+ "</td>" +"</tr>";
        table_data += "<tr>"+ "<td>" + itemData2.name+ "</td>" +"</tr>";
      }})*/

      document.getElementById('data').innerHTML = table_data;
      document.getElementById('data2').innerHTML = table_data2;
      console.log(table_data2)
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