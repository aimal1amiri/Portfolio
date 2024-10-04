export default{
    name:"abouts",
    title:"Abouts",
    type:"document",
    fields:[
        {
            name:"title",
            title:"Title",
            type:"string"
        },
        {
            name:"discription",
            title:"Discription",
            type:"string"
        },
        {
            name:"imgUrl",
            title:"ImageUrl",
            type:"image",
            options:{
                hotspot:true,
            },
        },
        
    ]
}