const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    //_id: Schema.Types.ObjectId,
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    city: String,
    state: String,
    books: [{type: Schema.Types.ObjectId,ref: 'Book'}],
    //libros ue este usuario pide a otros
    requestedBooks: [{type: Schema.Types.ObjectId,ref: 'Book'}],
    //libros que le piden a este usuario
    requiredBooks: [{type: Schema.Types.ObjectId,ref: 'Book'}]
});

module.exports = mongoose.model('User',User);