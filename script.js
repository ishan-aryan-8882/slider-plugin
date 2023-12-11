 if (typeof jQuery !== 'undefined') {
    // jQuery is loaded, now you can use it.
    $(function() {
        $("#container1").twentytwenty();
    });
    console.log('hello');
} else {
    console.error('jQuery is not loaded.');
}
