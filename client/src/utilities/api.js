/* global window */

const getToken = () => {
    return window.localStorage.getItem('brookeclonts-token');
}

export function PatchBlogPost(id, data) {
    return new Promise(resolve => {
        fetch(
            `/api/blogposts/${id}`,
            {
                method: 'PATCH',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': getToken()
                },
                body: JSON.stringify(data),
            },
        ).then(res => {
            resolve(res.json());
        });
    });
}

export const PatchBlogImg = async (originalImgUrl, newImg) => {
    let data = new FormData();
    data.append('file', newImg);
    data.append('originalPath', originalImgUrl);

    return new Promise(resolve => {
        fetch(
            `/api/external/book/upload`,
            {
                method: 'PUT',
                credentials: 'same-origin',
                headers: {
                    "Accept": "application/json",
                    'x-access-token': getToken()
                },
                body: data,
            },
        ).then(res => {
            resolve(res.json());
        });
    });
};

export function PostBlogPost(data) {
    return new Promise(resolve => {
        fetch(
            `/api/blogposts`,
            {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': getToken()
                },
                body: JSON.stringify(data),
            },
        ).then(res => {
            resolve(res.json());
        });
    });
}

export const PostBlogImg = async (newImg) => {
    let data = new FormData();
    data.append('file', newImg);

    return new Promise(resolve => {
        fetch(
            `/api/external/book/upload`,
            {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    "Accept": "application/json",
                    'x-access-token': getToken()
                },
                body: data,
            },
        ).then(res => {
            resolve(res.json());
        });
    });
};