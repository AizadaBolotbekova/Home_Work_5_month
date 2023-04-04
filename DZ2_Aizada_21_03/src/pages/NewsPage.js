import React from 'react';
import {useParams} from "react-router-dom";

function NewsPage() {
    const params = useParams()
    console.log(params)
    return (
        <div>NewsPage</div>
    );
}

export default NewsPage;