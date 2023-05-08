module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      nama: String,
      jenis_kelamin: String,
      tanggal_lahir: Date,
      alamat: String,
    },
    {
      timestamps: true,
    }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;

    return object;
  });

  return mongoose.model("profile", schema);
};
