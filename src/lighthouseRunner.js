

const lighthouse=require('lighthouse');
const chromeLauncher= require('chrome-launcher');

async function runLighthouse(url){
    const chrome=await chromeLauncher.launch({ chromeFlags:['--headless']});
    const options={ loglevel:'info',output:'json', port:chrome.port};

    const runnerResult=await lighthouse(url,options);

    await chrome.kill();

    return runnerResult.lhr;
}

export default runLighthouse;