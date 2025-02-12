import mongoose from "mongoose"
import  app from "./app"
import confiq from "./confiq"
async function save(){
  try{
 await mongoose.connect(confiq.database_url as string)
 app.listen(confiq.port, () => {
  console.log(`Example app listening on port ${confiq.port}`)
})
  }
  catch(error){
    console.log(error)
  }
}

save()
