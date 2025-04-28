<p align="center">
 <img src="https://raw.githubusercontent.com/MicaelliMedeiros/micaellimedeiros/master/image/computer-illustration.png"/>

<img src="https://img.shields.io/badge/TypeScript-black?style=for-the-badge&logo=typescript&logoColor=white"/>
</p>

# necessary 

## typescript 
```
npm install -g typescript
```

## running 
```bash
git clone https://github.com/Swag666baby/torrent-api
cd torrent-api
npm install
npm run build
npm start
```

## examples 
**• to add one game 🖊️**
```typescript 
import axios from "axios";

const addGame = async() => {
    const post = await axios.post("http://localhost:4000/add", 
    {
        "title": "Grand Theft Auto VI",
        "magnet": "magnet:?xt=urn:btih:00712d7327b47hf7hh8h0hf04fh0f",
        "page": "12",
        "repacker": "Xatab",
        "fileSize": "340 GB",
        "uploadDate": "2027-08-1 23:00:00.000",
        "createdAt": "2024-03-21 02:03:49.000",
        "updatedAt": "2024-03-21 02:03:49.000"
    })
    console.log(post.data)
}
```

**• to delete game 🗑**
```typescript 
import axios from "axios";

const deleteGame = async() => {
    const post = await axios.post("http://localhost:4000/delete", {"id": 1})
    console.log(post.data)
}
```

**• to search games 🔎**

The search can be done by both name and id

```typescript 
import axios from "axios";

const searchGame = async() => {
    const request = await axios.get("http://localhost:4000/search?q=stardew")
    console.log(request.data)
}
```
