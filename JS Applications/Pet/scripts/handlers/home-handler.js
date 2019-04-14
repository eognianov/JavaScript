window.handler = window.handler || {};

handler.getHome = function (ctx) {
    ctx.loadPartials({
        header: './views/common/header.hbs',
        footer: './views/common/footer.hbs'
    }).then(function () {
        this.partial('./views/index.hbs');
    });
};