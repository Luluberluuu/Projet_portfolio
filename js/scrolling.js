var a1 = document.getElementById('lien1');
var a2 = document.getElementById('lien2');
var a3 = document.getElementById('lien3');
var bar1 = document.getElementById('bar1');
var bar2 = document.getElementById('bar2');
var bar3 = document.getElementById('bar3');

//changement couleur navbar scrolling
$(window).scroll(function() {
    $('header').toggleClass('scrolled', $(this).scrollTop() > 75);
});

$(window).scroll(function() {
    var value = $(this).scrollTop();
    if (value > 75) {
        $('.logoBis').attr("src", "img/icons8-chat-100-2.png");
        a1.style.color = "#FFF";
        a2.style.color = "#FFF";
        a3.style.color = "#FFF";
        bar1.style.backgroundColor = "#FFF";
        bar2.style.backgroundColor = "#FFF";
        bar3.style.backgroundColor = "#FFF";
    } else {
        $('.logoBis').attr("src", "img/icons8-chat-100.png");
        a1.style.color = "#001831";
        a2.style.color = "#001831";
        a3.style.color = "#001831";
        bar1.style.backgroundColor = "#001831";
        bar2.style.backgroundColor = "#001831";
        bar3.style.backgroundColor = "#001831";
    }
});