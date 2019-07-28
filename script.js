//////////////////////////////////////////////
//                                          //
//                                          //
//                                          //
//                                          //
//                                          //
//                                          //
//////////////////////////////////////////////
const search = document.getElementById("search")
search.oninput = onValueChange;
let arr
console.log('hi')
async function getCountries() {
    try {
      const response = await axios.get('https://restcountries.eu/rest/v2/all');
      arr = response.data
      displayList(arr)

  const lenght = response.data
  console.log(lenght)
  //   document.querySelector('#num').innerHTML= response.data.lenght;
  {
      
}
console.log(search)
console.log(response);
} catch (error) {
    console.error(error);
}
}
function onValueChange(e){
    let {value} = e.target
    value = value.toLowerCase()
    console.log(value)
    const filtedArr = arr.filter(item => item.name.toLowerCase().startsWith(value))
    displayList(filtedArr)
}

function displayList(arr) {
    const html = arr.map(item => `<li style="position: relative">
    <img id="isr" src="${item.flag}" alt="">
    <h2>${item.name}</h2>
    <p id="israel">${item.region}</p>
    </li>      `).join('');
    document.querySelector('#list').innerHTML = html;
}

  getCountries()