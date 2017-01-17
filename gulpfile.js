var gulp = require('gulp')
var nodemon = require('gulp-nodemon')
 

 
gulp.task('develop', function () {
  var stream = nodemon({ script: 'app.js'
          , ext: 'html js'
          , ignore: ['ignored.js']
          })
 
  stream
      .on('restart', function () {
        console.log('restarted!')
      })
      .on('crash', function() {
        console.error('Application has crashed!\n')
         stream.emit('restart', 10)  // restart the server in 10 seconds 
      })
})