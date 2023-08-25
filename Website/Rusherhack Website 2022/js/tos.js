function enableButton()
{if(document.getElementById("tosbox").checked==true)
{document.getElementById("buybutton").disabled=false;document.getElementById("buybutton").className="enabledbutton";}
if(document.getElementById("tosbox").checked==false)
{document.getElementById("buybutton").disabled=true;document.getElementById("buybutton").className="disabledbutton";}}
function buy(){window.open("https://rusher-development.myshopify.com/cart/35608114495639:1?channel=buy_button",'targetWindow',`toolbar=no,
                                    location=no,
                                    status=no,
                                    menubar=no,
                                    scrollbars=yes,
                                    resizable=yes,
                                    width=400,
                                    height=600`);}