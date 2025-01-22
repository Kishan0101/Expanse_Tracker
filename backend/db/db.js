const mongoos = require('mongoose');
const connectDB = async()=>{
    try {
        await mongoos.connect('mongodb+srv://kishan:kishann@cluster0.d987l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
            console.log("Connected!!!")
    } catch (error) {
        console.log("Not Connected!!")
    }
}
module.exports = connectDB