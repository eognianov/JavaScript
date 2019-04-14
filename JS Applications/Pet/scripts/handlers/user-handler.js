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
    let username = ctx.params.username;
    let password = ctx.params.password;
    userService.login(username, password).then((res) => {
      userService.saveSession(res);
      notifications.showInfo('Login successful.');
      ctx.redirect('#/dashboard');
    }).catch(function (err) {
      notifications.showError('Invalid username or password');
      ctx.redirect('#/login');
    });
  }

handler.logout = function (ctx) {
    userService.logout().then(()=>{
        notifications.showSuccess('Logged out');
        ctx.redirect('#/home');
    });
};

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