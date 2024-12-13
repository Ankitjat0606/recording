let last = Date.now();
let screenStream;
let cameraStream;
let streamArray = [];
let intervalId = null;
self.onmessage = async function ({ data }) {
    const { start } = data;
    if (start) {
        if (!intervalId) {
            intervalId = setInterval(() => {
                console.log("Process");
                self.postMessage({});
            }, 50);
        }
    } else {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }
};
