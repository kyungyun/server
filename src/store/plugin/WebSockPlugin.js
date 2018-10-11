//import { ADD_BLOCK } from "../../classes/protocol";


// class RequestHandler {
//     constructor(){

//     }



// }

// class ResponseHandler {
//     constructor() {

//     }
// }


class WebSockPlugin {

    constructor(url,store) {
        this._websocket = new WebSocket(url);

        this._websocket.onopen = this.onopen();
        this._websocket.onmessage = this.onmessage();

        this._store = store;
    }

    onopen(){
        return ()=> {
            //
        };
    }

    onmessage() {
        return (event) => {
            let data = JSON.parse(event.data);

            switch(data.type) {
                case "GET_ALL_BLOCK":
                    this._store.commit("setBlockchain",data.obj);
                    break;
                case "ADD_BLOCK":
                    this._store.commit("addBlock",data.obj);
                    break;
            }

            
        };
    }


    subscribeAction() {
        return (action, state) => {
            console.log(action.type);
            //console.log(action.payload);
            switch(action.type){
                case "RequestBlockchainSync":
                    this._websocket.send(JSON.stringify({type:"GET_ALL_BLOCK"}));
                    break;
                case "RequestAddBlock":
                    this._websocket.send(JSON.stringify({
                        type:"ADD_BLOCK", 
                        obj: {
                            data:action.payload
                        }
                    }));
                    break;
            }
        };
    }
  
}



export default function createWebSocketPlugin (url) {
return store => {
        const websocket = new WebSockPlugin(url,store);

        store.subscribeAction(websocket.subscribeAction());
    };
}