require([
    "dojo/on",
    "dojo/dom",
    "dojo/request",
    "dojo/domReady!"
], function(on, dom, request){

    on(dom.byId("aboutNav"), "click", function(){
        openContent();
        request("./about_v2.html").then(function(content){
            dom.byId("aboutContent").innerHTML = content;
        });
    });
    
    on(dom.byId("acknowledgementsNav"), "click", function(){
        openContent();
        request("./Acknowledgements_v2.html").then(function(content){
            dom.byId("aboutContent").innerHTML = content;
        });
    });
    
    on(dom.byId("resourcesNav"), "click", function(){
        openContent();
        request("./resources_v2.html").then(function(content){
            dom.byId("aboutContent").innerHTML = content;
        });
    });
    
    on(dom.byId("contactNav"), "click", function(){
        openContent();
        request("./contact_v2.html").then(function(content){
            dom.byId("aboutContent").innerHTML = content;
        });
    });
    
    on(dom.byId("mapNav"), "click", function(){
        closeContent();
    });
    
    function openContent(){
        if(dom.byId("aboutContent").style.visibility != "visible"){
            dom.byId("aboutContent").style.visibility = "visible";
            dom.byId("aboutContent").style.width = "64%";
            dom.byId("aboutContent").style.height = "85%";
        }
    }
    
    function closeContent(){
        if(dom.byId("aboutContent").style.visibility == "visible"){
            dom.byId("aboutContent").style.width = "0";
            dom.byId("aboutContent").style.height = "0";
            
            setTimeout(function(){
                dom.byId("aboutContent").style.visibility = "hidden";
            }, 1000);
        }
    }
    
});