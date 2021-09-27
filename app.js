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
        
        if ($('.pickadate').length > 0) {
        $('.pickadate').each(function () {
            setPickADate($(this));
        });

    }

    if ($.fn.pickatime && $('.pickatime').length > 0) {
        $('.pickatime').css('cursor', 'pointer');
        $('.pickatime').pickatime({
            format: 'h:i',
            formatSubmit: 'h:i'
        });
    }

    if ($('.bootstrap-select').length > 0) {
        $('.bootstrap-select').each(function () {
            $('.bootstrap-select').selectpicker();
        });

    }

    if ($('[data-popup="lightbox"]').length > 0) {
        $('[data-popup="lightbox"]').fancybox({
            padding: 3
        });
    }
        
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
        
        if ($('.underscore_tabs').length > 0) {
        $(".underscore_tabs").each(function () {
            var gradeTable = $(this);
            var gradeTemplate = _.template($('#grade-template').remove().text());

            function removeTab(elKey) {
                $("div#translation-content-" + elKey).remove();

                $("div.tabbable > .nav > li").first().find('a').first().trigger('click');
                $("li#translation-control-" + elKey).removeClass('active').toggle();
                $('a.translation-add[data-rel="' + elKey + '"]').toggle();
            }

            $("a.translation-add").on('click', function (e) {
                e.preventDefault();
                var elKey = $(this).data('rel');
                $(this).toggle();
                $("li#translation-control-" + elKey).toggle();
                $(gradeTemplate({key: elKey}))
                    .appendTo(gradeTable).delegate('a.translation-remove', 'click', function () {
                    removeTab(elKey);
                });
            });

            $('a.translation-remove').on('click', function (e) {
                var elKey = $(this).data('rel');
                removeTab(elKey);
            });

        });
    }
        
    });
