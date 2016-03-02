var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
        username:{ type: 'String' },
        password: { type: 'String' },
        salt: {type: 'String'},
        firstName: { type: 'String' },
        lastName: { type: 'String' },
        birthdate: { type: 'Date' },
        location: { type: 'String' },
        weight: { type: 'Number' },
        weightGoal: { type: 'Number' },
        dietaryRestrictions: {
            paleo: { type: 'Boolean' },
            vegan: { type: 'Boolean' }, 
            vegetarian: { type: 'Boolean' },
            kosher: { type: 'Boolean' },
            halal: { type: 'Boolean' },
        },
        allergies: {
            milk: { type: 'Boolean' }, 
            eggs: { type: 'Boolean' }, 
            fish: { type: 'Boolean' }, 
            shellfish: { type: 'Boolean' }, 
            tree_nuts: { type: 'Boolean' }, 
            peanuts: { type: 'Boolean' }, 
            wheat: { type: 'Boolean' }, 
            soybeans: { type: 'Boolean' }, 
            gluten: { type: 'Boolean' }, 
        }
    }
); 

var User = mongoose.model('User',userSchema);

module.exports = User;