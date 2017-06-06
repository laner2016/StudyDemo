var shape = {
    name: 'rectangle',
    popup: function () {
        var _this = this;
        console.log(this.name);
        setTimeout(function () {
            console.log(_this.name);
        }, 2000);
    }
};
shape.popup();
//# sourceMappingURL=hello.js.map