const {stations} = require('./db.json')

export default (req, res) => {

const station =stations.filter(s=>s.slug===req.query.slug)

  if(req.method === "GET")
  {
    res.status(200).json(station)
  }
  else {
    res.setHeader('Allow',['GET'])
    res.status(405).json({message : `Method ${req.method} is not allowed yet.`})
  }
}
