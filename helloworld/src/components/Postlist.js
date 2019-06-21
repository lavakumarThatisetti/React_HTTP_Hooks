import React, { Component } from 'react'
import axios from 'axios'

class Postlist extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             errorMsg:''
        }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response=>{
            console.log(response);
            this.setState({
                posts:response.data
            })
            console.log(this.state.posts)
        })
        .catch(error=>{
            console.log(error)
            this.setState({
                errorMsg:"error in retriving data"
            })
        })

    }
    render() {
        const {posts,errorMsg}=this.state
        return (
            <div>
                
                {/* {
                    posts.length?
                    posts.map(post=> <div key={post.id}>{post.title}</div>):
                    null
                } */}

                <table border="1">
                    <tr>
                    <th>id</th><th>title</th>
                    </tr>
                        {
                            posts.length?
                            posts.map(post=><tr><td>{post.id}</td><td>{post.title}</td></tr>):null
                        }
                </table>
                {
                    errorMsg?<div>{errorMsg}</div>:null
                }
            </div>
        )
    }
}

export default Postlist
