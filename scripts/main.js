(function() {
  var canvas = document.getElementById('timeline');

  var carmackPath = new Path({
    segments: [[100, 100], [150, 150]]
  });

  carmackPath.strokeColor = '#3a619e';
  carmackPath.strokeWidth = 10;

  console.log(canvas);
})();
