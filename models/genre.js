const mongoose = require('mongoose')

const genreSchema = new mongoose.Schema({
    type: {type: String, required: true},
    
},
{timestamps: true})

const Genre = mongoose.model('Genre', genreSchema)

module.exports = Genre