module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        CategoryID:Number,
        ProductName:String,
        ProductRate:Number,
        Unit:String,
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Productlist = mongoose.model("productlist", schema);
    return Productlist;
  };
  