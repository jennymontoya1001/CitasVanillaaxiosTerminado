export const delette = async(url,id) => {

     await axios.delete(url+id)
}