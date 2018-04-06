import React from 'react';

const PostItem = (props) => {
    return(
        <div>
            <h1>Post Detail!!!</h1>
            {props.match.params.id} - {props.match.params.username}
        </div>
    );  
};

export default PostItem;