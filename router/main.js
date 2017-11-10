module.exports = function (app, fs)
{



        app.get('/', function (req,res) {
            res.render('index', {
                title : "Coding Study 코딩스터디",
                length : 5
          })



        });

}