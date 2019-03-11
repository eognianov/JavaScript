/// <reference path="../../typings/globals/jquery/index.d.ts" />

function addSticker() {
    let $title = $('.title');
    let $content = $('.content');
    let $stickerList = $('#sticker-list');

    if ($title.val() && $content.val()) {
        createNote();
        reset();
    }
    

    function reset() {
        $title.val('');
        $content.val('');
    }

    function createNote() {
        let $newNoteLi = $('<li>');
        $newNoteLi.addClass('note-content');

        let $a = $('<a>');
        $a.text('x');
        $a.addClass('button');
        $a.on('click', ()=>{
            $newNoteLi.remove();
        });

        let $h = $('<h2>');
        $h.text($title.val());

        let $p = $('<p>');
        $p.text($content.val());

        $newNoteLi.append($a);
        $newNoteLi.append($h);
        $newNoteLi.append($('<hr>'));
        $newNoteLi.append($p);

        $stickerList.append($newNoteLi);
    }

    function eraseSticker() {
        
        console.log(this.target);
        
    }
}