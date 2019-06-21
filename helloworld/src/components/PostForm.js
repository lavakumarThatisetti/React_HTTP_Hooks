import React, { Component } from 'react'
import axios from 'axios';
class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userId:'',
             title:'',
             body:''
        }
    }
    handlerSetValues=(event)=>{
        this.setState({ [event.target.name]:event.target.value })
        //formic to form validation
    }
    handlerOnsubmit=(event)=>{
        console.log(this.state)
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
        .then(response=>{
            console.log(response.data)
        })
        .catch(error=>{
            console.log("error")
        })
        event.preventDefault()
    }
    
    render() {
        const {userId,title,body}=this.state
        return (
            <div>
                <form onSubmit={this.handlerOnsubmit}>
                    <input type="text" name="userId" value={userId} onChange={this.handlerSetValues} />
                    <br/>
                    <input type="text" name="title" value={title}  onChange={this.handlerSetValues} />
                    <br/>
                    <input type="text" name="body" value={body}  onChange={this.handlerSetValues}/>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm
