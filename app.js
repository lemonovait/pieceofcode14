/**
 * Basic layout modules
 */
var pace = require('pace');
window.jQuery = require('jquery');
window.$ = window.jQuery;

var bootstrap = require('bootstrap3');
var blockui = require('blockui');

//var fab = require('fab');
var prism = require('prismjs');

//require('@audithsoftworks/jquery.uniform')($);
require('@audithsoftworks/jquery.uniform');
require('bootstrap-select');
require('summernote');
var pickadate = require('pickadate');
var datepicker = require('bootstrap-datepicker');
import 'fullcalendar';

var spectrum = require('spectrum-colorpicker');
const _ = require('underscore');
//import 'plupload';
//var googlecharts = require('google-charts');
import {GoogleCharts} from 'google-charts';

/**
...
*/
$(document).ready(function () {
if ($('.calendar').length > 0) {
        $('.calendar').each(function () {
            let url = $(this).data('url');

            $(this).fullCalendar({
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay'
                },
                locale: 'pl',
                timeFormat: 'H:mm',
                defaultView: 'month',
                editable: true,
                events: function (start, end, timezone, callback) {
                    $.get(url).done(function (data) {
                        callback(data);
                    });
                },
                /**
                 dayClick: function (date, jsEvent, view) {
                    var target = "<?= $this->Url->build(['action' => 'place']); ?>/" + date.format();
                    $(document).find('.modal-content').load(target, function () {
                    });
                    $("#modal_remote").modal("show");
                },
                 eventClick: function (event) {
                    if (event.id) {
                        var target = "<?= $this->Url->build(['plugin' => 'LemoPRM', 'controller' => 'Deals', 'action' => 'edit']); ?>/" + event.id;
                        $(document).find('.modal-content').load(target, function () {
                        });
                        $("#modal_remote").modal("show");
                    }
                },
                 eventDrop: function (event, delta, revertFunc) {
                    $.post("<?= $this->Url->build(['plugin' => 'LemoPRM', 'controller' => 'Deals', 'action' => 'reschedule']); ?>/" + event.id, {
                        start: event.start.format(),
                        end: event.end.format()
                    })
                        .success(function () {
                            //alert("Event saved!");
                        }).error(function () {
                        alert("Error!");
                    });
                },
                 eventResize: function (event, delta, revertFunc) {
                    $.post("<?= $this->Url->build(['plugin' => 'LemoPRM', 'controller' => 'Deals', 'action' => 'reschedule']); ?>/" + event.id, {
                        start: event.start.format(),
                        end: event.end.format()
                    })
                        .success(function () {
                            //alert("Event saved!");
                        }).error(function () {
                        alert("Error!");
                    });
                },
                 */
            });
        });
    }
    });
