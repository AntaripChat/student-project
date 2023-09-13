const app = require('./app');
const {PORT} = require('./src/config/server.config')

app.get('/',(req,res)=>{
    res.send("Hello World")
})
app.listen(PORT,()=>console.log(`App running on http://localhost:${PORT}`))