

    document.addEventListener('DOMContentLoaded', function() {
    
        // Check if the cookie exists using vanilla JS
        var pa_promo_bar_shown = getCookie('pa_promo_bar_shown');
    
        // If the cookie does not equal 'dismiss', show the promo bar
        if (pa_promo_bar_shown !== 'dismiss') {
            document.querySelector('.pa-promo-bar').style.display = 'block';
        } else {
            document.querySelector('.pa-promo-bar').style.display = 'none';
        }
    
        // Add a click event listener to close the promo bar
        document.querySelector('#pa-promo-close').addEventListener('click', function() {
            document.querySelector('.pa-promo-bar').style.display = 'none';
            // Optionally, set the cookie here if you want to hide it in the future.
            setCookie('pa_promo_bar_shown', 'dismiss', 1); // 1 day expiration
        });
    
    });
    
    // Function to get the value of a cookie by name
    function getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length === 2) return parts.pop().split(";").shift();
    }
    
    // Function to set a cookie
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }
    