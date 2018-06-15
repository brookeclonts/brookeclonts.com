export default objectId => {
    return new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
}