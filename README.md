# M4-D3
## GALLERIA FOTOGRAFICA:

Inizia con il layout di bootstrap messo a disposizione e implementa le seguenti features.

### PRIMA DI INIZIARE:

– Scarica il template da qui —> https://getbootstrap.com/docs/4.3/examples/album/
– Crea un account su Pexels per ricevere la tua chiave di acceso. [https://www.pexels.com/api/new/](https://www.pexels.com/api/new/)
– Questa chiave va inserita negli **headers** della tua richiesta HTTP usando la proprietà “Authorization”.

“`
{Authorization: “LA TUA KEY QUI”}
“`

Non dovrebbe servirti altro per eseguire un GET.

### 💻ESERCIZI:

1. Quando l’utente preme sul pulsante “Load Images”, fai in modo che vengano mostrate le immagini provenienti da `https://api.pexels.com/v1/search?query=[LA TUA QUERY QUI]`
2. Quando l’utente preme sul pulsante “Load Secondary Images”, fai in modo che vengano mostrare le immagini provenienti da `https://api.pexels.com/v1/search?query=[UN’ALTRA QUERY QUI]`
3. Cambia il bottone “Edit” in “Nascondi”
4. Quando l’utente prese il pulsante “Nascondi”, fai sparire la card.
5. Cambia la dicitura “9 mins” nell’angolo della card con l’id dell’immagine
6. Aggiungi un input di testo nel “jumbotron” e usalo per chiamare l’API e cercare altre immagini basandoti sul contenuto dell’input

### 💻EXTRA:

1. Usa i componenti Alert di bootstrap per gestire gli errori con messaggi personalizzati.
2. Aggiungi un carosello alla fine della pagina con le immagini da un’altra chiamata all’API.
3. Quando l’utente preme il bottone “view” nella card, apri l’immagine in un modal

### 💻ALTRI EXTRA:

1. Use the `.map` method to create, from your API response, an array containing just the url strings (you can display the result with a console.log)
2. Usa il metodo “.map” per creare, dalla risposta dell’API, un’array contenente SOLO le URL delle immagini.
3. Usa il metodo “.filter” per modificare la risposta dell’API mantenendo solo le immagini con un certo autore.

DOCUMENTAZIONE: `[https://www.pexels.com/api/documentation/?language=javascript#photos-search](https://www.pexels.com/api/documentation/?language=javascript#photos-search)`

### ⚠️SUGGERIMENTI!⚠️

1. Se necessario, testa l’API su Postman
2. Per ricreare le cards, puoi cambiare l’attributo “src” di tutte le immagini presenti o puoi ricreare completamente le card da zero.
3. Usa le funzioni a freccia per prenderci confidenza!
