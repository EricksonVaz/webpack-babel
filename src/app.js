(function(divApp){
    const body =  document.querySelector("body");

    async function getPosts(){
        let resp = await fetch("https://jsonplaceholder.typicode.com/posts");
        let respJson = await resp.json();
        return respJson;
    }

    function main(){
        divApp.innerHTML = "<h1>App Load successfully</h1>";
        getPosts().then(resp=>{
            console.log("API Responses ",resp);
        });
    }

    window.addEventListener("load",main);
})(document.querySelector("#app"));