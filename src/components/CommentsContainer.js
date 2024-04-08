import React from 'react'

const commentsData=[
    {
        name: "Priyash Sharma",
        text: "lorem ipsum lodol",
        replies :[
            {
                name: "Priyash Sharma",
                text: "lorem ipsum lodol",
                replies:[
                    {
                        name: "Priyash Sharma",
                        text: "lorem ipsum lodol",
                        replies :[
                            {
                                name: "Priyash Sharma",
                                text: "lorem ipsum lodol",
                                replies :[],
                            },
                            {
                                name: "Priyash Sharma",
                                text: "lorem ipsum lodol",
                                replies :[],
                            },
                        ],
                    },
                ],
            }
        ]
    },
    {
        name: "Priyash Sharma",
        text: "lorem ipsum lodol",
        replies :[
            {
                name: "Priyash Sharma",
                text: "lorem ipsum lodol",
                replies :[
                    {
                        name: "Priyash Sharma",
                        text: "lorem ipsum lodol",
                        replies :[],
                    },
                ],
            },
            {
                name: "Priyash Sharma",
                text: "lorem ipsum lodol",
                replies :[],
            },
        ],
    },
    {
        name: "Priyash Sharma",
        text: "lorem ipsum lodol",
        replies :[],
    },
    {
        name: "Priyash Sharma",
        text: "lorem ipsum lodol",
        replies :[],
    }
]

const Comment=({data})=>{
    const{name,text,replies}=data;
    return(
        <div  className="flex bg-gray-100 p-1 m-1">
            <img className='w-16 h-16 p-2 ' alt='user' src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"/>
            <div className='p-2'>
                <p>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

const CommentsList=({comments})=>{
    return  comments.map((comment,index)=>(
        <div key={index}>
            <Comment key={index} data={comment}/>
            <div className='pl-5 border ml-4 border-l-black'>
                <CommentsList comments={comment.replies}/>
            </div>
        </div>
    ))
}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments :</h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer
