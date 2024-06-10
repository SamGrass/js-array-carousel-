// inserire dinamicamente le immagini da js all'html
    // inserire le immagini in un array
    const imageList = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];

    const itemContainer = document.querySelector(".carosello");
    // creo un ciclo nel quale ottengo gli elementi
    for (let i = 0; i < imageList.length; i++) {
        const imageItem = imageList[i];
        
        console.log(imageItem);

        // creo degli elementi che conterranno le immagini
        let itemContent = `
                <div class="image-container">
                    <img src="${imageItem}" alt="">
                </div>`

        itemContainer.innerHTML += itemContent;
    }

    
