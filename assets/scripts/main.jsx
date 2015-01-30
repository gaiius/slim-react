'use strict';
var React = require('react');
var $ = require('jquery');

require('./test.jsx');

$(function () {
    $('[rel=react]').each(function (index, element) {
        var $el = $(element);
        var id = $el.attr('id');
        var module = $('[data-id=' + id + '][rel=module]').html();
        var props = $('[data-id=' + id + '][rel=props]').html();

        module = JSON.parse(module);
        props = JSON.parse(props);

        React.render(
            require(module)(props),
            $el.get(0)
        );
    });
});
