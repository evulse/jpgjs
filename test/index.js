var vows = require('vows'),
    assert = require('assert'),
    fs = require('fs'),
events = require('events'),
    Canvas = require('canvas'),
    imagediff = require('imagediff');

eval(fs.readFileSync('jpg.js')+'');

var a = new Canvas.Image;
var b = new Canvas.Image;

var canvas = new Canvas(200,200)
    , ctx = canvas.getContext('2d');


// Create a Test Suite
vows.describe('JPEG decoding').addBatch({
    'when image is baseline': {
        topic: function () {

            var promise = new(events.EventEmitter);

            fs.readFile(__dirname + '/fixtures/j1.jpg', function(err, squid){
                if (err) throw err;
                img = new Canvas.Image;
                img.src = squid;
                x = ctx.drawImage(img, 0, 0, img.width, img.height);
                promise.emit("success", canvas);
            });


            return promise;
        },
        'and the original is loaded': {
            topic: function (a) {

                var promise = new(events.EventEmitter);

                fs.readFile(__dirname + '/fixtures/j1.jpg', function(err, squid){
                    if (err) throw err;
                    j = new JpegImage();
                    j.load(squid);
                    d = imagediff.createImageData(j.width, j.height);
                    j.copyToImageData(d);
                    promise.emit("success", a, d);
                });

                return promise;

            },
            'the generated file matches the original': function (err,b,c) {

                assert.isTrue (imagediff.equal(b, c, 0));
            }
        }
    },
    'when image is progressive': {
        topic: function () {

            var promise = new(events.EventEmitter);

            fs.readFile(__dirname + '/fixtures/j2.jpg', function(err, squid){
                if (err) throw err;
                img = new Canvas.Image;
                img.src = squid;
                x = ctx.drawImage(img, 0, 0, img.width, img.height);
                promise.emit("success", canvas);
            });


            return promise;
        },
        'and the original is loaded': {
            topic: function (a) {

                var promise = new(events.EventEmitter);

                fs.readFile(__dirname + '/fixtures/j2.jpg', function(err, squid){
                    if (err) throw err;
                    j = new JpegImage();
                    j.load(squid);
                    d = imagediff.createImageData(j.width, j.height);
                    j.copyToImageData(d);
                    promise.emit("success", a, d);
                });

                return promise;

            },
            'the generated file matches the original': function (err,b,c) {
                assert.isTrue (imagediff.equal(b, c, 0));
            }
        }
    },
    'when image is baseline gray': {
        topic: function () {

            var promise = new(events.EventEmitter);

            fs.readFile(__dirname + '/fixtures/j3.jpg', function(err, squid){
                if (err) throw err;
                img = new Canvas.Image;
                img.src = squid;
                x = ctx.drawImage(img, 0, 0, img.width, img.height);
                promise.emit("success", canvas);
            });


            return promise;
        },
        'and the original is loaded': {
            topic: function (a) {

                var promise = new(events.EventEmitter);

                fs.readFile(__dirname + '/fixtures/j3.jpg', function(err, squid){
                    if (err) throw err;
                    j = new JpegImage();
                    j.load(squid);
                    d = imagediff.createImageData(j.width, j.height);
                    j.copyToImageData(d);
                    promise.emit("success", a, d);
                });

                return promise;

            },
            'the generated file matches the original': function (err,b,c) {
                assert.isTrue (imagediff.equal(b, c, 0));
            }
        }
    }

}).run();