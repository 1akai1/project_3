import axios from 'axios'
export default function getData(url){
    // const get = async (x) => {
    //     x = await axios.get(url).then(response => {return response.data})
    //     return x
    // }
    // console.log(get().then(console.log))
    // // console.log(get())
    // // console.log(get().then(response => {console.log(response)}))
    const x = get(url)
    console.log(x.PromiseResult)
}

async function get(url){
    return await axios.get(url).then(response => {return response.data})

}