/**
 * main.js
 *
 * Only runs in modern browsers via feature detection
 * Requires support for querySelector, classList and addEventListener
 */

'use strict';

// Only run in capable browsers via feature detection
var didCutTheMustard = 'querySelector' in document
  && 'classList' in document.createElement('a')
  && 'addEventListener' in window;

if (didCutTheMustard) {

  // Add class "js" to html element
  document.querySelector('html').classList.add('js');

  /**
   * Countdown timer
   */
  (function () {

    const countDownElem = document.querySelector('#countdown');

    if (!countDownElem) return;

    function getTimeRemaining(endtime) {
      var t = Date.parse(endtime) - Date.parse(new Date());
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    }

    function initializeClock(countDownElem, endtime) {
      var daysSpan = countDownElem.querySelector('.days');
      var hoursSpan = countDownElem.querySelector('.hours');
      var minutesSpan = countDownElem.querySelector('.minutes');
      var secondsSpan = countDownElem.querySelector('.seconds');

      function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }

      updateClock();
      var timeinterval = setInterval(updateClock, 1000);
    }

    var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);

    initializeClock(countDownElem, deadline);
  })();
}
