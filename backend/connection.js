const mongoose = require('mongoose');
const url='mongodb+srv://kumarchandu9557:Chandan123@cluster0.o6f816h.mongodb.net/mern11002023?retryWrites=true&w=majority'
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
}).catch((err) => {
    console.error(err);
});
module.exports=mongoose;