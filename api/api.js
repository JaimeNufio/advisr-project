const express = require('express')
const data = require('./business-list.json')
const app = express()
const port = 3000

app.get('/company/all', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    let output = []

    let calcAvg = (el)=> { 
        {
            let total = 0
            Object.values(el.campaigns).forEach(item => // for each campaign in an element
                total+= item.budget // sum total
            ); 
            total/=el.campaigns.length; // get average
            total=isNaN(total)?"N/A":total;

            return total //wanted to do map/reduce but this works
        }
    }

    data.forEach(el => output.push(
        {
            "Business Name":el.name,
            "Category":el.category,
            "Number of Campaigns":el.campaigns.length,
            "Average Campaign":  calcAvg(el)   
        }
    ))

    res.send(output)
    
})

app.get('/company', (req, res) => {
    res.send(data[req.query.index])
})
  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})