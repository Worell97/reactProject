import React, { useState } from 'react';

export default function Sessao3(){
    return(
        <Feed/>
    );    
}

function Feed(){  
    const [Posts, setPosts] = [
        {content: 'This is my first post!'},
        {content: 'This is my second post!'},
        {content: 'This is my third post!'},
        {content: 'This is my fourth post!'},
        {content: 'This is my fifth post!'},
        {content: 'This is my sixth post!'},
        {content: 'This is my seventh post!'},
    ];
      
    const postList = Posts.map((post, index) =>
        <Post key={index} value={post} content={post.content}/>
    );

    function handleNewPost(post){
        setPosts({
          Posts: Posts.concat([post])
        });
    }

    return (
        <div className="feed">
            {postList}
            <PostForm onSubmit={handleNewPost}/>
        </div>
    );
}

function PostForm(){
    function handleSubmit(event){
        this.content.value = '';
        event.preventDefault();
    };
    return(
        <div className='psot-form'>
            <form onSubmit={handleSubmit}>
                <label>
                    Content:
                    <input type='text' ref={(input) => this.content = input}/>
                </label>
                <button className='button'>Submit</button>
            </form>
        </div>
    );

}
function Post(props){
    return(
        <div className="post">
            <span>{props.content}</span>
        </div>
    );
}