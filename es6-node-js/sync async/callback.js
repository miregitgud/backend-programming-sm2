function formatname(name) {
    const result = name.toUpperCase();
    return result;
}

function getname(name, callformatname) {
    const result = callformatname(name);
    console.log(result);
}

getname("Ayyash", formatname);

const formatname1 = (name) => name.toUpperCase();
const getname1 = (name, callformatname1) => console.log(callformatname1(name));

getname1("Kayla", formatname1);

console.log("Ayyash is trying to open youtube..")
console.log("Downloading Monster Hunter..");
setTimeout(() => {
    console.log("Download complete!");
}, 5000);

console.log("Ayyash opened youtube.")