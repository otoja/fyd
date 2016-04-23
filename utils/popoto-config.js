/**
 * URL used to access Neo4j REST API to execute queries.
 * Update this parameter to your running server instance.
 *
 * For more information on Neo4J REST API the documentation is available here: http://neo4j.com/docs/stable/rest-api-cypher.html
 */
popoto.rest.CYPHER_URL = "https://fyd:5l8lvAtJExNd4He0abl4@db-kcu8nh3vkaizyloot4ax.graphenedb.com:24780/db/data/transaction/commit";
popoto.rest.AUTHORIZATION = "Basic ZnlkOjVsOGx2QXRKRXhOZDRIZTBhYmw0";

/**
 * Add this authorization property if your Neo4j server uses basic HTTP authentication.
 * The value of this property must be "Basic <payload>", where "payload" is a base64 encoded string of "username:password".
 *
 * "btoa" is a JavaScript function that can be used to encode the user and password value in base64 but it is recommended to directly use the Base64 value.
 *
 *  For example Base64 encoded value of "neo4j:password" is "bmVvNGo6cGFzc3dvcmQ="
 */
//popoto.rest.AUTHORIZATION = "Basic " + btoa("neo4j:password");

/**
 * Define the Label provider you need for your application.
 * This configuration is mandatory and should contain at least all the labels you could find in your graph model.
 *
 * In this version only nodes with a label are supported.
 *
 * By default If no attributes are specified Neo4j internal ID will be used.
 * These label provider configuration can be used to customize the node display in the graph.
 * See www.popotojs.com or example for more details on available configuration options.
 */
popoto.provider.nodeProviders = {
    "Person": {
        "returnAttributes": ["name"],
        "constraintAttribute": "name"
//        "getDisplayType": function (node) {
////                        console.log("checking display type for node> " + JSON.stringify(node));
//            if (node.type === popoto.graph.node.NodeTypes.VALUE && node.attributes && node.attributes.imgPath && node.attributes.imgPath.length) {
//                return popoto.provider.NodeDisplayTypes.SVG;
//            } else if (node.value && node.value.attributes.imgPath && node.value.attributes.imgPath.length) {
//                return popoto.provider.NodeDisplayTypes.SVG;
//            } else
//                return popoto.provider.NodeDisplayTypes.TEXT;
//
//
//        },
//        "getSVGPaths": function (node) {
//            var path = [];
//            if (node.type === popoto.graph.node.NodeTypes.VALUE && node.attributes && node.attributes.imgPath && node.attributes.imgPath.length) {
//                console.log("value type");
//                path.push({
//                    "d": node.attributes.imgPath,
//                    "class": "region-highlight"
//                });
//            } else {
//                if (node.value !== undefined && node.value.attributes && node.value.attributes.imgPath && node.value.attributes.imgPath.length) {
//                    console.log("different type with valu " + JSON.stringify(node.value));
//                    path.push({
//                        "d": node.value.attributes.imgPath,
//                        "class": "region-highlight"
//                    });
//                }
////                            else {
////                                if (node.type === popoto.graph.node.NodeTypes.ROOT) {
////                                    return "movies/movie_blue.svg";
////                                } else {
////                                    if (node.count == 0) {
////                                        return "movies/movie_disabled.svg";
////                                    } else {
////                                        return "movies/movie_green.svg";
////                                    }
////                                }
////                            }
//                return path;
//            }
//        }
    },
    "Job": {
        "returnAttributes": ["title"],
        "constraintAttribute": "title"
    }


};
/**
 * Here a listener is used to retrieve the total results count and update the page accordingly.
 * This listener will be called on every graph modification.
 */
popoto.result.onTotalResultCount(function (count) {
    document.getElementById("result-total-count").innerHTML = "(" + count + ")";
});

/**
 * The number of results returned can be changed with the following parameter.
 * Default value is 100.
 *
 * Note that in this current version no pagination mechanism is available in displayed results
 */
//popoto.query.RESULTS_PAGE_SIZE = 100;


/**
 * For this version, popoto.js has been generated with debug traces you can activate with the following properties:
 * The value can be one in DEBUG, INFO, WARN, ERROR, NONE.
 *
 * With INFO level all the executed cypher query can be seen in the navigator console.
 * Default is NONE
 */
popoto.logger.LEVEL = popoto.logger.LogLevels.INFO;

/**
 * Start popoto.js generation.
 * The function requires the label to use as root element in the graph.
 */
popoto.start("Job");