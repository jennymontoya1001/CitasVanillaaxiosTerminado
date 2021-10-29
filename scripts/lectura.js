export const get = async(url) => {

    let lista = await axios.get(url);
    let {data} = lista;
    return data;

}