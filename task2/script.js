async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    const tbody = document.getElementById("userTable").querySelector("tbody");

    users.forEach((user) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                  <td><i>${user.id}</i></td>
                  <td>${user.name}</td>
                  <td>${user.username}</td>
                  <td>${user.email}</td>
                  <td>${user.phone}</td>
                  <td>${user.website}</td>
                  <td><button onclick="deleteUser(${user.id})">Delete</button></td>
              `;
      tbody.appendChild(row);
    });
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

function deleteUser(userId) {
  const tbody = document.getElementById("userTable").querySelector("tbody");
  const rows = tbody.getElementsByTagName("tr");

  for (let row of rows) {
    const cell = row.cells[0];
    if (cell.textContent == userId) {
      tbody.removeChild(row);
      break;
    }
  }
}

fetchUsers();
