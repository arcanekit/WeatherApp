var apiKey = '5c21125cf081fc6a0ec951ea836f6ed0';
var unitLabel = 'F';
var units = 'imperial';

function setBackground(icon) {
  var background = "";
  switch (icon) {
    case "01d":
      background = "https://snap-photos.s3.amazonaws.com/img-thumbs/960w/XDSN9BRX80.jpg";
      break;
    case "01n":
      background = "https://snap-photos.s3.amazonaws.com/img-thumbs/960w/C32NWFICI5.jpg";
      break;
    case "02d":
      background = "https://snap-photos.s3.amazonaws.com/img-thumbs/960w/XW9XDRP5VQ.jpg";
      break;
    case "02n":
      background = "https://snap-photos.s3.amazonaws.com/img-thumbs/960w/J6BEI6ITP8.jpg";
      break;
    case "03d":
         case "03n":
      background = "https://snap-photos.s3.amazonaws.com/img-thumbs/960w/AF1MFIQ4HV.jpg";
      break;
    case "04d":
    case "04n":
      background = "https://snap-photos.s3.amazonaws.com/img-thumbs/960w/CB07FVZTBF.jpg";
      break;
    case "09d":
          case "10d":
        background = "https://snap-photos.s3.amazonaws.com/img-thumbs/960w/A3GM7T9ZDV.jpg";
      break;
    case "09n":
    case "10n":
      background = "https://snap-photos.s3.amazonaws.com/img-thumbs/960w/JZQ1X0X4CZ.jpg";
      break;
    case "11d":
    case "11n":
      background = "https://snap-photos.s3.amazonaws.com/img-thumbs/960w/EITG86ZLPT.jpg";
      break;
    case "13d":
      background = "https://snap-photos.s3.amazonaws.com/img-thumbs/960w/PMTRLRBGPU.jpg";
      break;
    case "13n":
      background = "https://snap-photos.s3.amazonaws.com/img-thumbs/960w/5GRO0FY80K.jpg";
      break;
    case "50d":
      background = "https://snap-photos.s3.amazonaws.com/img-thumbs/960w/7C6FB901C7.jpg";
      break;
    default:
      background = "https://pixabay.com/static/uploads/photo/2015/11/21/11/39/sky-1054733_960_720.jpg";
      break;
  }
    $('html').css('background', 'url(' + background + ')');
    $('html').css('background-size', 'cover');
}
$(document).ready(function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getWeather);
  } else {
    $('.location').append("Geolocation is not supported by this browser.");
  }

  function getWeather(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    if (unitLabel === 'F') {
      units = 'imperial';
    } else if (unitLabel === 'C') {
      units = 'metric';
    }
    var weatherURL = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&APPID=' + apiKey + '&units=' + units;
    $.getJSON(weatherURL, function(weather) {
      var temperature = (Math.round(weather.main.temp * 10)) / 10;
      $('.location').text(weather.name + ", " + weather.sys.country);
      $('.temp').text(temperature + " " + unitLabel);
      $('.conditions').text(weather.weather[0].description);
      setBackground(weather.weather[0].icon);

    }, "jsonp");
  };

  $('button').click(function() {
    unitLabel = $(this).html();
    $('button').removeClass('active');
    $(this).addClass('active');
    navigator.geolocation.getCurrentPosition(getWeather);
  })
});
