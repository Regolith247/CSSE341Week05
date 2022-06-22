module.exports = (mongoose) => {
    const User = mongoose.model(
      'users',
      mongoose.Schema(
        {
          temple_id: Number,
          name: String,
          location: String,
          dedicated: String,
          additionalInfo: Boolean,
        },
        { timestamps: true }
      )
    );
  
    return User;
  };
  