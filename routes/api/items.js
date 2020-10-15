const express = require('express')
const router = express.Router()

// item model
const Item = require('../../models/item')

// routes GET All Items
router.get('/',(req,res)=>{
    Item.find()
        .sort({date:-1})
        .then(items=>res.json(items))
})
// Post Items
router.post('/',(req,res)=>{
    const newItem = new Item({
        name:req.body.name
    })
    newItem.save()
            .then((item)=>res.json(item))
})
// Update Items
router.post('/:id',(req,res)=>{
    Item.findById(req.params.id)
    .then((item)=>{
        item.name = req.body.name
        item.save()
            .then(()=>res.json('Item Updated'))
            .catch(err=>res.status(404).json({success:false}))
    })
})
// Delete Items
router.delete('/:id',(req,res)=>{
    Item.findById(req.params.id)
        .then(item=>item.remove().then(()=>res.json({success:true})))
        .catch(err=>res.status(404).json({success:false}))
})

module.exports = router