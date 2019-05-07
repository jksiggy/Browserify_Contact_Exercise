const contactDOM = info => {
    const root = document.getElementById("container");
    const contactDIV = document.createElement("div");
    root.appendChild(contactDIV);
    const contactName = document.createElement("h3");
    const contactAddress = document.createElement("p");
    const contactPhone = document.createElement("p");
    contactDIV.appendChild(contactName);
    contactDIV.appendChild(contactAddress);
    contactDIV.appendChild(contactPhone);
    const name = document.createTextNode(`${info.first_name} ${info.last_name}`);
    const address = document.createTextNode(`${info.email}`);
    const phone = document.createTextNode(`${info.address}`);
    contactName.appendChild(name);
    contactAddress.appendChild(address);
    contactPhone.appendChild(phone);
  };

  export default contactDOM