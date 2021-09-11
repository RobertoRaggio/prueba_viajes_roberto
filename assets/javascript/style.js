$("a").click(function(event){
    if (this.hash !== "") {
        event.preventDefault();
        var gato =this.hash;
    }
});
