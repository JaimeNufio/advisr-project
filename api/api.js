const express = require('express')
const data = require('./business-list.json')
const app = express()
const port = 3000

const transform = (data) => { 

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
            "BusinessName":el.name,
            "Category":el.category,
            "Number of Campaigns":el.campaigns.length,
            "Average Campaign Budget":  calcAvg(el),
            "id":el.id-1
        }
    ))

    return output
}

app.get('/company/all', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    res.send(transform(data))
    
})

app.get('/company/details', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send((data[req.query.index]))
})

app.get('/', (req, res) => {
    res.send('EHE')
})
  
  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})