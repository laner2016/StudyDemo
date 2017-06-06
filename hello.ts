var shape = {
    name: 'rectangle',
    popup: function(){
        console.log(this.name);
        setTimeout(()=>{
            console.log(this.name);
        },2000)
    }
};
shape.popup();