const headers = {Authorization: "KaIO0HoWKCG5EMCBozFNFPW2l1jyNMdEuyKiwI42y6zCb1OBmx2CPWgo"}

const main = document.getElementsByTagName("main")[0];

let cardPhotos = [];

const fetchApi = (queryString) => {
    return fetch("https://api.pexels.com/v1/search?query=" + queryString, { headers: headers })
        .then(response => {
            return response.json().then(json => {
                if (response.ok) {
                    let onlyUrls = json.photos.map(photo => photo.src.original);
                    console.log(onlyUrls);
                    return json.photos;
                } else {
                    throw new Error(json.code);
                }
            })
        })
        .catch(e => {
            console.log('Error: ' + e);
                return alert('inserire un valore');
                //se non si inserisce testo
        })
}

const checkOtherAlerts = () => {
    const alerts = document.getElementsByClassName("alert");
    if (alerts.length > 0) {
        return alerts[alerts.length - 1].offsetTop + alerts[alerts.length - 1].offsetHeight + alerts[0].offsetTop;
    }
    return false;
}

const createAlert = (message, className) => {
    let div = document.createElement("div");
    div.role = "alert";
    div.className = 'position-absolute alert-position alert-dismissible fade show alert alert-' + className;
    div.innerText = message;
    let button = document.createElement("button");
    button.type = "button";
    button.className = "close";
    button.setAttribute("data-dismiss", "alert");
    button.ariaLabel = "Close";
    let span = document.createElement("span");
    span.ariaHidden = "true";
    span.innerHTML = "&times;";
    button.appendChild(span);
    let OffsetPosition = checkOtherAlerts();
    if (OffsetPosition) {
        div.style.top = `${OffsetPosition}px`;
    }
    div.appendChild(button);
    main.appendChild(div);
}

const handleFetch = async (queryString) => {
    cardPhotos = await fetchApi(queryString);
    addImages(cardPhotos);
}

const handleFilter = () => {
    const filterEl = document.getElementById("filter-author-input");
    let authorFilter = filterEl.value;
    addImages(cardPhotos.filter(photo => photo.photographer.toLowerCase().includes(authorFilter.toLowerCase())));
    filterEl.value = "";
}

const addImages = (photos) => {
    let photoContainer = document.getElementById("photo-container");
    let photoRow = photoContainer.querySelector("div");
    photoRow.innerHTML = "";
    photoRow.append(...photos.map(photo => createCard(photo)));
    let filterDiv = document.getElementById("filter");
    if (photos.length > 0 && !filterDiv) {
        filterDiv = document.createElement("div");
        filterDiv.className = "row align-items-center";
        filterDiv.id = "filter";
        filterDiv.innerHTML = `<div class="col-12 col-lg-9 px-1">
                               <input type="text" class="form-control" placeholder="Filter the author"id="filter-author-input">
                                </div>
                                <div class="col-12 col-lg-3">
                                <button type="button" class="btn btn-secondary my-2" id="load-other" onClick = "handleFilter()">Filter</button>
                                </div>`;
        main.querySelector(".container").appendChild(filterDiv);
    }
}

const hideElement = (element) => {
    element.classList.add("d-none");
}

const createCard = (photo) => {
    let colDiv = document.createElement("div");
    colDiv.classList.add("col-md-4");
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "mb-4", "shadow-sm");
    let imgContainer = document.createElement("div");
    imgContainer.className = "img-container";
    let img = document.createElement("img");
    img.src = photo.src.large;
    let bodyDiv = document.createElement("div");
    bodyDiv.classList.add("card-body");
    let par = document.createElement('p');
    par.classList.add("card-text");
    par.innerText = photo.photographer;
    let flexDiv = document.createElement("div");
    flexDiv.classList.add("d-flex", 'justify-content-between', "align-items-center");
    let btnGroupDiv = document.createElement("div");
    btnGroupDiv.classList.add("btn-group");
    let buttonView = document.createElement("button");
    buttonView.type = "button";
    buttonView.innerText = "View";
    buttonView.setAttribute("data-toggle", "modal");
    buttonView.setAttribute("data-target", "#imageModal");
    buttonView.onclick = () => setModal(photo);
    let buttonHide = document.createElement("button");
    buttonHide.type = "button";
    buttonHide.innerText = "Nascondi";
    buttonView.classList.add("btn", "btn-sm", "btn-outline-secondary");
    buttonHide.classList.add("btn", "btn-sm", "btn-outline-secondary");
    buttonHide.onclick = event => hideElement(colDiv);
    let smallText = document.createElement("small");
    smallText.innerText = photo.id;
    smallText.classList.add("text-muted");
    btnGroupDiv.append(buttonView, buttonHide);
    flexDiv.append(btnGroupDiv, smallText);
    bodyDiv.append(par, flexDiv);
    imgContainer.appendChild(img);
    cardDiv.append(imgContainer, bodyDiv);
    colDiv.append(cardDiv);
    return colDiv;
}

const setModal = (photo) => {
    console.log(photo);
    let modal = document.getElementById("imageModal");
    modal.querySelector(".modal-title").textContent = photo.alt;
    let imgContainer = document.createElement("div");
    let imgEl = document.createElement("img");
    imgEl.src = photo.src.large;
    let modalBody = modal.querySelector(".modal-body");
    modalBody.innerHTML = "";
    imgContainer.appendChild(imgEl);
    modalBody.appendChild(imgEl);
}
document.getElementById("load-main").onclick = (e) => handleFetch(e.target.name);
document.getElementById("load-secondary").onclick = (e) => handleFetch(e.target.name);
document.getElementById("load-other").onclick = () => {
    let inputEl = document.getElementById("load-other-input");
    handleFetch(inputEl.value);
    inputEl.value = "";
}
