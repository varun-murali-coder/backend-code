const mongoose=require('mongoose');
const Schema=mongoose.Schema
let blogSchema=new Schema(
    {
        title:{
  type:String,
  default:''
        },
        blogId:{
            type:String,
            unique:true
        },
        description:{
            type:String,
            default:''
        },
        bodyHtml:{
            type:String,
            default:''
        },
        views:{
            type:Number,
            default:0
        },
        isPublished:{
            type:Boolean,
            default:false
        },
        category:{
            type:String,
            default:''
        },
        tags:[],
        created:{
            type:Date,
            default:Date.now
        },
        lastModified:{
            type:Date,
            default:Date.now
        }


    });

    mongoose.model('Blog',blogSchema);