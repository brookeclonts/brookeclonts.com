/* global window */
// import { server } from './../../server/config/config.js';
// console.log('server', server)

const getToken = () => {
    return window.localStorage.getItem('brookeclonts-token');
}

//MAILCHIMP
export function postMailChimp(body) {
    return fetch(`/api/external/mailchimp`, {
        method: 'POST',
        headers : new Headers({
            'Content-Type': 'application/json'
          }),
        body: JSON.stringify(body)
    })
    .then((res) => res.json())
}

// LOGIN
export function RequestLogin() {
    fetch(`/api/users`, {
        method: 'POST',
        headers : new Headers({
            'Content-Type': 'application/json'
          }),
        body: JSON.stringify(body)
    })
    .then((res) => res.json())
}

// HOME init
export function getRecentBlogPost() {
    return fetch(`/api/blogposts/one`)
        .then(res => res.json())
}

export function getInstagramFeed() {
    return fetch(`/api/external/instagram`)
      .then(res => res.json())
}

export function getBooks() {
    return fetch(`/api/books`)
      .then(res => res.json())
}

// GET PROJECTS
export function getProjects() {
    return fetch(`/api/projects`)
    .then(res => res.json())
}

// BLOG POSTS
export function getAllBlogPosts(title) {
    return fetch(`/api/blogposts`)
    .then(res => res.json())
}

export function getPostFromTitle(title) {
    return fetch(`/api/blogposts/title/${title}`)
    .then(res => res.json());
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
            `/api/external/post/upload`,
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
            `/api/external/post/upload`,
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

// PROJECTS
export function PatchProject(id, data) {
    return new Promise(resolve => {
        fetch(
            `/api/projects/${id}`,
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

export const PatchProjectImg = async (originalImgUrl, newImg) => {
    let data = new FormData();
    data.append('file', newImg);
    data.append('originalPath', originalImgUrl);

    return new Promise(resolve => {
        fetch(
            `/api/external/project/upload`,
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

export function PostProject(data) {
    return new Promise(resolve => {
        fetch(
            `/api/projects`,
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

export const PostProjectImg = async (newImg) => {
    let data = new FormData();
    data.append('file', newImg);

    return new Promise(resolve => {
        fetch(
            `/api/external/project/upload`,
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

// BOOKS
export function PatchBook(id, data) {
    return new Promise(resolve => {
        fetch(
            `/api/books/${id}`,
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

export const PatchBookImg = async (originalImgUrl, newImg) => {
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

export function PostBook(data) {
    return new Promise(resolve => {
        fetch(
            `/api/books`,
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

export const PostBookImg = async (newImg) => {
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

export const GetEditOptions = async (url) => {
    return new Promise(resolve => {
        fetch(`${url}`, {
            method: 'GET',
            headers : new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => {
            resolve(res.json());
        });
    });
}

export const GetOptionInfo = async (id, formType) => {
    return new Promise(resolve => {
        fetch(`/api/${formType}/${id}`, {
            method: 'GET',
            headers : new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then((res) => resolve(res.json()))
    });
}