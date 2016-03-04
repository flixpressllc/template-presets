// node_modules requires:
import gulp from 'gulp';
import s3 from 'gulp-s3';

// NodeJS level requires:
import fs from 'fs';

// Settings for file paths
const filesPath = 'templates/presets/';
const baseProductionPath = '/Volumes/MediaRobot/';
const baseDevelopmentPath = 'development_files/';
const watchedFiles = 'presets/*.{xml,js}';

// derived constants
const productionPath = baseProductionPath + filesPath;
const developmentPath = baseDevelopmentPath + filesPath; 

// flags
var production = false;

//################# End Settings and Requires ###############

/* 
  I am doing this slightly different than suggested at https://github.com/nkostelnik/gulp-s3
  With my version, only the Key and Secret are in the JSON file. I can define the
  bucket here.

  The aws.json file ought to look like this:

  {
  "key": "SOMETHING",
  "secret": "SOMETHING ELSE"
  }
*/
var aws = JSON.parse(fs.readFileSync('./aws.json'));
aws.bucket = 'FlixSamples';
const awsCredentials = aws;
const awsOptions = {uploadPath: developmentPath}

gulp.task('default', () => {
  if (production){
    return gulp.src(watchedFiles)
      .pipe(gulp.dest(productionPath)) 
  } else {
    return gulp.src(watchedFiles)
      .pipe(s3(awsCredentials, awsOptions))
  }
});

gulp.task('develop', () => {
  gulp.watch(watchedFiles, ['default']);
});

gulp.task('production', () => {
  production = true;
  gulp.watch(watchedFiles, ['default']);
});
