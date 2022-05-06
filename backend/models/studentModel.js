const mongoose = require('mongoose')

const studentSchema = mongoose.Schema(
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
    address: {
      type: String,
      // required: [true, 'Please add a address value'],
    },
    level: {
      type: String,
      // required: [true, 'Please add a text value'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Student', studentSchema)