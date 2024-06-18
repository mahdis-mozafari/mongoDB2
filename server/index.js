const express = requier('express')
const {Connection} = require('./db')
const cors = require('cors')


const app = express()
app.use(express.json())
app.use(express.urlencoded({extends:true}))
app.use(cors())


const start = async()=>{
    try {
        await Connection("mongodb+srv://mahdisbano3:6644459@cluster0.gbdpezd.mongodb.net/")
        app.listen(5000,()=>{
            console.log('app is runing');
        })
    } catch (error) {
        console.log(error);
    }
   
}
start()