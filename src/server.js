const { getClient } = require('./client/elasticsearch')

const app = require('express')()

const client = getClient()

app.get('/list', async (req, res)=>{
    const results = await client.search({index:'elastic_teste', size:10000})
    res.json(results.hits.hits)
})

app.get("/create", async (req,res)=> {

    const result = await client.index({
        index: 'elastic_teste',
        type: 'type_elastic_teste',
        body: {
            user: 'Sostenes Apollo Last',
            email: 'last',
            password: 'last'
        }
    })

    res.json(result)
})

app.get('/delete_last', async (req, res)=>{
    const results = await client.search({index:'elastic_teste', size:10000})
    if(results.hits.total.value === 0) return res.json({error : "No data"})
    const id = results.hits.hits.pop()._id
    const index = 'elastic_teste'
    
    console.log('last', results.hits.hits.pop(), id);
    
    const deleteResult = await client.delete({index, id})
    res.json({success:id+' Deleted'})
})



app.listen(3000,()=> console.log('Running'))