// This section sets up some basic app metadata,
// The entire section is optional.

// Hier kunnen we app data kwijt, zoals splash screen etc.

// Set up external locations the app needs access to.
App.accessRule("*", {external: false});

/*App.icons({
  // iOS
  'iphone': 'public/img/icons/ios/icon-60.png',
  'iphone_2x': 'public/img/icons/ios/icon-60@2x.png',

  // Android
  'android_ldpi': 'public/img/icons/android/icon-ldpi.png',
  'android_mdpi': 'public/img/icons/android/icon-mdpi.png',
  'android_hdpi': 'public/img/icons/android/icon-hdpi.png',
  'android_xhdpi': 'public/img/icons/android/icon-xhdpi.png'
});*/

/*App.launchScreens({
  // iOS
  'iphone': 'public/img/splash/splash-320x480.png',
  'iphone_2x': 'public/img/splash/splash-320x480@2x.png',
  'iphone5': 'public/img/splash/splash-320x568@2x.png',

  // Android
  'android_ldpi_portrait': 'public/img/splash/splash-200x320.png',
  'android_mdpi_portrait': 'public/img/splash/splash-320x480.png',
  'android_hdpi_portrait': 'public/img/splash/splash-480x800.png',
  'android_xhdpi_portrait': 'public/img/splash/splash-720x1280.png',
});*/

App.setPreference('StatusBarOverlaysWebView', 'false');
App.setPreference('StatusBarBackgroundColor', '#000000');