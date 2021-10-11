var site = 'https://calculator-online.net/';
var Calculator = 'water-intake-calculator/'
var widget = site + Calculator + 'preview/';
var widgetHtml = '<iframe id="ifr" src="' + widget + '" style="border:0;width:100%;height:350px;"></iframe>';
/*'<p style="width:100%;text-align:center;font-size:18px;display:inline-block !important;"><a target="_blank" style="color:#13699E;text-decoration:none;display:inline-block !important;" href="https://calculator-online.net/water-intake-calculator/" title="Water Calculator">Water Calculator by calculator-online.net</a></p>';
*/var isNew = document.getElementById("water_widget_code");
document.getElementById("water_widget_code").innerHTML = widgetHtml;