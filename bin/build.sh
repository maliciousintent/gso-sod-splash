# call me from parent dir!

jade $(pwd)/*.jade
stylus --compress $(pwd)/static/css/style.styl
uglifyjs $(pwd)/static/js/main.js --output $(pwd)/static/js/main.min.js