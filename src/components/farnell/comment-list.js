import React from 'react';

class CommentList extends React.Component {
    
    base_url = 'https://www.example.com/comments?count='
    state = {
        commentItems: [{
            "id": 123,
            "username": "User 1",
            "message": "Cool product!"
            }, {
            "id": 456,
            "username": "User 2",
            "message": "Didn't like it that much"
            }]
            
    }
    componentDidMount() {
        // fetch(`${this.base_url}${this.props.count}`).then((data)=> {
        //     return data.json();
        // }).then((response) => {
        //       console.log(response); 
        //       /// update Comment Items state here
        // })
    }
    
    getCommentItems() {
        return this.state.commentItems.map(item => {
            return <div>
                <h3>{item.username}</h3>
                <h3>{item.message}</h3>
            </div>;
        })
    }
    
    render() {
        return <div>
            {this.getCommentItems()}
        </div>
    }
}

export default CommentList;