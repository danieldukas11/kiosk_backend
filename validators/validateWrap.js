const WrapsModel = require("../models/wraps");

// Express Validator
const {body} = require('express-validator');
const rules = [
    body('title', 'Wrap name is required').not().isEmpty()
        .custom(async (title, {req}) => {
            let data = req.body;
            let editCase = data.hasOwnProperty('_id');
            let condition = {title};

            if (!editCase) {

                let existingWrap = await WrapsModel.findOne(condition);
                if (existingWrap !== null) throw new Error('Wrap name exists');
            } else {
                condition._id = {$ne: data._id};
                let existingWraps = await WrapsModel.find(condition);
                if (existingWraps.length !== 0) throw new Error('Wrap name exists');
            }


        })

];

module.exports = {
    rules
};
