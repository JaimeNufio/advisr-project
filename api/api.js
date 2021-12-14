const express = require('express')
const cors = require('cors')
const app = express()
const pool = require("./db")

const port = 3000

app.use(cors())
app.use(express.json())

app.post("/company",async(req,res) => {
  try{
    const {name,description,category} = req.body;
    const addCompany = await pool.query(
      "INSERT INTO company(name,description,category)\
      VALUES($1,$2,$3) RETURNING *",[name,description,category])

    res.json(addCompany)
  }catch(err){ console.log(err)}
})

//Just need the name, category, and budget
app.get("/company/all",async(req,res)=>{
  try{
    const allCompanies = await pool.query(
      "SELECT comp.company_id,comp.name,comp.category,ROUND(AVG(cam.budget),0) as avg,COUNT(cam.name) as camCount\
       FROM company comp\
        LEFT JOIN campaign cam ON comp.company_id = cam.company_id\
         GROUP BY comp.name,comp.category,comp.company_id;"
    )

    let outputRows = allCompanies.rows
    
    //little bit of cleanup
    for (let i = 0; i<outputRows.length;i++){
      if (outputRows[i]['avg'] == null){
        outputRows[i]['avg'] = "N/A"
      }
    }
    
    res.json(outputRows)
  }catch (err){ console.log(err)}}
)

app.post("/campaign",async(req,res) => {
  try{
    const {name,budget,company_id} = req.body;
    const addCampaign = await pool.query(
      "INSERT INTO campaign(name,budget,company_id)\
      VALUES($1,$2,$3) RETURNING *",[name,budget,company_id])

    res.json(addCampaign)
  }catch(err){ console.log(err);}
})

app.get("/company/details",async(req,res)=>{
  try{
  const allCampaigns = await pool.query(
    "SELECT loc.lat,loc.lng,comp.name as companyname,cam.name as campaignname,cam.budget,comp.description as desc\
     FROM company comp\
     LEFT JOIN campaign cam ON comp.company_id = cam.company_id\
     LEFT JOIN loc ON comp.company_id = loc.company_id\
     WHERE comp.company_id = $1",[req.query.index])

    let companyDetails = {}
    companyDetails.location = {
      "lat":allCampaigns.rows[0].lat,
      "lng":allCampaigns.rows[0].lng,
    }
    
    companyDetails.campaigns = []
    companyDetails.name = allCampaigns.rows[0].companyname
    companyDetails.desc = allCampaigns.rows[0].desc

    for (let i = 0; i< allCampaigns.rows.length; i++){
      companyDetails.campaigns.push({
        "name":allCampaigns.rows[i]['campaignname'],
        "budget":allCampaigns.rows[i]['budget']
        
      })
    }

  console.log(companyDetails)
  res.json(companyDetails)

  }catch(err){ 
    console.log(err);

    
    
    }
})

app.post("/location",async(req,res) => {
  try{
    const {lat,lng,company_id} = req.body;
    const addLocation = await pool.query(
      "INSERT INTO loc(lat,lng,company_id)\
      VALUES($1,$2,$3) RETURNING *",[lat,lng,company_id])

    res.json(addLocation)
  }catch(err){
    console.log(err);
  }
})


app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`)
})