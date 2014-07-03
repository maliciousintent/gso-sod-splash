# call me from parent dir!

static -H '{"Cache-Control": "no-cache, must-revalidate"}' --port 3010 &
nodemon --exec "sh $(pwd)/bin/build.sh" -e jade,styl,js --ignore "$(pwd)/static/js/main.min.js"