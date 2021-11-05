import { useEffect, useRef } from 'react';
import SignaturePad from 'signature_pad';
export function _dataURLToBlob(dataURL) {
  var parts = dataURL.split(';base64,');
  var contentType = parts[0].split(':')[1];
  var raw = window.atob(parts[1]);
  var rawLength = raw.length;
  var uInt8Array = new Uint8Array(rawLength);

  for (var i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }

  return new Blob([uInt8Array], {
    type: contentType
  });
}

function _download(dataURL, filename) {
  var blob = _dataURLToBlob(dataURL);

  var url = window.URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
}

export default function App(cavansRef, options) {
  if (options === void 0) {
    options = {
      backgroundColor: 'rgb(255, 255, 255,0)',
      penColor: 'black',
      useLandscape: true
    };
  }

  var padRef = useRef();
  useEffect(function () {
    var canvas = cavansRef.current;
    var signaturePad = padRef.current = new SignaturePad(canvas, options);

    function resizeCanvas() {
      var useLandscape = options.useLandscape;
      var w = canvas.offsetWidth;
      var h = canvas.offsetHeight;
      canvas.width = w;
      canvas.height = h;

      if (useLandscape) {
        var ctx = canvas.getContext('2d');
        ctx.rotate(1.5 * Math.PI);
        ctx.translate(-canvas.height, 0);
      }

      signaturePad.clear(); // otherwise isEmpty() might return incorrect value
    }

    window.addEventListener('resize', resizeCanvas, false);
    resizeCanvas();
    return function () {
      window.removeEventListener('resize', resizeCanvas, false);
    };
  }, [cavansRef, options]);

  var download = function download(fileName) {
    var dataURL = padRef.current.toDataURL();

    _download(dataURL, fileName);
  };

  var undo = function undo() {
    if (options.useLandscape) {
      return;
    }

    var data = padRef.current.toData();

    if (data) {
      data.pop(); // remove the last dot or line

      padRef.current.fromData(data);
    }
  };

  var setPenColor = function setPenColor(color) {
    padRef.current.penColor = color;
  };

  var clear = function clear() {
    padRef.current.clear();

    if (options.useLandscape) {
      var canvas = cavansRef.current;
      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.clearRect(0, 0, canvas.height, canvas.width);
    }
  };

  return {
    download: download,
    padRef: padRef,
    undo: undo,
    setPenColor: setPenColor,
    clear: clear
  };
}