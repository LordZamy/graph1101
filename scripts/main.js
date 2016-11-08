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

  var eventTriangle;
  function createEventCircle(x, y) {
    var eventCircle = new Shape.Circle({
        center: [x, y],
        radius: 10,
        strokeColor: '#000000',
        strokeWidth: 4,
        fillColor: '#ffffff'
    })

    $textbox = $('#text')

    eventCircle.on('mouseenter', function(e) {
      var triangleRadius = 10
      eventTriangle = new Path.RegularPolygon({
        center: [this.position.x + 30, this.position.y + 3],
        sides: 3,
        radius: triangleRadius,
        fillColor: 'black'
      }).rotate(-90)

      eventTextBox = new Shape.Rectangle({
        from: [eventTriangle.position.x + triangleRadius - 2, eventTriangle.position.y - 50],
        to: [eventTriangle.position.x + triangleRadius + 150, eventTriangle.position.y + 50],
        fillColor: '#000000',
        strokeColor: '#000000'
      })

      var bounds = eventTextBox.bounds;
      $textbox.css({'top': bounds.y, 'left': bounds.x, 'height': bounds.height, 'width': bounds.width})
      $textbox.text('John Carmack was born in 1972.')
      $textbox.show()


      this.radius = 15
    })

    eventCircle.on('mouseleave', function(e) {
      eventTriangle.remove()
      eventTextBox.remove()

      $textbox.hide();

      this.radius = 10
    })

    return eventCircle;
  }
})()
