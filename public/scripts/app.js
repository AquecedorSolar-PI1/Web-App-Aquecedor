  


  document.addEventListener('DOMContentLoaded', function() {
    // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
    // // The Firebase SDK is initialized and available here!
    //
    // firebase.auth().onAuthStateChanged(user => { });
    // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
    // firebase.messaging().requestPermission().then(() => { });
    // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
    //
    // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥


    try {
      let app = firebase.app();
      let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
      //document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')}`;
    } catch (e) {
      console.error(e);
      //document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
    }


    //var dht = firebase.database().ref("DHT")
    //var db = firebase.database().ref("lights")

    //Last state
    /*
    db.on('value', function(data){

        //console.log("data: ", data.val());
        if(data.val().light1 == "ON"){
          document.getElementById("checkLight1").checked = true;
          //console.log("ON", data.val().led1);
          //$("checkLight1").attr("checked", true);
        }else{
          document.getElementById("checkLight1").checked = false;
          //console.log("OFF", data.val().led1);
          //$("checkLight1").prop("checked", false);
        }

        if(data.val().light2 == "ON"){
          document.getElementById("checkLight2").checked = true;
          //console.log("ON", data.val().led1);
          //$("checkLight1").attr("checked", true);
        }else{
          document.getElementById("checkLight2").checked = false;
          //console.log("OFF", data.val().led1);
          //$("checkLight1").prop("checked", false);
        }

        if(data.val().light3 == "ON"){
          document.getElementById("checkLight3").checked = true;
          //console.log("ON", data.val().led1);
          //$("checkLight1").attr("checked", true);
        }else{
          document.getElementById("checkLight3").checked = false;
          //console.log("OFF", data.val().led1);
          //$("checkLight1").prop("checked", false);
        }



    });

    dht.on("value", function(snapshot) {
      //alert("cHANGE")
      console.log("data: ", snapshot.val());
      document.getElementById("humidity").innerHTML = snapshot.val().humidity + "%";
      document.getElementById("temperature").innerHTML = snapshot.val().temperature;

    });
    */

    //Led 1 Control
    /*
    $("#checkLight1").click(function(){
      //alert("Click")
      //sendEmail()
      var state = $(this).is(':checked');
      if(state){
          
        db.update({light1:"ON"})
      }else{
          
        db.update({light1:"OFF"})
      }
    });

    //Led 2 Control
    $("#checkLight2").click(function(){
      //alert("Click")

      var state = $(this).is(':checked');
      if(state){

        db.update({light2:"ON"})
      }else{
        db.update({light2:"OFF"})
      }
    });

    //Led 3 Control
    $("#checkLight3").click(function(){
      //alert("Click")

      var state = $(this).is(':checked');
      if(state){
        db.update({light3:"ON"})
      }else{
        db.update({light3:"OFF"})
      }
    });
    */

  });


  initApp = function() {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var uid = user.uid;
            var phoneNumber = user.phoneNumber;
            var providerData = user.providerData;
            user.getIdToken().then(function(accessToken) {
              //document.getElementById('sign-in-status').textContent = 'Signed in';
              //document.getElementById('sign-in').textContent = 'Sign out';
              /*document.getElementById('account-details').textContent = JSON.stringify({
                displayName: displayName,
                email: email,
                emailVerified: emailVerified,
                phoneNumber: phoneNumber,
                photoURL: photoURL,
                uid: uid,
                accessToken: accessToken,
                providerData: providerData
              }, null, '  ');
              */
              //document.getElementById('header__title').innerHTML = "Signed in: " + user.displayName; 
              console.log(user.displayName);
              
            });
          } else {
            // User is signed out.
            document.location.href = 'login.html';
            //document.getElementById('sign-in-status').textContent = 'Signed out';
            //document.getElementById('sign-in').textContent = 'Sign in';
            //document.getElementById('account-details').textContent = 'null';
            
          }
        }, function(error) {
          console.log(error);
          
        });
      };

        window.addEventListener('load', function() {
        //firebase.auth().signOut();
        initApp()
       
      });



  //Login part
/*
  $('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

    if (e.type === 'keyup') {
      if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
      if( $this.val() === '' ) {
        label.removeClass('active highlight'); 
      } else {
        label.removeClass('highlight');   
      }   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
        label.removeClass('highlight'); 
      } 
      else if( $this.val() !== '' ) {
        label.addClass('highlight');
      }
    }

});


$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});


*/

      






(function() {
  
  /*  'use strict';

  var app = {
    isLoading: true,
    visibleCards: {},
    selectedCities: [],
    spinner: document.querySelector('.loader'),
    cardTemplate: document.querySelector('.cardTemplate'),
    container: document.querySelector('.main'),
    addDialog: document.querySelector('.dialog-container'),
    daysOfWeek: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  };*/


  /*****************************************************************************
   *
   * Event listeners for UI elements
   *
   ****************************************************************************/
/*
  document.getElementById('butRefresh').addEventListener('click', function() {
    // Refresh all of the forecasts
    app.updateForecasts();
  });
  */

  document.getElementById('butAdd').addEventListener('click', function() {
    // Open/show the add new city dialog
    firebase.auth().signOut();
    document.location.href = 'login.html';
    console.log("logging out");
    //app.toggleAddDialog(true);
  });
/*
  document.getElementById('butAddCity').addEventListener('click', function() {
    // Add the newly selected city
    var select = document.getElementById('selectCityToAdd');
    var selected = select.options[select.selectedIndex];
    var key = selected.value;
    var label = selected.textContent;
    if (!app.selectedCities) {
      app.selectedCities = [];
    }
    app.getForecast(key, label);
    app.selectedCities.push({key: key, label: label});
    app.saveSelectedCities();
    app.toggleAddDialog(false);
  });
  */

  document.getElementById('butAddCancel').addEventListener('click', function() {
    // Close the add new city dialog
    //app.toggleAddDialog(false);
  });


  /*****************************************************************************
   *
   * Methods to update/refresh the UI
   *
   ****************************************************************************/

  // Toggles the visibility of the add new city dialog.
  /*
  app.toggleAddDialog = function(visible) {
    
    firebase.auth().signOut();
    if (visible) {
      app.addDialog.classList.add('dialog-container--visible');
    } else {
      app.addDialog.classList.remove('dialog-container--visible');
    }
    
  };
  */
/*
  // Updates a weather card with the latest weather forecast. If the card
  // doesn't already exist, it's cloned from the template.
  app.updateForecastCard = function(data) {
    var dataLastUpdated = new Date(data.created);
    var sunrise = data.channel.astronomy.sunrise;
    var sunset = data.channel.astronomy.sunset;
    var current = data.channel.item.condition;
    var humidity = data.channel.atmosphere.humidity;
    var wind = data.channel.wind;

    var card = app.visibleCards[data.key];
    if (!card) {
      card = app.cardTemplate.cloneNode(true);
      card.classList.remove('cardTemplate');
      card.querySelector('.location').textContent = data.label;
      card.removeAttribute('hidden');
      app.container.appendChild(card);
      app.visibleCards[data.key] = card;
    }

    // Verifies the data provide is newer than what's already visible
    // on the card, if it's not bail, if it is, continue and update the
    // time saved in the card
    var cardLastUpdatedElem = card.querySelector('.card-last-updated');
    var cardLastUpdated = cardLastUpdatedElem.textContent;
    if (cardLastUpdated) {
      cardLastUpdated = new Date(cardLastUpdated);
      // Bail if the card has more recent data then the data
      if (dataLastUpdated.getTime() < cardLastUpdated.getTime()) {
        return;
      }
    }
    cardLastUpdatedElem.textContent = data.created;

    card.querySelector('.description').textContent = current.text;
    card.querySelector('.date').textContent = current.date;
    card.querySelector('.current .icon').classList.add(app.getIconClass(current.code));
    card.querySelector('.current .temperature .value').textContent =
      Math.round(current.temp);
    card.querySelector('.current .sunrise').textContent = sunrise;
    card.querySelector('.current .sunset').textContent = sunset;
    card.querySelector('.current .humidity').textContent =
      Math.round(humidity) + '%';
    card.querySelector('.current .wind .value').textContent =
      Math.round(wind.speed);
    card.querySelector('.current .wind .direction').textContent = wind.direction;
    var nextDays = card.querySelectorAll('.future .oneday');
    var today = new Date();
    today = today.getDay();
    for (var i = 0; i < 7; i++) {
      var nextDay = nextDays[i];
      var daily = data.channel.item.forecast[i];
      if (daily && nextDay) {
        nextDay.querySelector('.date').textContent =
          app.daysOfWeek[(i + today) % 7];
        nextDay.querySelector('.icon').classList.add(app.getIconClass(daily.code));
        nextDay.querySelector('.temp-high .value').textContent =
          Math.round(daily.high);
        nextDay.querySelector('.temp-low .value').textContent =
          Math.round(daily.low);
      }
    }
    if (app.isLoading) {
      app.spinner.setAttribute('hidden', false);
      app.container.removeAttribute('hidden');
      app.isLoading = false;
    }
  };

*/

  /*****************************************************************************
   *
   * Methods for dealing with the model
   *
   ****************************************************************************/

  
/*
  // Iterate all of the cards and attempt to get the latest forecast data
  app.updateForecasts = function() {
    var keys = Object.keys(app.visibleCards);
    keys.forEach(function(key) {
      app.getForecast(key);
    });
  };

  // TODO add saveSelectedCities function here
  // Save list of cities to localStorage.
  app.saveSelectedCities = function() {
    var selectedCities = JSON.stringify(app.selectedCities);
    localStorage.selectedCities = selectedCities;
  };

  app.getIconClass = function(weatherCode) {
    // Weather codes: https://developer.yahoo.com/weather/documentation.html#codes
    weatherCode = parseInt(weatherCode);
    switch (weatherCode) {
      case 25: // cold
      case 32: // sunny
      case 33: // fair (night)
      case 34: // fair (day)
      case 36: // hot
      case 3200: // not available
        return 'clear-day';
      case 0: // tornado
      case 1: // tropical storm
      case 2: // hurricane
      case 6: // mixed rain and sleet
      case 8: // freezing drizzle
      case 9: // drizzle
      case 10: // freezing rain
      case 11: // showers
      case 12: // showers
      case 17: // hail
      case 35: // mixed rain and hail
      case 40: // scattered showers
        return 'rain';
      case 3: // severe thunderstorms
      case 4: // thunderstorms
      case 37: // isolated thunderstorms
      case 38: // scattered thunderstorms
      case 39: // scattered thunderstorms (not a typo)
      case 45: // thundershowers
      case 47: // isolated thundershowers
        return 'thunderstorms';
      case 5: // mixed rain and snow
      case 7: // mixed snow and sleet
      case 13: // snow flurries
      case 14: // light snow showers
      case 16: // snow
      case 18: // sleet
      case 41: // heavy snow
      case 42: // scattered snow showers
      case 43: // heavy snow
      case 46: // snow showers
        return 'snow';
      case 15: // blowing snow
      case 19: // dust
      case 20: // foggy
      case 21: // haze
      case 22: // smoky
        return 'fog';
      case 24: // windy
      case 23: // blustery
        return 'windy';
      case 26: // cloudy
      case 27: // mostly cloudy (night)
      case 28: // mostly cloudy (day)
      case 31: // clear (night)
        return 'cloudy';
      case 29: // partly cloudy (night)
      case 30: // partly cloudy (day)
      case 44: // partly cloudy
        return 'partly-cloudy-day';
    }
  };

  */

  /*
   * Fake weather data that is presented when the user first uses the app,
   * or when the user has not saved any cities. See startup code for more
   * discussion.
   */

   /*
  var initialWeatherForecast = {

    key: '2459115',
    label: 'New York, NY',
    created: '2016-07-22T01:00:00Z',
    channel: {
      astronomy: {
        sunrise: "5:43 am",
        sunset: "8:21 pm"
      },
      item: {
        condition: {
          text: "Windy",
          date: "Thu, 21 Jul 2016 09:00 PM EDT",
          temp: 56,
          code: 24
        },
        
      }
      
    }
  };
  */
  // TODO uncomment line below to test app with fake data
  // app.updateForecastCard(initialWeatherForecast);

  /************************************************************************
   *
   * Code required to start the app
   *
   * NOTE: To simplify this codelab, we've used localStorage.
   *   localStorage is a synchronous API and has serious performance
   *   implications. It should not be used in production applications!
   *   Instead, check out IDB (https://www.npmjs.com/package/idb) or
   *   SimpleDB (https://gist.github.com/inexorabletash/c8069c042b734519680c)
   ************************************************************************/

  // TODO add startup code here

  

  // TODO add service worker code here
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./service-worker.js')
             .then(function() { console.log('Service Worker Registered'); });
  }




})();





