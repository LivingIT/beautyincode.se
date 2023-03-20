/**
 * main.js
 *
 * Only runs in modern browsers via feature detection
 * Requires support for querySelector, classList and addEventListener
 */

'use strict'

// Only run in capable browsers via feature detection
var didCutTheMustard =
  'querySelector' in document &&
  'classList' in document.createElement('a') &&
  'addEventListener' in window

/**
 * Countdown timer
 */
const countdown = (endDate) => {
  const countDownElem = document.querySelector('#countdown')

  if (!countDownElem) return

  let days, hours, minutes, seconds

  endDate = new Date(endDate).getTime()

  if (isNaN(endDate)) {
    return
  }

  const calculate = () => {
    let startDate = new Date().getTime()

    let timeRemaining = parseInt((endDate - startDate) / 1000)

    if (timeRemaining >= 0) {
      days = parseInt(timeRemaining / 86400)
      timeRemaining = timeRemaining % 86400

      hours = parseInt(timeRemaining / 3600)
      timeRemaining = timeRemaining % 3600

      minutes = parseInt(timeRemaining / 60)
      timeRemaining = timeRemaining % 60

      seconds = parseInt(timeRemaining)

      countDownElem.querySelector('.days').innerHTML = parseInt(days, 10)
      countDownElem.querySelector('.hours').innerHTML =
        hours < 10 ? '0' + hours : hours
      countDownElem.querySelector('.minutes').innerHTML =
        minutes < 10 ? '0' + minutes : minutes
      countDownElem.querySelector('.seconds').innerHTML =
        seconds < 10 ? '0' + seconds : seconds
    } else {
      return
    }

    const isActive = countDownElem.classList.contains('active')

    if (!isActive) countDownElem.classList.add('active')
  }

  setInterval(calculate, 1000)
}

function scrollToTop() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

function scrollHandler() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById('scrollToTopContainer').style.display = 'block'
  } else {
    document.getElementById('scrollToTopContainer').style.display = 'none'
  }
}

// Toggle attributes true/false
const attrToggle = (elem, attr) =>
  elem.getAttribute(attr) == 'false'
    ? elem.setAttribute(attr, 'true')
    : elem.setAttribute(attr, 'false')

// Check if child of elem
const checkParent = (parent, child) => {
  if (parent.contains(child)) return true
  return false
}

const slideInNavigation = (nav, trigger) => {
  const navElem = document.querySelector(nav)
  const triggerElem = document.querySelector(trigger)

  // Add a11y attributes
  navElem.setAttribute('aria-expanded', 'false')
  triggerElem.setAttribute('aria-controls', `#${navElem.id}`)
  // triggerElem.setAttribute('aria-hidden', 'false')
  triggerElem.setAttribute('id', 'main-nav-trigger')

  document.addEventListener('click', (e) => {
    if (e.target.closest(trigger)) {
      attrToggle(navElem, 'aria-expanded')
      triggerElem.toggleAttribute('aria-expanded')
    }
    if (
      !e.target.closest(trigger) &&
      navElem.getAttribute('aria-expanded') === 'true'
    ) {
      attrToggle(navElem, 'aria-expanded')
      triggerElem.toggleAttribute('aria-expanded')
    }
  })

  document.addEventListener('keyup', (e) => {
    if (e.code == 'Tab') {
      const focusElem = document.activeElement
      console.log('focusElem: ', focusElem)
      console.log('isInNav: ', checkParent(navElem, focusElem))
      if (
        !checkParent(navElem, focusElem) &&
        navElem.getAttribute('aria-expanded') === 'true'
      ) {
        attrToggle(navElem, 'aria-expanded')
        triggerElem.toggleAttribute('aria-expanded')
      }
    }
  })
}

if (didCutTheMustard) {
  // Add class "js" to html element
  document.querySelector('html').classList.add('js')

  // Start the countdown
  countdown('2024/03/02 09:00:00')

  if (
    document.getElementById('scrollToTopContainer') != undefined &&
    document.getElementById('scrollToTopButton') != undefined
  ) {
    document.getElementById('scrollToTopButton').onclick = scrollToTop
    window.onscroll = scrollHandler

    if (
      document.body.scrollTop <= 50 ||
      document.documentElement.scrollTop <= 50
    ) {
      document.getElementById('scrollToTopContainer').style.display = 'none'
    }
  }

  // Fire up the slide-in menu
  slideInNavigation('#main-nav', '#main-nav-trigger')
}
