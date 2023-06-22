let dataInject = document.getElementById("dataInject");


let apiName = "https://api.nasa.gov"
let apiEndpoint = "/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2020-6-3&page=1"
let apiKey = "&api_key=PYmNwCg5hWCWcNOcRIiEpDwCPphUqbGllODeUjkF"

fetchFunction(apiName + apiEndpoint + apiKey)

async function fetchFunction(url)
{
    const response = await fetch(url)
    console.log(response)

    if(response.ok)
    {
        let jsonData = await response.json();
        console.log(jsonData.photos)

        if(Array.isArray(jsonData.photos))
        {
            jsonData.photos.forEach(photos => {
                displayData(photos)
            })
        }
    }
}

function displayData(data)
{
    let imgCol = document.createElement("div")
    imgCol.className = "col-12"

    let img = document.createElement("img")
    img.setAttribute('src', data.img_src);
    img.className = "img-fluid maxHeight"

    imgCol.appendChild(img)

    //text
    let textCol = document.createElement("div")
    textCol.className = "col-12"

    let CameraType = document.createElement("h2")
    CameraType.innerText = "View: " + data.camera.full_name;

    let roverName = document.createElement("h2");
    roverName.innerText = "Rover Name: " + data.rover.name;

    let roverStatus = document.createElement("h2");
    roverStatus.innerText = "Status: " + data.rover.status;

    textCol.appendChild(CameraType);
    textCol.appendChild(roverName);
    textCol.appendChild(roverStatus);

    dataInject.appendChild(imgCol);
    dataInject.appendChild(textCol);

}