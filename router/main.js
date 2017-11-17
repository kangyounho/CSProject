module.exports = function (app, fs) {




    app.get('/', function (req, res) {
        res.render('index', {
            title: "Coding Study 코딩스터디"

        })
    });


    app.get('/review', function (req, res) {
        res.render('review', {
            title: "Coding Study 코딩스터디"
        })
    });


    app.get('/leader-wanted', function (req, res) {
        res.render('leader-wanted', {
            title: "Coding Study 코딩스터디"
        })
    });



    app.get('/ing-study', function (req, res) {
        res.render('ing-study', {
            title: "Coding Study 코딩스터디"
        })
    });

    app.get('/login', function (req, res) {
        res.render('loginForm', {
            title: "Coding Study 코딩스터디"
        })
    });


    app.get('/Sign-up', function (req, res) {
        res.render('Signup', {
            title: "Coding Study 코딩스터디"
        })
    });


    app.get('/Sign-up', function (req, res) {
        res.render('Signup', {
            title: "Coding Study 코딩스터디"
        })
    });


    app.get('/ContactUs', function (req, res) {
        res.render('ContactUs', {
            title: "Coding Study 코딩스터디"
        })
    });

    app.get('/Service-terms', function (req, res) {
        res.render('Service-terms', {
            title: "Coding Study 코딩스터디"
        })
    });

    app.get('/Private-terms', function (req, res) {
        res.render('private-terms', {
            title: "Coding Study 코딩스터디"
        })
    });

    app.get('/Email-talk', function (req, res) {
        res.render('Email-talk', {
            title: "Coding Study 코딩스터디"
        })
    });

    app.get('/ContactUs', function (req, res) {
        res.render('ContactUs', {
            title: "Coding Study 코딩스터디"
        })
    });


}




