/* 
    Author     : Kamila Przychodzen <kamila.przychodzen@gmail.com>
*/

'use strict';

/**
 * This one is to transform ugly response from Neo. I know it is ugly but not as ugly as response xD
 * 
 * 
 */

fyd.factory('TransformNoeResponse', function () {
    return {
        proceed: function (response) {
            var transformedObject = [];
            var response = JSON.parse(response);
            if (response.results)
            {
                var responseData = response.results[0].data;
                for (var idx in responseData) {
                    var row = {};
                    for (var i in responseData[idx].row) {
                        var columnLabel = response.results[0].columns[i];
                        row[columnLabel] = responseData[idx].row[i];
                    }
                    transformedObject.push(row);
                }
            }
            return transformedObject;
        }
    };
});