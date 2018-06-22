const setMeta = (name, info) => {
    let link = document.createElement('meta');
    link.name= name;
    link.content = info;
    document.getElementsByTagName('head')[0].appendChild(link);
}

export default ({title, desc, image}) => {
    document.title = title;
    setMeta("og:url", window.location.href);
    setMeta("og:image", image);
    setMeta("og:description", desc);
}