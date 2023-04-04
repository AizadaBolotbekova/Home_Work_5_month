import { useEffect } from "react";

const NewsPage = () => {

    const { id } = useParams()

    useEffect(() => {
        // fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        //     .then(response => response.json())
        //     .then(json => console.log(json))
    }, [ id ])

    return ( 
        <div>News page

        </div>
     );
}
 
export default NewsPage;