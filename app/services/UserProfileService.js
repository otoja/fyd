/* 
    Author     : Kamila Przychodzen <kamila.przychodzen@gmail.com>
*/

'use strict';
fyd.service('UserProfileService', function ($q, $http, NEO4J_URL, TransformNoeResponse) {
    return {
        updateUserSkill: function (user, skill) {
            var deferred = $q.defer(),
                    query = '{"statements":[{"statement":"MATCH (person_deb:`Person` {`name`:\\"' + user.name + '\\"}), (skill_systemtesting:`Skill` {`name`:\\"' + skill.label + '\\"}) CREATE (person_deb)-[:`KNOWS` {level:' + skill.level + '}]->(skill_systemtesting)"}]}';
            $http(
                    {
                        method: 'POST',
                        url: NEO4J_URL,
                        data: query,
                        transformResponse: function (data, headersGetter) {
                            return TransformNoeResponse.proceed(data);
                        }
                    }
            ).success(function (response) {
                deferred.resolve(response);
            });
            return deferred.promise;
        },
        getUserSkills: function (user) {
            //get given user skills and skill levels
            var deferred = $q.defer(),
            
            query = '{"statements":[{"statement":"MATCH (p:Person {name: \''+ user.name +'\'})-[k:KNOWS]->(s:Skill) RETURN COLLECT([k.level, s.name, ID(s)]) AS skills"}]}';
            $http(
                    {
                        method: 'POST',
                        url: NEO4J_URL,
                        data: query,
                        transformResponse: function (data, headersGetter) {
                            return TransformNoeResponse.proceed(data);
                        }

                    }
            ).success(function (response) {
                var skills =[], assigned=response[0].skills;
                for (var i in assigned){
                skills.push({"level" :assigned[i][0],"label":assigned[i][1],"id":assigned[i][2]});
                }
                
                deferred.resolve(skills);
            });
            return deferred.promise;
        },
        removeSkill:function(){
            //MATCH (s:Skill) WHERE ID(s) = 451 DETACH DELETE s
        }
        
        
    };
});