;(function(){
	var d, Customizlet;

	Customizlet = {};

	if(!d.querySelectorAll || !d.createElement('canvas').getContext) {
		return;
	}
  
	Customizlet.fetch = function() {};
  
  function $(sel){ return [].slice.call(document.querySelectorAll(sel)); }

  function $tagname(tagname) {
    var nodes = document.getElementsByTagName(tagname),
      retValue = [];

	for (var i = nodes.length - 1; i >= 0; i = i - 1) {
      retValue[i] = nodes[i];
    }

    return retValue;

    // This is yields undefined behavior according to the ECMA spec
	// since this is returns a NodeList which is a host object.
	// This causes a break in IE.
    //return [].slice.call(document.getElementsByTagName(tagname));
  }

  Customizlet.reset = " margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align: baseline;color:inherit;line-height:inherit;";


    var body = $tagname('body')[0], node = document.createElement('div');
    node.id = 'Customizlet_results';
    body.appendChild(node);

    Customizlet.statsHTML +=
      '<a href="http://twitter.com/dom_monster" target="_new" style="'+Customizlet.reset+';display:block;margin-top:20px;margin-right:10px;line-height:1.3;padding:6px 6px 6px 48px;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAF7ElEQVR42q2WaUxUVxTHX2tSK5uyaQS0WIEZARGZDWZAoIhSQQRZBkYZ0FFBXLCmiGyxllhFwKgoAkWpWgVbUQHRurbVtvGDqYnUrRXbNF1iNdbUxqQm9PR%2Fn2%2FizZPCiHz4Zd65b949%2F3uWe69wNCf0RVCDfLADXAA94D54AO6BG%2BAgyAaOtsxpq2M9OAN6AdnIt8BnKASkgieABkE3cHwZAW7gD0CMYwvCxF%2BZLUf%2BvuJlBFgAMdqyddQ4W0H18b7UkODHgM1%2Bn6c%2BwZfq3vah5rkBTMRtfD9isAKaACaBALOWtk33psoID6qK9KIaUD3NkzbDZlRHegIvPHtSTZQX1c6YQPvSgqxR0A9WwAFAVhFHEIVd8UrKVThQrp89VRg86aAxmA6kTaEilTst9rWj5QEjqSVTxRzzKZo3WAGNspxCRCitM3hRIRw2p06hzkXhdHyRgWpnKejdEHfaMsOHOhbq5fWQ88ICsGJGAZsMPBMBmN2%2BMIxhHRefuf%2FKyR5QAHIMdOIzQi0chv3JfI12W9xEqotXyCdEJLR0OEtNR8xaydaJNsb7EhDXn4BXENrqr96ZeeVsfvRO2A7MeXNKoNA4Z5JbsdrlQbnOnTAm5VRHbVkaOrn0Lbq83kxXK%2FOoe%2FNS6q5cCjubjudGsYLlnf8LlMC6OJdjOWFb8LwCjGArX31%2BeQzd2ZBJt9anIZ%2FhteyPh%2BaphAMZU199Tz%2FmVkOikjotBuZcnPRSuYnu7Cqiq5ty6fzq2XRqWSydWxVP31Xl0%2B0dhRAXw0fiF2AnRhmRPZMfvbW7fC51LQ4n2OVssOlUXiTdhPNr61JQVIaeIzmhr2FcTEVNrHdnmdaN9qcH01FMerEoRXTyZWESQq6hNoZZTIfosBsR%2BboknY1bBXQBAYhpvVQ460oPFntiSQQh5c3sRRAq%2B6%2BuxRFiNcPp4%2FYFYeM%2BNgYLVTHjhYrwsc0b0deoh6cFiKrvsIRbHfCwb%2FvaITdy4R9xcsm0388ti8Z%2FxXdbrMUQi5d3uQnUrUhBY5K%2FUBHhsbcyepxU8ZIT0GnRU6dY9egGySEiwcIqF2bkis4J39%2FjamQeX5EK8ANftXAqfDjH%2F%2BJ2bKt8G36apaWdcwLpkBm2JYK6ciPp85WxdLkoQQytdSHgEfDgfEzmhJ0GdvK2iAMEyiXbASJ%2Ba%2Bd6m%2FV5EzagdD9Hmj9pJM33H0Um5UhaMnU07c7Q0NWyJDr2zMk3svlL5a3ZV29eBzfBMBABiMFvyeex2hWasZShcIJjd%2FpgpoIylU6UMtGeWs1hdJJF4en%2FC7h5DeAxIFDX305oBAR%2BAr%2FKi4y143V0S4HOg1LhcFOckq6UJFEWImFEVMoiJ9AJtJj0TQB3p3gojX0Ghg%2B0FaeAHwHxsAI7mx9Fl4sTKTvAmdJ87OmoZRp9sSqOMuDcCDbE%2BlIXukn65pIUUQK9YBN43dbDyBlck4voQASq4v3JhPBngtYcPW1NDKR0XwexFlCY1q74G7SBWpAH%2FAZzGu7jnbPW2z7bn5LftGPOrasWc29GRPZkqOl0XqS1C9YMxaW0iRfAVrY%2FI4Tqk4Nob6aG9hhVVJc8hepTguk4WvHCyul8C8YOhYAWQHIRiISYZ1S7RDhrT34T6gWThkJADaBBcA4ItiBg0%2BgPF9COjYidE1jl87diIHd%2BH6hsFoCc9QuOYNwNJus3RHk%2F%2FCgt%2BAZCzTrjAXbIR9hs%2Fjls1vUiLU%2BkbbcN%2BAPBVthp1y%2FvG8YKJWpXc0GQE5WFjjaxIxXRcGs1qezL9R4NazSjf95vDPbDBjWGXW6A8CIIa9UuA7G6ROPaW6p1pbUq54TK6PFCfaJSwC3JEXYPuFuqcXt9d3KAgFSJICJ90bcATN4fZkASj8F4JqooxFkoVru2SeP3cG0btVblIlRP9xbYPaIlM0Q4KKPFpBJP1w6LnmdAAWs4AQ3ceCA3fh0MA0KRShQmlGrd%2BqQq5g2hLkEh7Iz3szKggOFSFEzsmRv3AN%2BDP0Gq%2FLvi%2FwHpEqPH8x%2FFZLYKQrropQAAAABCustomizletU5ErkJggg==) no-repeat 5px 5px #ddf8ff;border:2px solid #00ceff;border-radius:4px;color:#42c2e0;text-decoration:none">For daily tips, follow @dom_monster on Twitter!</a>';

    node.style.cssText =
      Customizlet.reset+'text-align:left;z-index:1000000;letter-spacing:0;position:fixed;bottom:0;'+
      'color:#444;font:12px/13px \'Helvetica Neue\', Verdana, Arial, sans serif;'+
      'width:80%;left:10%';
    node.innerHTML =
      '<div id="Customizlet_results_tips" style="'+Customizlet.reset+'max-height:400px;margin:10px;padding:5px;overflow:auto;background:#fff;border:2px solid #b42328;-moz-border-radius:9px;-webkit-border-radius:9px;-webkit-box-shadow: 0px 2px 40px rgba(0,0,0,0.5);-webkit-transition:-webkit-transform ease-out 0.3s;-webkit-transform:translateY(450px)">' +
        '<div style="'+Customizlet.reset+'height:23px;font-size:16px;font-weight:normal;margin-top:0px;margin-bottom:5px;color:#444">'+
          '<div style="'+Customizlet.reset+'float:left;padding:5px 0px 3px 5px" id="Customizlet_results_prognosis_container">'+
            '<span id="Customizlet_results_prognosis" style="'+Customizlet.reset+'"></span> '+
            '<span style="'+Customizlet.reset+'font-size:12px;font-weight:normal" id="Customizlet_results_warnings_container"><span id="Customizlet_results_warnings" style="'+Customizlet.reset+'"></span></span>'+
          '</div>'+
          '<div style="'+Customizlet.reset+'cursor:pointer;float:right;padding:5px 10px 3px 10px;height:15px;background:#b42328;-webkit-border-radius:5px;color:#fff;text-shadow:0px 1px 3px rgba(0,0,0,0.5)" onclick="location.href=\'http://mir.aculo.us/dom-monster/\'">'+
            'dom monster <span style="'+Customizlet.reset+'font-size:10px">v'+Customizlet.Version+'</span>'+
          '</div>'+
          '<div style="'+Customizlet.reset+'float:right;padding:7px 10px 0px 10px;">'+
          '<span style="'+Customizlet.reset+'color:#888;font-size:10px;text-decoration:underline;cursor:pointer" onclick="document.getElementById(\'Customizlet_results_tips\').saveResults()">'+
            'save to Jdrop'+
          '</span>'+
          '<span style="'+Customizlet.reset+'padding-left:10px;color:#888;font-size:10px;text-decoration:underline;cursor:pointer" onclick="var r=document.getElementById(\'Customizlet_results_tips\');r.parentNode.removeChild(r);">'+
            'close'+
          '</span>'+
          '</div>'+
        '</div>'+
        '<div style="'+Customizlet.reset+'float:left;width:220px;padding:4px;margin-top:2px" id="Customizlet_stats">'+
        '</div>'+
      '</div>';

 })();
