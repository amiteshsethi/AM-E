import app from "./app.js"
import { connectToDatabase } from "./db/connection.js"


//connections and listeners 
connectToDatabase().then(() => {
        app.listen(5000, () => {console.log(" Database Connected & Server Started......")})
    })
    .catch((err) => console.log(err));

