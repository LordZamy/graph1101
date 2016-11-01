(function() {
  var $canvas = $('#timeline');
  var WIDTH = $canvas.width();
  var HEIGHT = $canvas.height();

  var HEADER_FONT_SIZE = 42

  // major groups
  var carmackTimeline = new Group();
  var romeroGroup = new Group();

  /* Carmack Stuff */
  var carmackPath = new Path({
    segments: [
      [WIDTH / 12, 200], [WIDTH / 5, HEIGHT / 2],
      [4 * WIDTH / 5, HEIGHT / 2], [11 * WIDTH / 12, 200]
    ],
    strokeColor: '#3a619e',
    strokeWidth: 15,
    strokeCap: 'round'
  })

  var carmackHeading = new PointText({
    point: [view.center.x, 100],
    content: 'John Carmack',
    fillColor: '#000000',
    fontFamily: 'Bungee',
    fontWeight: 400,
    fontSize: HEADER_FONT_SIZE,
    justification: 'center'
  })

  var carmackEvent = createEventCircle(WIDTH / 12, 200)

  carmackTimeline.addChildren([carmackPath, carmackEvent])
  carmackTimeline.translate(0, -7.5)
  /* End Carmack Stuff */

  /* Romero Stuff */
  var romeroHeading = new PointText({
    point: [view.center.x, HEIGHT - 100],
    content: 'John Romero',
    fillColor: '#000000',
    fontFamily: 'Bungee',
    fontWeight: 400,
    fontSize: HEADER_FONT_SIZE,
    justification: 'center'
  })

  var romeroPath = new Path({
    segments: [
      [WIDTH / 12, HEIGHT - 200], [WIDTH / 5, HEIGHT / 2],
      [4 * WIDTH / 5, HEIGHT / 2], [11 * WIDTH / 12, HEIGHT - 200]
    ],
    strokeColor: '#c74044',
    strokeWidth: 15,
    strokeCap: 'round'
  })

  romeroPath.translate(0, 7.5)
  /* End Romero Stuff */

  var yHalfPath = new Path({
    segments: [[WIDTH / 2, 0], [WIDTH / 2, HEIGHT]],
    selected: true
  })

  var xHalfPath = new Path({
    segments: [[0, HEIGHT / 2], [WIDTH, HEIGHT / 2]],
    selected: true
  })

  function createEventCircle(x, y) {
    return new Path.Circle({
        center: [x, y],
        radius: 10,
        strokeColor: '#000000',
        strokeWidth: 4,
        fillColor: '#ffffff'
    })
  }
})()
