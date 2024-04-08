const activitySelect = document.getElementById('activitySelect')
const activityContainer = document.getElementById('activityContainer')
const addBtn = document.createElement('button')
const babyEatingImgUrl = 'imgs/babyfood.png'
const bottleImageUrl = 'imgs/baby-bottle.png'
const diaperImageUrl = 'imgs/diaper.png'
const babysleepingImageUrl = 'imgs/sleepImage.png'



// create diaper info
function createDiaper(){
    const iconimage = document.createElement('img')
    iconimage.setAttribute('src',diaperImageUrl)
    iconimage.setAttribute('height',50)
    iconimage.setAttribute('width',50)
    iconimage.classList.add('mt-3', 'mb-3')

    const activityWrapper = document.createElement('div')
    activityWrapper.id = 'activityWrapper'
    const detailsDiv = document.createElement('div')
    detailsDiv.classList.add('details')
    const todayElement = document.createElement('h1')
    todayElement.textContent = getFormattedDate()
    const detailText = document.createElement('h3')
    detailText.textContent = 'Detalles del Pañal'
    const selectElement = document.createElement('select')
    selectElement.id = 'detailSelect'
    selectElement.classList.add('text-center')
    const option1 = document.createElement('option')
    option1.value = "Mojado"
    option1.textContent = "Mojado 💦"
    selectElement.appendChild(option1)
    const option2 = document.createElement('option')
    option2.value = "Caca"
    option2.textContent = "Caca 💩"
    selectElement.appendChild(option2)
    const option3 = document.createElement('option')
    option3.value = "Ambos"
    option3.textContent = "Ambos 🤢"
    selectElement.appendChild(option3)
    addBtn.classList.add('mt-2', 'mb-3')
    addBtn.id = 'addDiaperBtn'
    addBtn.textContent = "Añadir Pañal"
    const titulo = document.createElement('h1')
    titulo.textContent = "Detalle De Pañales"
    const total = document.createElement('h4')
    total.textContent = "Total: "
    const mojado = document.createElement('h4')
    mojado.textContent = "Pañales Mojados 💦: "
    const caca = document.createElement('h4')
    caca.textContent = "Pañales Caca 💩: "
    const ambos = document.createElement('h4')
    ambos.textContent = "Pañal con Todo 🤢: "
    const detalles = document.createElement('h2')
    detalles.textContent = "Detalles"
    const detailsContainer = document.createElement('div')
    detailsContainer.id = 'detailsContainer'
    detailsContainer.append(titulo,mojado,caca,ambos,total)

    activityContainer.appendChild(iconimage)
    activityContainer.appendChild(todayElement)
    activityContainer.appendChild(detalles)
    activityContainer.appendChild(activityWrapper)

    activityWrapper.append(detailsDiv)
    activityWrapper.append(selectElement)
    activityWrapper.append(addBtn)
    activityWrapper.append(detailsContainer)
    
}

function createFood(){
    const iconimage = document.createElement('img')
    iconimage.setAttribute('src',babyEatingImgUrl)
    iconimage.setAttribute('height',50)
    iconimage.setAttribute('width',50)
    iconimage.classList.add('mt-3', 'mb-3')

    const activityWrapper = document.createElement('div')
    activityWrapper.id = 'activityWrapper'
    const detailsDiv = document.createElement('div')
    detailsDiv.classList.add('details')
    const todayElement = document.createElement('h1')
    todayElement.textContent = getFormattedDate()
    const detailText = document.createElement('h3')
    detailText.textContent = 'Que comió?'
    const selectElement = document.createElement('select')
    selectElement.id = 'detailSelect'
    selectElement.classList.add('text-center')
    const option1 = document.createElement('option')
    option1.value = "Botella"
    option1.textContent = "Botella 🍼 #leche"
    selectElement.appendChild(option1)
    const option2 = document.createElement('option')
    option2.value = "Teta"
    option2.textContent = "Teta 🤱"
    selectElement.appendChild(option2)
    const option3 = document.createElement('option')
    option3.value = "Baby Food"
    option3.textContent = "Baby Food 🍲"
    selectElement.appendChild(option3)
    addBtn.classList.add('mt-2', 'mb-3')
    addBtn.id = 'addBtn'
    addBtn.textContent = "Añadir Comida"
    const titulo = document.createElement('h1')
    titulo.textContent = "Conteo de Comidas"
    const botellas = document.createElement('h4')
    botellas.textContent = "Botellas 🍼: "
    const tetas = document.createElement('h4')
    tetas.textContent = "Tetas 🤱: "
    const babyFood = document.createElement('h4')
    babyFood.textContent = "Baby Food 🥫: "
    const detalles = document.createElement('h2')
    detalles.textContent = "Detalles"
    const detailsContainer = document.createElement('div')
    detailsContainer.id = 'detailsContainer'
    const total = document.createElement('h4')
    total.textContent = "Total: "
    detailsContainer.append(titulo,botellas,tetas,babyFood,total)

    activityContainer.appendChild(iconimage)
    activityContainer.appendChild(todayElement)
    activityContainer.appendChild(detalles)
    activityContainer.appendChild(activityWrapper)

    activityWrapper.append(detailsDiv)
    activityWrapper.append(selectElement)
    activityWrapper.append(addBtn)
    activityWrapper.append(detailsContainer)
}

function createSleep(){
    const iconimage = document.createElement('img')
    iconimage.setAttribute('src',babysleepingImageUrl)
    iconimage.setAttribute('height',50)
    iconimage.setAttribute('width',50)
    iconimage.classList.add('mt-3', 'mb-3')

    const activityWrapper = document.createElement('div')
    activityWrapper.id = 'activityWrapper'
    const detailsDiv = document.createElement('div')
    detailsDiv.classList.add('details')
    const todayElement = document.createElement('h1')
    todayElement.textContent = getFormattedDate()
    const detailText = document.createElement('h3')
    detailText.textContent = 'Dormid@ / Despiert@ ?'
    const selectElement = document.createElement('select')
    selectElement.id = 'detailSelect'
    selectElement.classList.add('text-center')
    const option1 = document.createElement('option')
    option1.value = "Dormido"
    option1.textContent = "Durmiendo 😴"
    selectElement.appendChild(option1)
    const option2 = document.createElement('option')
    option2.value = "Despiert0"
    option2.textContent = "Despiert@ 👁️"
    selectElement.appendChild(option2)
    addBtn.classList.add('mt-2', 'mb-3')
    addBtn.id = 'addBtn'
    addBtn.textContent = "Añadir Actividad"
    const titulo = document.createElement('h1')
    titulo.textContent = "Conteo de Actividad"
    const durmiendo = document.createElement('h4')
    durmiendo.textContent = "Durmiend@ 😴: "
    const despierto = document.createElement('h4')
    despierto.textContent = "Despiert@ 👁️: "
    const detalles = document.createElement('h2')
    detalles.textContent = "Detalles"
    const detailsContainer = document.createElement('div')
    detailsContainer.id = 'detailsContainer'
    const total = document.createElement('h4')
    total.textContent = "Total: "
    detailsContainer.append(titulo,durmiendo,despierto,total)
    
    activityContainer.appendChild(iconimage)
    activityContainer.appendChild(todayElement)
    activityContainer.appendChild(detalles)
    activityContainer.appendChild(activityWrapper)

    activityWrapper.append(detailsDiv)
    activityWrapper.append(selectElement)
    activityWrapper.append(addBtn)
    activityWrapper.append(detailsContainer)
}

// get Date
function getFormattedDate() {
    let today = new Date();
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let day = days[today.getDay()];
    let month = months[today.getMonth()];
    let date = today.getDate();
    let year = today.getFullYear();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
  
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)
    minutes = minutes < 10 ? '0' + minutes : minutes;
  
    var formattedDate = day + ' ' + month + ' ' + date + ' ' + year + ' ' + hours + ':' + minutes + ' ' + ampm;
    return formattedDate;
  }

// Activiy Select Event Listener
  activitySelect.addEventListener('change',()=>{
    if(activityContainer.hasChildNodes()){
        while(activityContainer.firstChild){
            activityContainer.removeChild(activityContainer.firstChild)
        }
    }
    if(activitySelect.value == "Pañal"){
        createDiaper()
    }
    if(activitySelect.value == "Comer"){
        createFood()
    }
    if(activitySelect.value == "Dormir"){
        createSleep()
    }

})

addBtn.addEventListener('click', () => {
    let activity = activitySelect.value;
    let detail = document.getElementById('detailSelect').value;
  
    switch(activity){
        case "Pañal":
            // add +1 to total
            switch(detail){
                case "Mojado":
                // add +1 to mojado
                break;
                case "Caca":
                // add +1 to caca
                break;
                case "Ambos":
                // add +1 to ambos
                break;
            }
        break;
        case "Comer":
            // add +1 to total
            switch(detail){
                case "Botella":
                // add +1 to botella
                break;
                case "Teta":
                // add +1 to Teta
                break;
                case "Baby Food":
                // add +1 to baby food
                break;
            }
        break;
        case "Dormir":
            // add +1 to total
            switch(detail){
                case "Dormido":
                // add +1 to dormido
                break;
                case "Despierto":
                // add +1 to despierto
                break
            }
    }
  
    
    
  });
  
  // Function to update the UI with the latest counts
