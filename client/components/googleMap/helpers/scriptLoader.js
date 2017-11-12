const LoadScript = (scriptUrl, scriptLoadedCallback) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = scriptUrl;
        script.addEventListener('load', () => {
            scriptLoadedCallback();
            resolve();
        }, false);

        script.addEventListener('error', () => {
            reject(scriptUrl);
        }, false);

        document.body.appendChild(script);
    });
};
export default LoadScript;