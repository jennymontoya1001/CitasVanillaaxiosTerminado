
const post = async(url,objeto) => {

    await axios.post(url,objeto)
}

export default post;