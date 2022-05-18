module.exports = (mongoose) => {
    const Contact = mongoose.model(
      'contacts',
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
  
    return Contact;
  };
  