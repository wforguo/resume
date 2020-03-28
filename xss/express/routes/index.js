var express = require('express');
var router = express.Router();

let comments = {};

// 转义操作
function html_encode(str) {
    var s = "";
    if(str.length == 0) return ""
    s = str.replace(/&/g,"&amp;");
    s = s.replace(/</g,"&lt;");
    s = s.replace(/>/g,"&gt;");
    s = s.replace(/\s/g,"&nbsp;");
    s = s.replace(/\'/g,"&#39;");
    s = s.replace(/\"/g,"&quot;");
    s = s.replace(/\n/g,"<br>");
    return s
};

/* GET home page. */
router.get('/', function (req, res, next) {
    const xss = req.query.xss;
    res.set('X-XSS-Protection', 0);
    res.render('index', {title: 'Express', xss: xss});
});

router.get('/comment', function (req, res, next) {
    console.log(req.query.comment);
    comments.v = html_encode(req.query.comment);
    res.json({
        msg: 'ok',
        comment: comments.v
    })
});

router.get('/getComment', function (req, res, next) {
    res.json({
        msg: 'ok',
        comment: comments.v
    })
});

module.exports = router;
