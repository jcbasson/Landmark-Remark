const LoadScript = (scriptUrl, scriptLoadedCallback) => {
    return new Promise((resolve, reject) => {
        debugger;
        let script = document.createElement('script');
        script.src = scriptUrl;
        script.addEventListener('load', () => {
            debugger;
            scriptLoadedCallback();
            resolve();
        }, false);

        script.addEventListener('error', () => {
            debugger;
            reject(scriptUrl);
        }, false);

        document.body.appendChild(script);
    });
};
export default LoadScript;