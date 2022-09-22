import React from 'react';
import { Link } from 'react-router-dom';

const AddRoom = () => {
    return (
        <div>
            <h2>This is Add Room</h2>
            <Link to='/admin'>Go Back</Link>
        </div>
    );
};

export default AddRoom;