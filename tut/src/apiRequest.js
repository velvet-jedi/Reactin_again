// this function to be used for creating updating and deleteing list item

const apiRequest = async (url = '', optionsObj = null, errMsg = null) => {
    try {
        const response = await fetch(url, optionsObj);
        if (!response.ok) throw Error('Please reload the app')
    } catch (error) {
        errMsg = error.message;
    } finally {
        return errMsg; // be it Null
    }
}
export default apiRequest