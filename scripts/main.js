(function() {
  var $canvas = $('#timeline');
  var WIDTH = $canvas.width();
  var HEIGHT = $canvas.height();

  var HEADER_FONT_SIZE = 42

  // major groups
  var carmackTimeline = new Group();
  var romeroTimeline = new Group();

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

  var carmackEvents = [];
  carmackEvents.push(createEventCircle(WIDTH / 12, 200, 120, 80, '1970', 'Carmack is born in Kansas.'))
  carmackEvents.push(createEventCircle(17 * WIDTH / 120, HEIGHT / 4 + 100, 250, 140, '1983', 'Carmack, now a computer enthusiast, breaks in to a school to steal Apple II computers. He gets caught and sent to a juvenile detention home for a year. '))
  carmackEvents.push(createEventCircle(41 * WIDTH / 240, 3 * HEIGHT / 8 + 50, 250, 140, '1988', 'Carmack makes tons of games for companies as a freelance programmer. A company called Softdisk begs him to come and work for them.'))
  carmackEvents.push(createEventCircle(103 * WIDTH / 120, HEIGHT / 4 + 100, 240, 120, '1999', 'Carmack helps create Quake II and Quake III Arena. He slowly reduces his involvement with his giant company.', true))
  carmackEvents.push(createEventCircle(11 * WIDTH / 12,  200, 250, 170, '2001', 'After enjoying incredible successes with his games, Carmack decides to pursue rocketery. He formed Armadillo Aerospace along with a few engineers. Their purpose -- to create a manned rocket ship.', true))

  carmackTimeline.addChild(carmackPath)
  carmackTimeline.addChildren(carmackEvents)
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

  var romeroEvents = []
  romeroEvents.push(createEventCircle(WIDTH / 12, HEIGHT - 200, 120, 80, '1967', 'Romero is born in Colorado.'))
  romeroEvents.push(createEventCircle(17 * WIDTH / 120, 3 * HEIGHT / 4 - 100, 220, 170, '1984', 'Romero is now an avid programmer who earns money and gains recognition by winning magazine sponsored game programming contests.'))
  romeroEvents.push(createEventCircle(41 * WIDTH / 240, 5 * HEIGHT / 8 - 50, 200, 130, '1987', 'Romero loses his recently acquired job. His pregnant wife leaves him. A friend refers him to the company, Softdisk.'))
  romeroEvents.push(createEventCircle(103 * WIDTH / 120, 3 * HEIGHT / 4 - 100, 220, 150, '1997', 'Romero starts his own company called Ion Storm along with a few others from id Software. They focus on game design more than simply development.', true))
  romeroEvents.push(createEventCircle(11 * WIDTH / 12, HEIGHT - 200, 200, 130, '2001', 'Romero leaves Ion Storm due to troubles with the publisher. He starts a small, personal company called Monkeystone Games.', true))

  romeroTimeline.addChild(romeroPath)
  romeroTimeline.addChildren(romeroEvents)
  romeroTimeline.translate(0, 7.5)
  /* End Romero Stuff */

  /* Mutual Stuff */
  var mutualEvents = []
  mutualEvents.push(createEventCircle(WIDTH / 5, HEIGHT / 2, 200, 140, '1989', 'Carmack and Romero start working together at Softdisk. They form a PC game development division called Gamer\'s Edge.'))
  mutualEvents.push(createEventCircle(WIDTH / 3.7, HEIGHT / 2, 220, 170, '1990', 'They create a version of Romero\'s old game, Dangerous Dave, with advanced techniques such as scrolling and adaptive tile refresh. They start making shareware games for Apogee Software.'))
  mutualEvents.push(createEventCircle(WIDTH / 2.9, HEIGHT / 2, 200, 140, '1991', 'They leave Softdisk and start a company called id Software. Carmack researches into ways to incorporate 3D graphics into his game engines.'))
  mutualEvents.push(createEventCircle(WIDTH / 2.3, HEIGHT / 2, 220, 170, '1992', 'They change their office location to Madison, WI. They develop the game Wolfenstein 3D for Apogee Software. It became an internet sensation and set the benchmark for future 3D shooters.'))
  mutualEvents.push(createEventCircle(WIDTH / 1.9, HEIGHT / 2, 240, 180, '1993', 'The iconic Doom is developed. It used brand new programming techniques such as binary space partioning and modularity. This game set a precedent for violence in video games and a standard for 3D first person shooters.'))
  mutualEvents.push(createEventCircle(WIDTH / 1.6, HEIGHT / 2, 220, 170, '1994', 'DOOM II: Hell on Earth is released. The original Doom\'s multiplayer portion was improved tremendously in this release. It paved the way for the popular "deathmatch" gameplay.'))
  mutualEvents.push(createEventCircle(WIDTH / 1.4, HEIGHT / 2, 200, 150, '1995', 'Multiple expansions for Doom are released. Doom has now been ported to various platforms. Carmack accuses Romero of not doing his work and threatens to fire him.'))
  mutualEvents.push(createEventCircle(4 * WIDTH / 5, HEIGHT / 2, 200, 140, '1996', 'The arena shooter Quake is released. However, during the production of Quake, Carmack makes Romero resign from the company.', true))
  /* End Mutual Stuff */

  var yHalfPath = new Path({
    segments: [[WIDTH / 2, 0], [WIDTH / 2, HEIGHT]],
    selected: true
  })

  var xHalfPath = new Path({
    segments: [[0, HEIGHT / 2], [WIDTH, HEIGHT / 2]],
    selected: true
  })

  var eventTriangle, eventTextBox;
  function createEventCircle(x, y, width, height, dateString, messageString, flip) {
    var eventCircle = new Shape.Circle({
        center: [x, y],
        radius: 10,
        strokeColor: '#000000',
        strokeWidth: 4,
        fillColor: '#ffffff'
    })

    $textbox = $('#text')
    $date = $('#date')

    eventCircle.on('mouseenter', function(e) {
      var triangleRadius = 10
      eventTriangle = new Path.RegularPolygon({
        center: [this.position.x + 30, this.position.y + 3],
        sides: 3,
        radius: triangleRadius,
        fillColor: '#2c3e50'
      }).rotate(-90)

      eventTextBox = new Shape.Rectangle({
        from: [eventTriangle.position.x + triangleRadius - 3, eventTriangle.position.y - height / 2],
        to: [eventTriangle.position.x + triangleRadius + width, eventTriangle.position.y + height / 2],
        fillColor: '#2c3e50',
        strokeColor: '#2c3e50',
        radius: 2
      })

      if (flip) {
        eventTriangle.rotate(180)
        eventTextBox.rotate(180, eventTriangle.position)
        eventTriangle.translate(-60, 0)
        eventTextBox.translate(-60, 0)
      }

      var bounds = eventTextBox.bounds;
      $textbox.css({'top': bounds.y + 5, 'left': bounds.x + 5, 'height': bounds.height - 5, 'width': bounds.width - 5})
      $date.text(dateString)
      $textbox.text(messageString)
      $textbox.prepend($date)
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
