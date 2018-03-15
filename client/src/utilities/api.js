
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
    // return async fetch(
    //     `/api/external/book/upload`,
    //     {
    //         method: 'PATCH',
    //         credentials: 'same-origin',
    //         headers: {
    //             'Content-Type': 'multipart/form-data'
    //         },
    //         body: {
    //             file: newImg,
    //             originalPath: originalImgUrl
    //         },
    //     },
    // ).then(res => {
    //     return res.json();
    //     console.log(res)
    // });
};