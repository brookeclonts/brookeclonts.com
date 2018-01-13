import request from 'axios';

const getBooks = {
    withID: (id) => {
        const baseUrl = '/api/books';
        return request.get(`${baseUrl}/${id}`);
    }, 

    all: () => {
        const baseUrl = 'http://localhost:8000/api/books';
        return request.get(`${baseUrl}`);
    }
};

export default getBooks;