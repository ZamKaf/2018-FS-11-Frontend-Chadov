import axios from "axios";

axios.interceptors.response.use((response) => {
    return response;
}, (error) => {
    console.log("error^");
    console.log(error.config);
    return Promise.resolve({
        data: {
            token: 'sdfsdfsef34234wefsdf234',
            chatNames: ['Oleg', 'Boris']
        },
        status: 200,
        statusText: 'Ok',
        header: {},
        config: error.config
    })
});

export default ((self) => {
	const ports = [];
	self.addEventListener('connect', (event) => {
		const port = event.source;
		ports.push(port);
		port.addEventListener('message', (event) => {
			if (event.data === 'disconnect') {
				ports.splice(ports.indexOf(event.target), 1);
			} else {
                console.log("info0");
                //localStorage.setItem('token', 'sdfsdfsef34234wefsdf234');
                console.log("info1");
                ports.forEach((port) => {
                    port.postMessage({
                        authData:{
                            token: 'sdfsdfsef34234wefsdf234',
                            chatNames: ['Oleg', 'Boris']
                        },
                        isOk:true
                    });
                });
                console.log("info2");
                /*axios.get(`http://127.0.0.1:5000/login?login=${event.data.login}&password=${event.data.password}`)
                    .then((res)=>{
                        console.log("object")
                        console.log(res)
                        //debugger
                        if(200>=res.status && res.status<300){
                            return res;
                        }
                        throw new Error(res.statusText);
                    })
                    .then((res) => res.data)
                    .then((res) =>{
                        console.log("info1");
                        ports.forEach((port) => {
                            port.postMessage({authData:res, isOk:true});
                        });
                    })
                    .catch(error => {
                        console.log('failed:');
                        console.log(error)
                        port.postMessage({isOk:false});
                    })*/
			}
		});
		port.start();
	});
});
