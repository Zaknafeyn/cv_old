/**
 * Created by Valik on 05.08.2014.
 */

function unhide(divID) {
    $(document).ready(function() {
        var item = $(divID);
        item.toggle(500);
    })
}