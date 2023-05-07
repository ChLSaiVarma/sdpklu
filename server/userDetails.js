const mongoose= require("mongoose");
const UserDetailsSchema= new mongoose.Schema(
{
    email:String,
    password:String,
},
{
    collection  :"UserInfo",
}
);
mongoose.model("UserInfo",UserDetailsSchema);