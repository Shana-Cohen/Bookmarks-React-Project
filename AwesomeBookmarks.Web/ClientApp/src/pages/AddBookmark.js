import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Signup = () => {
    const history = useHistory();
    const [formData, setFormData] = useState({
        title: '',
        url: '',
    });
    const onTextChange = e => {
        const copy = { ...formData };
        copy[e.target.name] = e.target.value;
        setFormData(copy);
    }

    const onFormSubmit = async e => {
        e.preventDefault();
        await axios.post('/api/bookmarks/addbookmark', formData);
        history.push('/mybookmarks');

    }
    return (
        <div className='row'>
            <div className='col-md-6 offset-md-3 card card-body bg-light'>
                <h3>Add Bookmark</h3>
                <form>
                    <input onChange={onTextChange} type='text' name='title' placeholder='Title'
                        className='form-control' value={formData.title} />
                    <br />
                    <input onChange={onTextChange} type='text' name='url' placeholder='URL'
                        className='form-control' value={formData.url} />
                    <br />
                    <button onClick={onFormSubmit} className="btn btn-primary">Add</button>
                </form>
            </div>
        </div>
    );
}
export default Signup;