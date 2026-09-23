import "dotenv/config";
import app from "./app.js";
import {connectDatabase} from "./config/database.js";

const port=Number(process.env.PORT || 5000);

async function bootstrap(){
 try{
  await connectDatabase();
  app.listen(port,()=>console.log(`Taekwondo Association Navsari API running on http://localhost:${port}`));
 }catch(error){console.error("API startup failed:",error);process.exit(1);}
}

void bootstrap();