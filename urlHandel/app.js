"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var node_fetch_1 = require("node-fetch");
var baseUrl = 'http://127.0.0.1:8080/unsafe/';
var app = (0, express_1.default)();
app.use(function (req, res, next) {
    var _a = req.query, width = _a.width, height = _a.height;
    res.setHeader('Content-Type', 'image/jpeg');
    (0, node_fetch_1.default)("".concat(baseUrl, "rs:fit:").concat(width || '', ":").concat(height || '', ":1/plain/s3:/").concat(req.path), { method: 'get' }).then(function (data) {
        data.body.pipe(res);
    });
});
app.listen(10000, function () {
    console.log('listen port in 10000');
});
