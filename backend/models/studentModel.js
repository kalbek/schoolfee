const mongoose = require('mongoose')

const studentSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    fname: {
        type: String,
        // required: [true, 'Please add a name value'],
    },
    lname: {
        type: String,
        // required: [true, 'Please add a name value'],
    },
    sex: {
      type: String,
      // required: [true, 'Please add a address value'],
    },
    grade: {
    type: String,
    // required: [true, 'Please add a text value'],
    },
    section: {
    type: String,
    // required: [true, 'Please add a text value'],
    },
    hasScholarship: {
    type: Boolean,
    // required: [true, 'Please add a text value'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Student', studentSchema)