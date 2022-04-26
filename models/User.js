const { Schema, model } = require('mongoose');

// userschema exported as model
const UserSchema = new Schema(
    {

        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: /.+\@.+\..+/,
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
{
    toJSON: {
        virtuals: true,
    },
    id: false
}
);

// user virtual to push new entries as 'friendCount' into array of 'friends' field of userschema
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// create the User model using the UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;