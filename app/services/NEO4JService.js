/* 
 Author     : Kamila Przychodzen <kamila.przychodzen@gmail.com>
 */

'use strict';
fyd.service('NEO4JService', function ($q, $http, NEO4J_URL, TransformNoeResponse) {
    var
            _mergeCompany = function (companyObj) {
                //MERGE (company_456:Company {name:'ConcoPhillips',...})
                var company = " MERGE (c:Company ";
                company = company.concat("{company:\'").concat(escapeJson(companyObj.company)).concat("\',");
                company = company.concat("contactPerson:\'").concat(escapeJson(companyObj.contactPerson)).concat("\',");
                company = company.concat("address:\'").concat(escapeJson(companyObj.address)).concat("\',");
                company = company.concat("tel:\'").concat(escapeJson(companyObj.tel)).concat("\'})");
                return company;
            },
            _mergeJob = function (jobObj) {
//           (j:Job {title:'Senior Software Engineer', description:'Our developers...'})

                var job = "".concat("(j:Job ");
                job = job.concat("{location:\'").concat(escapeJson(jobObj.location)).concat("\',");
                job = job.concat("duties:\'").concat(escapeJson(jobObj.duties)).concat("\',");
                job = job.concat("description:\'").concat(escapeJson(jobObj.description)).concat("\',");
                job = job.concat("expireDate:\'").concat(escapeJson(jobObj.expireDate)).concat("\',");
                job = job.concat("hits:\'").concat(jobObj.hits ? jobObj.hits : 0).concat("\',");
                job = job.concat("title:\'").concat(escapeJson(jobObj.title)).concat("\'})");
                return job;
            },
            _mergeSkill = function (skill, job) {
//            MATCH (j:Job {title:'Senior Software Engineer'}) MERGE (j)-[:REQUIRES]->(s:Skill {name:'C'})
                return "".concat("MATCH (j:Job {title:'").concat(job.title).concat("'}) MERGE (j)-[:REQUIRES]->(s:Skill {name:'").concat(skill.label).concat("\'})");
            },
            _mergeUser = function (user, idx) {
                //MERGE (jon:Person {name:'Jon', county:'Rogaland', relocate:true})
                var query = "MERGE (p" + idx + ":Person {";
                query = query.concat("id:'").concat(idx).concat("',");
                query = query.concat("name:'").concat(escapeJson(user.name)).concat("',");
                query = query.concat("gender:'").concat(escapeJson(user.gender)).concat("',");
                query = query.concat("email:'").concat(escapeJson(user.email)).concat("',");
                query = query.concat("phone:'").concat(escapeJson(user.phone)).concat("',");
                query = query.concat("address:'").concat(escapeJson(user.address)).concat("',");
                query = query.concat("city:'").concat(escapeJson(user.city)).concat("',");
                query = query.concat("about:'").concat(escapeJson(user.about)).concat("',");
                query = query.concat("registered:'").concat(escapeJson(user.registered)).concat("',");
                query = query.concat("latitude:'").concat(escapeJson(user.latitude)).concat("',");
                query = query.concat("longitude:'").concat(escapeJson(user.longitude)).concat("',");
                query = query.concat("relocate:'").concat(escapeJson(user.relocate)).concat("',");
                query.concat("})");

                return query;
            },
            _sendData = function (statements) {
                var deferred = $q.defer();
                $http(
                        {
                            method: 'POST',
                            url: NEO4J_URL,
                            data: JSON.stringify(statements)
                        })
                        .success(function (response) {
                            deferred.resolve(response);
                        });
                return deferred.promise;
            };

    return{
        loadSkills: function () {
            var deferred = $q.defer(),
                    query = '{"statements":[{"statement":"MATCH (skill:`Skill`) RETURN DISTINCT skill.name AS label, count(DISTINCT skill.name) AS count, ID(skill) as id ORDER BY count DESC LIMIT 1000"}]}';
            $http(
                    {
                        method: 'POST',
                        url: NEO4J_URL,
                        data: query,
                        transformResponse: function (data, headersGetter) {
                            return TransformNoeResponse.proceed(data);
                        }
                    })
                    .success(function (response) {
                        deferred.resolve(response);
                    });
            return deferred.promise;
        },
        generateJobOffersFromJSON: function () {
            /**
             * Sample query to create company / job offer / skill 
             * 
             * MERGE (c:Company {name:'ConcoPhillips'})<-[:AT]-(j:Job {title:'Senior Software Engineer', description:'Our developers...'})
             MERGE (s1:Skill {name:'C'})
             MERGE (s2:Skill {name:'3D Computer Graphics OpenGL'})
             CREATE
             (j)-[:REQUIRES]->(s1),
             (j)-[:REQUIRES]->(s2)
             */

            this._getJobOffersJSON().then(function (jobOffers) {

                var finalStatement = {};
                var statements = [];
                var promisses = [];
                angular.forEach(jobOffers, function (jobOffer) {

                    var jobQuery = "";
                    jobQuery = jobQuery.concat(_mergeCompany(jobOffer.employer));
                    jobQuery = jobQuery.concat("<-[:AT]-");
                    jobQuery = jobQuery.concat(_mergeJob(jobOffer));
                    statements.push({"statement": jobQuery});
                    for (var i = 0; i < jobOffer.skills.length; i++) {
                        var jobQuery = "";
                        jobQuery = jobQuery.concat(_mergeSkill(jobOffer.skills[i], jobOffer));
                        statements.push({"statement": jobQuery});
                    }
                    ;
                    finalStatement = {};
                    finalStatement = {"statements": statements};
                    promisses.push(_sendData(finalStatement));
                    statements = [];
                });
                $q.all(promisses).then(function (response) {
                    console.log("done");
                });
            });
        },
        generateUeser: function () {

            this._getUsersFromJSON().then(function (users) {
                var finalStatement = {};
                var statements = [];
                for (var i = 0; i < users.length; i++) {
                    var query = _mergeUser(users[i], i);
                    statements.push({"statement": query});
                }

                finalStatement = {};
                finalStatement = {"statements": statements};
                _sendData(finalStatement).then(function (response) {
                    console.log("users loaded");
                });
            });

        },
        _getJobOffersJSON: function () {
            var deferred = $q.defer();
            $http({
                method: "GET",
                url: './data/jobs_data.json'
            }).success(function (response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        },
        _getUsersFromJSON: function () {
            var deferred = $q.defer();
            $http({
                method: "GET",
                url: './data/users.json'
            }).success(function (response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        }
    };
});