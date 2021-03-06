const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// reactionschema NOT a model/exported
const ReactionSchema = new Schema(
    {
        
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },

        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },

        username: {
            type: String,
            required: true,
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
    },

    {
        toJSON: {
            getters: true
        }
    }
);

// thoughtschema exported as model
const ThoughtSchema = new Schema(
    {
        
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },

        username: {
            type: String,
            required: true,
        },

        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);
// virtual for reactionCount to push new entries into an array in the thought model
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

// create the Thought model using the ThoughtSchema
const Thought = model('Thought', ThoughtSchema);

// export the Thought model
module.exports = Thought;