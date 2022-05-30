import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import TableRow from "../components/TableRow";
import { useUser } from "../AuthContext";

const MyBookmarks = () => {
    const { user } = useUser();
    const [bookmarks, setBookmarks] = useState();

    const getBookmarks = async (id) => {
        const { data } = await axios.get(`/api/bookmarks/getbookmarks?id=${id}`);
        setBookmarks(data);
    }

    const onDeleteClick = async (id) => {
        await axios.post(`/api/bookmarks/deletebookmark?id=${id}`);
        getBookmarks();
    }

    const onUpdateClick = async (id, title) => {
        await axios.post("/api/bookmarks/updatebookmark", { id, title });
        getBookmarks();
    }

    useEffect(() => {
        getBookmarks(user.id);
    }, []);

    return (
        <div style={{ marginTop: 20 }}>
            <div className="row">
                <div className="col-md-12">
                    <h1>Welcome back  {`${user.firstName} ${user.lastName}`}</h1>
                    <Link className="btn btn-primary btn-block" to="/addbookmark">Add Bookmark</Link>
                </div>
            </div>

            <div className="row" style={{ marginTop: 20 }}>
                <table className="table table-hover table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Url</th>
                            <th>Edit/Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookmarks && bookmarks.map(b => <TableRow
                            bookmark={b}
                            key={b.id}
                            onDeleteClick={() => onDeleteClick(b.id)}
                            onUpdateClick={() => onUpdateClick(b.id, b.title)}
                        />)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyBookmarks;