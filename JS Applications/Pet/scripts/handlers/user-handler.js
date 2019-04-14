window.handler = window.handler || {};

function loadPartials(ctx) {
    return ctx.loadPartials({
        header: './views/common/header.hbs',
        footer: './views/common/footer.hbs'
    });
}

handler.getLogin = function (ctx) {
    loadPartials(ctx).then(function () {
        this.partial('./views/user/login.hbs');
    });
};

handler.postLogin = function (ctx) {
    let {username, passowrd} = ctx.params;

    userService.login(username, passowrd).then(res=>{
        userService.saveSession(res);
        notifications.showSuccess('Logged in successful');
        ctx.redirect('#/home');
    }).catch(err=>notifications.showResponseError(err));
}

handler.getRegister = function (ctx) {
    loadPartials(ctx).then(function () {
        this.partial('./views/user/register.hbs');
    });
};

handler.postRegister = function (ctx) {

    let {username, passowrd} = ctx.params;

    userService.register(username, passowrd).then(res=>{
        userService.saveSession(res);
        notifications.showSuccess('Registered successful');
        ctx.redirect('#/home');
    }).catch(err=>notifications.showResponseError(err));   
};