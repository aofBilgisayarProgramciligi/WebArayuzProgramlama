 function getUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(data => data.json())
        .then(data => {
            let usersHtml = ``
            data.forEach(d => {
                let userRow = `
                 <tr>
                  <th scope="row">${d.id}</th>
                  <td>${d.username}</td>
                  <td>${d.name}</td>
                  <td>${d.email}</td>
                </tr>`
                usersHtml = usersHtml + userRow
            })
            document.getElementById("user-rows").innerHTML = usersHtml
        })
        .catch(error=>console.log("Veriler yüklenirken hata oluştu : ", error))
}
