$(()=>{
    const app = Sammy('#root', function(){
        this.use('Handlebars', 'hbs');

        this.get('#/home', handler.getHome);

        this.get('#/login', handler.getLogin);
        this.post('#/login', handler.postLogin);

        this.get('#/logout', handler.logout);

        this.get('#/register', handler.getRegister);
        this.post('#/register', handler.postRegister);
    });

    app.run("#/home");
});