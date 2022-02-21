import app from "./app";
import dbConnection from "./config/mongooseConfig";

dbConnection(`${process.env.MONGO_URI}`);

app.listen(`${process.env.PORT}`, () => console.log(`Server started on port ${process.env.PORT}`));