const button = document.getElementById('refreshButton')

const links = [
    {
       url: "https://wttr.in/Amsterdam",
       params:{
        2: "",
        m: "",
        lang: "de"
       } 
    },
    {
        url: "https://wttr.in/Paris",
        params:{
         2: "",
         m: "",
         lang: "fr"
        } 
     },
     {
        url: "https://wttr.in/London",
        params:{
         2: "",
         m: "",
         lang: "en"
        } 
     },
     {
        url: "https://wttr.in/Roma",
        params:{
         2: "",
         m: "",
         lang: "it"
        } 
     }
]
function fetchData(){
    for(const link of links){ // перебор ссылок
        const {url,params}= link //деструктуризация ссылки (извлекается url и params из объекта link)
        const queryString = new URLSearchParams(params).toString();
        fetch(`${url}?${queryString}`)
        .then((response)=>response.text())
        .then((pageText)=>{
            const result = document.getElementById('content')
            result.innerHTML = pageText;
        })
    }
}
button.addEventListener('click', fetchData)

