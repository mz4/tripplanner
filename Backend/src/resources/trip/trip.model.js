import mongoose from 'mongoose'

const tripSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: 'Please enter your name',
      trim: true
    },
    dateStart: {
      type: String,
      required: 'Please enter your date start',
      trim: true
    },
    dateEnd: {
      type: String,
      required: 'Please enter your date end',
      trim: true
    },
    isConfirmed: {
      type: Boolean,
      required: 'Please enter isConfirmed',
      trim: true
    },
    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'user',
      required: true
    }
  },
  { timestamps: true }
)

tripSchema.index({ user: 1, name: 1 }, { unique: true })

export const Trip = mongoose.model('trip', tripSchema)
