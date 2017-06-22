(function()
 {
    'use strict';

    var errorElement = document.querySelector('#error_msg'),
        video = document.querySelector('#video'),
        constraints = window.constraints = {
            audio: false,
            video: true
        };

    /*
        Success Handler
    */
    var handleSuccess = function(stream)
    {
        var videoTracks = stream.getVideoTracks();
        console.log('Got stream with constraints:', constraints);
        console.log('Using video device: ' + videoTracks[0].label);
        stream.oninactive = function() {
        console.log('Stream inactive');
        };
        window.stream = stream; // make variable available to browser console
        video.srcObject = stream;
    };

    /*
        Error Handler
    */
    var handleError = function(error) {
        if (error.name === 'ConstraintNotSatisfiedError') {
            errorMsg('The resolution ' + constraints.video.width.exact + 'x' +
            constraints.video.width.exact + ' px is not supported by your device.');
        } else if (error.name === 'PermissionDeniedError') {
            errorMsg('Permissions have not been granted to use your camera and ' +
          'microphone, you need to allow the page access to your devices in ' +
          'order for the demo to work.');
        }
        errorMsg('getUserMedia error: ' + error.name, error);
    };

    /*
        Error Message generator
    */
    var errorMsg = function(msg, error) {
        errorElement.innerHTML += '<p>' + msg + '</p>';
        if (typeof error !== 'undefined') {
            console.error(error);
        }
    };

    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(handleSuccess)
        .catch(handleError);
 })();