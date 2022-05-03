const mongoose = require('mongoose')

const schoolSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
        type: String,
        // required: [true, 'Please add a name value'],
    },
    text: {
      type: String,
      // required: [true, 'Please add a text value'],
    },
    address: {
        type: String,
        // required: [true, 'Please add a address value'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('School', schoolSchema)