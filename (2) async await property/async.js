async function fetchUser() {

  const loading = document.getElementById("loading");
  const output = document.getElementById("output");

  output.innerHTML = "";
  loading.style.display = "block";

  try {

    // fetch local JSON file
    const response = await fetch("data.json");

    // convert JSON to object
    const user = await response.json();

    loading.style.display = "none";

    // display user data
    output.innerHTML = `
      <div class="card">
        <h3>${user.name}</h3>
        Username: ${user.username}<br>
        Email: ${user.email}<br>
        Phone: ${user.phone}<br>
        Website: ${user.website}<br><br>

        <strong>Address</strong><br>
        ${user.address.street}, ${user.address.suite}<br>
        ${user.address.city} - ${user.address.zipcode}<br><br>

        <strong>Company</strong><br>
        ${user.company.name}
      </div>
    `;

  } catch (error) {

    loading.style.display = "none";
    output.innerHTML = "Error loading data!";
    console.log(error);

  }
}
