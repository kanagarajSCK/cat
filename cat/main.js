function offswitch(){
    document.getElementById('bulbimage').src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById('catimage').src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";

    document.getElementById('switchstatus').textContent="Switch OFF";
    document.getElementById('switchstatus').style.color="#FF0000";
    document.getElementById('switchon').style.backgroundColor="#aba6a6";
    document.getElementById('switchoff').style.backgroundColor="#e12d39";
}

function onswitch(){
    document.getElementById('bulbimage').src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById('catimage').src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById('switchstatus').textContent="Switch ON";
    document.getElementById('switchstatus').style.color="#008000";
    document.getElementById('switchon').style.backgroundColor="#328213";
    document.getElementById('switchoff').style.backgroundColor="#aba6a6"
    

}