module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        firstname:String,
        lastname:String,
        email:String,
        password:String,
        conformpassword:String
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const SignUp = mongoose.model("signup", schema);
    return SignUp;
  };
  