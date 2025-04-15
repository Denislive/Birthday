document.addEventListener('DOMContentLoaded', function () {
  // Loader hide and home show after 4 seconds
  setTimeout(function () {
    document.getElementById('ll').style.display = 'none';
    document.getElementById('home').style.display = 'block';
  }, 4000);

  // Image shifting logic
  const imagePaths = [
    './images/2.jpeg',
    './images/3.jpeg',
    './images/4.jpeg',
    './images/5.jpeg',
    './images/6.jpeg',
    './images/7.jpeg',
    './images/8.jpeg',
    './images/9.jpeg',
    './images/10.jpeg'
  ];
  let currentImageIndex = 0;
  const imgElement = document.getElementById('shifting-image');

  // Typed.js initialization for #typed
  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 40,
    backSpeed: 40,
    startDelay: 1000,
    loop: false,
    onStringTyped: function (pos, self) {
      if (imgElement) {
        imgElement.style.opacity = 0;
        setTimeout(() => {
          currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
          imgElement.src = imagePaths[currentImageIndex];
          imgElement.style.opacity = 1;
        }, 500);
      }
      prettyLog('onStringTyped ' + pos + ' ' + self);
    },
    onBegin: function (self) {
      prettyLog('onBegin ' + self);
    },
    onComplete: function (self) {
      prettyLog('onComplete ' + self);
    },
    preStringTyped: function (pos, self) {
      prettyLog('preStringTyped ' + pos + ' ' + self);
    },
    onLastStringBackspaced: function (self) {
      prettyLog('onLastStringBackspaced ' + self);
    },
    onTypingPaused: function (pos, self) {
      prettyLog('onTypingPaused ' + pos + ' ' + self);
    },
    onTypingResumed: function (pos, self) {
      prettyLog('onTypingResumed ' + pos + ' ' + self);
    },
    onReset: function (self) {
      prettyLog('onReset ' + self);
    },
    onStop: function (pos, self) {
      prettyLog('onStop ' + pos + ' ' + self);
    },
    onStart: function (pos, self) {
      prettyLog('onStart ' + pos + ' ' + self);
    },
    onDestroy: function (self) {
      prettyLog('onDestroy ' + self);
    }
  });

  // Event listeners for typed controls
  document.querySelector('.toggle')?.addEventListener('click', function () {
    typed.toggle();
  });
  document.querySelector('.stop')?.addEventListener('click', function () {
    typed.stop();
  });
  document.querySelector('.start')?.addEventListener('click', function () {
    typed.start();
  });
  document.querySelector('.reset')?.addEventListener('click', function () {
    typed.reset();
  });
  document.querySelector('.destroy')?.addEventListener('click', function () {
    typed.destroy();
  });
  document.querySelector('.loop')?.addEventListener('click', function () {
    toggleLoop(typed);
  });

  // Additional Typed.js instances (unchanged)
  var typed2 = new Typed('#typed2', {
    strings: [
      'Some <i>strings</i> with',
      'Some <strong>HTML</strong>',
      'Chars × ©'
    ],
    typeSpeed: 0,
    backSpeed: 0,
    fadeOut: true,
    loop: true
  });
  document.querySelector('.loop2')?.addEventListener('click', function () {
    toggleLoop(typed2);
  });

  new Typed('#typed3', {
    strings: [
      'My strings are: <i>strings</i> with',
      'My strings are: <strong>HTML</strong>',
      'My strings are: Chars × ©'
    ],
    typeSpeed: 0,
    backSpeed: 0,
    smartBackspace: true,
    loop: true
  });

  new Typed('#typed4', {
    strings: ['Some strings without', 'Some HTML', 'Chars'],
    typeSpeed: 0,
    backSpeed: 0,
    attr: 'placeholder',
    bindInputFocusEvents: true,
    loop: true
  });

  new Typed('#typed5', {
    strings: [
      '1 Some <i>strings</i> with',
      '2 Some <strong>HTML</strong>',
      '3 Chars × ©'
    ],
    typeSpeed: 0,
    backSpeed: 0,
    shuffle: true,
    cursorChar: '_',
    smartBackspace: false,
    loop: true
  });

  new Typed('#typed6', {
    strings: [
      'npm install^1000\n`installing components...` ^1000\n`Fetching from source...`'
    ],
    typeSpeed: 40,
    backSpeed: 0,
    loop: true
  });
});

function prettyLog(str) {
  console.log('%c ' + str, 'color: green; font-weight: bold;');
}

function toggleLoop(typed) {
  typed.loop = !typed.loop;
}