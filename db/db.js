mongoose.connect('mongodb://127.0.0.1/')

const itemschema={
    banner: {
        public_id: {
          type: String,
        },
        secure_url: {
          type: String,
        },
      },,
    heading:{
        type:String,
        
    },
    subheading:{
        type:string
    },
    paragraph:{
        type:string
    },
    image: {
        public_id: {
          type: String,
        },
        secure_url: {
          type: String,
        },
      },
}

let Item=mongoose.model("Item",itemschema)

export default Item