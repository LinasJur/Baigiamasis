import React from 'react';

function BookDetails({ book }) {
    return (
        <div>
            <h2>{book.title}</h2>
            <h3>By {book.author}</h3>
            <p>{book.description}</p>
        </div>
    );
}
export default BookDetails;