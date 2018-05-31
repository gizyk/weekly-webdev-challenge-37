module.exports = function(){
    function initialize() {
        console.log("component1")
        $(".light").html($(".light").html() + "Added with javascript");
    }

    var publicApi = {
        init: initialize,
    }

    return publicApi;

}