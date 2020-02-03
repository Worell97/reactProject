import React, { Component } from 'react';

export default function Sessao3(){
    return(
        <Feed/>
    );    
}

const categories = ['World', 'Business', 'Tech', 'Sport']; 
class Feed extends Component{ 
    constructor(props){
        super(props);
        this.state = {
            posts: JSON.parse(localStorage.getItem('posts')) || [],
            filteredPosts: []
        }
        this.handleNewPost = this.handleNewPost.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }
    handleNewPost(post){
        var posts = this.state.posts.concat([post]);
        this.setState({posts: posts});
        localStorage.setItem('posts', JSON.stringify(posts));
    }
    handleFilter(filter){
        this.setState({
            filteredPosts: this.state.posts.filter((post) =>
                post.category.toUpperCase() === filter.toUpperCase() ||
                post.content.includes(filter)
            )
        });
    }

    render(){
        const postList = this.state.posts.map((post, index) =>
            <Post key={index} value={post} content={post.content}/>
        );
        const filteredPosts = this.state.filteredPosts.map((post, index) =>
            <Post key={index} value={post} content={post.content}/>
        );

        return (
            <div className="feed">
                <Filter onFilter={this.handleFilter}/>
                <PostForm onSubmit={this.handleNewPost}/>
                {filteredPosts.length > 0 ? filteredPosts : postList}
            </div>
        );
    }
}

class Filter extends Component{
    constructor(props){
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
        if(event.target.value ===''){
            this.props.onFilter('');
        }
    }

    handleKeyUp(event){
        if(event.key === 'Enter'){
            this.props.onFilter(this.state.value);
        }
    }
    render(){
        return(
            <div>
                <label>
                    <input type='search' value={this.state.value}
                                         onChange={this.handleChange}
                                         onKeyUp={this.handleKeyUp}
                                         placeHolder='Filter by category or content...'
                    />
                </label>
            </div>
        )
    }
}

class PostForm extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        this.props.onSubmit({
            category: this.category.value,
            content: this.content.value
        });
        this.category.value = categories[0];
        this.content.value = '';
        event.preventDefault();
    };
    render(){
        return(
            <div className='psot-form'>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Category:
                        <select ref={(input) => this.category = input}>
                            {categories.map((category, index) => 
                                <option key={category} value={category}>{category}</option>
                            )}
                        </select>
                    </label>
                    <label>
                        Content:
                        <input type='text' ref={(input) => this.content = input}/>
                    </label>
                    <button className='button'>Submit</button>
                </form>
            </div>
        );
    }

}
function Post(props){
    return(
        <div className="post">
            <span className='label'>{props.value.category}</span>
            <span className='content'>{props.value.content}</span>
        </div>
    );
}