/* 
    Author     : Kamila Przychodzen <kamila.przychodzen@gmail.com>
*/

'use sctrict';

function initSkillInputField(data, callback) {
    $('#skills').autocomplete({
        source: function (request, response) {
            //uncomment if you want to switch to data loaded from json
            
//            var firstLetter = request.term.slice(0, 1).search(/[^a-z]+/) > -1 ? "#" : request.term.slice(0, 1);
//            if (request.term.length === 1) {
//
//                var gatheredSkills = JSON.parse(localStorage.getItem(firstLetter));
//            }
//
//            if (!gatheredSkills) {
//                var url = './data/html/linkedin_';
//                url = url + request.term.slice(0, 1) + '.html';
//                if (request.term.slice(0, 1).search(/[^a-z]+/) > -1) {
//                    url = './data/html/linkedin.html';
//                }
//
//                $.get(url)
//                        .done(function (data) {
//                            gatheredSkills = parseHTMLSkillsOutput(data, firstLetter);
//                            setTimeout(function () {
//                                response(filterGatheredSkills(request.term, gatheredSkills));
//
//                            }, 0);
//                        });
//            } else {
                response(filterGatheredSkills(request.term, data));
//            }



        },
        minLength: 1,
        select: function (event, ui) {
            var item = ui.item;
            $(this).val("");
            callback(item);
            return false;
        }
    });

    function filterGatheredSkills(term, gatheredSkills) {
        var re = $.ui.autocomplete.escapeRegex(term);
        var matcher = new RegExp("^" + re, "i");
        return $.grep(gatheredSkills, function (item) {
            return matcher.test(item.label);
        });
    }

    function parseHTMLSkillsOutput(data, letter) {
        //all skills from links on linkedin page
        var skillTables = $('<div/>').html(data).contents().find('li.content');
        gatheredSkills = [];

        for (var i = 0; i < skillTables.length; i++) {
            var skillName = skillTables.get(i).getElementsByTagName('a')[0].title;
            var skill = {};
            skill.id = +("" + letter.charCodeAt() + i); //try to make it unique id so we get first character code and then concatenate index in an array so for first item that starts with a it will be 1161
            skill.label = skillName;
            gatheredSkills.push(skill);
        }

        // if we are not searching for keywords between a-z, lets save it as # key
        localStorage.setItem(letter, JSON.stringify(gatheredSkills));
        return gatheredSkills;

    }

}
;
