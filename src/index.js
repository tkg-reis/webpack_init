import "regenerator-runtime";
import "../src/index.scss";


const init = async () => {
    console.log("hello");
    await asyFn();
    // g = 0;
};

async function asyFn() {
    console.log("hello async");
}

init();