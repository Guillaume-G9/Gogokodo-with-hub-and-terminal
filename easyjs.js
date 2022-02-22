
// fonction filter presque dynamique          
 
function easyFilter(selector, data, callback){

        const searchBar = document.querySelector(selector)
    
        searchBar.addEventListener('keyup', (e) => {
                        const searchString = e.target.value.toLowerCase(); 
                        const filteredTitle = data.filter((hub) => {
    
                            return (
                                   hub.attributes.title.toLowerCase().includes(searchString) ||
                                   hub.attributes.category.toLowerCase().includes(searchString)
                                );
                            });
                        callback(filteredTitle);
        })        
}

// fonction fetch dynamique

function easyFetch (url, callback){    
    fetch(url)
    .then(response => response.json())
    .then(response => callback(response.data))
    .catch(error => console.log("Erreur : " + error));
}


 // une fonction qui s'appelle easy save et esay load. text, objet(stringify et parse) ou tableau

function easySave(title, object){


}
    
    // async function easyFetch(url,callback, method = 'GET', headers = {}, body ) {
    
         
    //     //console.log(body)
    //     const response = await fetch(url,
            
    //         {
    //             "method": method,
    //             "headers": headers,
    //             "body": body == undefined ? null : body
    //         }
            
            
    //         );
    
        
    //     const data = await response.json();
        
    //     callback(data)
    //   }

    function easyClick (selector,callback) {
        document.querySelector(selector)
        .addEventListener('click', callback)
    }
    
    
    function easySave (key, value){
     
        if(typeof value == 'object'){
            localStorage.setItem(key,JSON.stringify(value))
        }
        else{
            localStorage.setItem(key,value)
        }
        
    }
    
    function easyLoad (key){
     
        if(localStorage.getItem(key).includes('{')){
             return JSON.parse(localStorage.getItem(key))
        }
        else{
            return localStorage.getItem(key)
        }
        
    }



   