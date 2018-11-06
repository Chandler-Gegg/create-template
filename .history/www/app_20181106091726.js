// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../app',
        jquery: "<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/main']);
