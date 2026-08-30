async function fetchRestaurants() {
   try {
    const req = await fetch(`https://media2.edu.metropolia.fi/restaurant//api/v1/restaurants/`)
    if (!req.ok) {
      throw new Error(`HTTP error! Status: ${req.status}`);
    }
    return await req.json();
  } catch (error) {
    console.log('Caught Error:', error.message);
  }
}
async function fetchDaymenu(id) {
  try {
    const req = await fetch(`https://media2.edu.metropolia.fi/restaurant//api/v1/restaurants/daily/${id}/en`)
    if (!req.ok) {
      throw new Error(`HTTP error! Status: ${req.status}`);
    }
    return await req.json();
  } catch (error) {
    console.log('Caught Error:', error.message);
  }
}

const table = document.querySelector("table")
const dialog = document.querySelector("dialog")

function createtd(name,address){
  const html = `
    <tr>
      <th>${name}</th>
      <th>${address}</th>
    </tr>  
    `
  table.insertAdjacentHTML('beforeend', html);
}

async function main() {
  const restaurants = await fetchRestaurants()
  
  restaurants.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
  
  for (const restaurant of restaurants){
    createtd(restaurant.name, restaurant.address)
  }
  
  table.addEventListener("click", async (event) => {
    const name = event.target.textContent
    
    const restaurant = restaurants.find(item => item.name === name);
          console.log(restaurant)
    if (restaurant){
     table.querySelectorAll("th").forEach((cell) => cell.classList.remove("highlight"));

      const dayMenu = await fetchDaymenu(restaurant._id);

      let menuHtml = '<ul>';

    for (const course of dayMenu.courses) {
        let dietsText = '';

        if (Array.isArray(course.diets)) {
          dietsText = course.diets.join(', ');
        } else if (typeof course.diets === 'string') {
          dietsText = course.diets;
        }

        menuHtml += `
          <li>
            <strong>${course.name}</strong> - ${course.price || 'N/A'}
            <p>${dietsText}</p>
          </li>
        `;
      }

menuHtml += '</ul>';

      dialog.innerHTML = `
        <form method="dialog">
          <button style="float: right;">✕</button>
        </form>
        <div>
          <h2>${restaurant.name}</h2>
          <p><strong>Address:</strong> ${restaurant.address}</p>
          <p><strong>Postal Code:</strong> ${restaurant.postalCode || 'N/A'}</p>
          <p><strong>City:</strong> ${restaurant.city || 'N/A'}</p>
          <p><strong>Phone:</strong> ${restaurant.phone || 'N/A'}</p>
          <p><strong>Company:</strong> ${restaurant.company || 'N/A'}</p>
          <hr>
          <h3>Today's Menu</h3>
          ${menuHtml}
        </div>
      `;

    dialog.showModal();
    event.target.closest('th').classList.add("highlight");
    }
})
}

main()


