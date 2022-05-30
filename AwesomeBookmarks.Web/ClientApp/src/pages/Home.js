import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [bookmarks, setBookmarks] = useState();

useEffect(() => {
    const getBookmarks = async () => {
        const {data} = await axios.get('api/bookmarks/gettopbookmarks');
        setBookmarks(data);
    }
    getBookmarks();
}, [])

return ( <div className='container col-md-8'>
<h3 className='mt-3'>Most Used Bookmarks</h3>
<table className='table table-hover table-striped table-bordered'>
    <thead>
        <tr>
            <th>Url</th>
            <th>Count</th>
        </tr>
    </thead>
    <tbody>
        {bookmarks && bookmarks.map((b,i) => <tr key={i}>
            <td><a href={b.url} target="_blank">{b.url}</a></td>
            <td>{b.count}</td>
        </tr>
        )
        }
    </tbody>
</table>
</div>)
}

export default Home;