function scrollToLastUnread() {
    $last = $(".last-new-tweet");
    if($last.length > 0){
        $(window).scrollTop($last.position().top);
    }
}