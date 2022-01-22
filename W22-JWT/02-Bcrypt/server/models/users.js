const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = new Schema({
    username : {
        type: String,
        required: true,
        dropDups: true
    },
    pass: {
        type: String,
        required: true
    }
    
})

userSchema.pre('save', function(next) { // executing some actions before saving the user to DB

    console.log('pre here')
    console.log('next is', next)


    const user = this; // this is the user instance create in the route
    console.log('user is', user)

    if (user.isModified('pass')) { // check if pass exists in user object

        console.log('pass is MODIFIED')

        // 1. Salt the password
        // syntax: bcrypt.gensalt(thesalt, cb)
        bcrypt.genSalt(saltRounds, function(err, salt) {

            console.log('The salt is', salt)

            if (err) return next(err);

            // 2. hash the salted pass

            bcrypt.hash(user.pass, salt, function(err, hash){

                console.log('hash is', hash)
                if (err) return next(err)

                user.pass = hash;

                next();
            })
        })
    } else {
        console.log('pass is not modified')
        next() // call the next middleware/ function in the pipeline
    }
})

userSchema.methods.comparePassword = async (providedPass, dbPass) => {

    console.log('Compare pass: provided pass', providedPass )
    console.log('Compare pass: dbpass', dbPass )

    return await bcrypt.compare(providedPass, dbPass)
}
const User = mongoose.model('User', userSchema)

module.exports = User