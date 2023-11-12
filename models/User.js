//imports
const { Schema, model } = require("mongoose");

//user schema
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, "Must match and email address"],
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "thought",
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "user",
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

//increases friend count in user model object when friends are added by the user
userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
});

//creates user model with userSchema
const User = model("user", userSchema);

//exports
module.exports = User;