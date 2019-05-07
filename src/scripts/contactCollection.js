const api = "http://localhost:8088/People";


const contactInfo = {
    gatherInfo: () => {
        return fetch(api).then(contacts => contacts.json());
    },
    saveInfo: obj => {
        return fetch(api, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        }).then(res => res.json());
    }

};

export default contactInfo;

