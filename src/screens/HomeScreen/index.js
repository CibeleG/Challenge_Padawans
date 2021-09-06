import React from 'react';
import './index.css';
import Card from '../../components/Cards/index';
import albums from '../../assets/albums.png'
import posts from '../../assets/posts.png'
import todos from '../../assets/todos.jpg'

function HomeScreen() {
    return ( 
        <div className="w-100">
            <Card title="postagens" image={posts}/>
            <Card title="albuns" image={albums}/>
            <Card title="to-dos" image={todos}/>
        </div>
    );
}
export default HomeScreen;