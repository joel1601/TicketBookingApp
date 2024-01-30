module.exports = mongoose => {
    var schema = mongoose.Schema({
      name :{
        type:String,
        required:true
      },
      image:{
        data:Buffer,
        contentType:String
      }
    //   { timestamps: true }
})
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Productcategory = mongoose.model("productcategory", schema);
    return Productcategory;
  };
  