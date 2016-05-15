#!/usr/bin/env python
"""
This is file with helpers - here we get and transform data
"""

from neo4jrestclient.client import GraphDatabase, Node

__author__ = "Kamila Przychodzen"

gdb = GraphDatabase("http://localhost:7474/db/data/", username="neo4j", password="test")


def _serialize_person(p):
    return {
        "name": p["name"],
        "willingToRelocate": p["willingToRelocate"],
        "city": p["city"]
    }


def get_user_by_name(user_name):
    """
    get_user_by_name("Deb")
    :param user_name:
    :return: json
    """
    query = "MATCH (p:Person) WHERE p.name={name} RETURN p"
    res = gdb.query(q=query, params={"name": user_name}, returns=Node)

    for p in res[0]:
        return _serialize_person(p)


def get_user_skills_with_level(user_name):
    """
    get_user_skills_with_level("Deb")
    :param user_name:
    :return: json
    """
    get_users_and_skills_query = \
        "MATCH (p:Person) -[r:KNOWS]- (s:Skill) WITH p,r.level as level, s.name as s  RETURN level, s"

    res = gdb.query(q=get_users_and_skills_query, params={"name": user_name}, returns=(int, unicode))
    skills_transformation = []

    for level, s in res:
        skills_transformation.append({"skill": s, "level": level})

    return skills_transformation


def get_user_jobs_with_skills_info(user_name):
    """
    get_user_jobs_with_skills_info("Deb")
    :param user_name:
    :return: json
    """
    query = "MATCH (cust:Person {name:{name}})-[:KNOWS]->(custskill:Skill)<-[:REQUIRES]-(job:Job) " \
            "WITH cust, custskill, job " \
            "MATCH (job)-[:REQUIRES]->(skill:Skill) " \
            "WITH   cust, job, COLLECT(DISTINCT custskill.name) AS custskills, " \
            "COLLECT(DISTINCT skill.name) AS jobskills " \
            "RETURN cust, job, custskills, jobskills, " \
            "FILTER(skill IN jobskills WHERE skill IN custskills) AS matchingskills, " \
            "FILTER(skill IN jobskills WHERE NOT skill IN custskills) AS missingskills"

    res = gdb.query(q=query, params={"name": user_name}, returns=(Node, Node, list, list, list, list))
    output = []

    for cust, job, custskills, jobskills, matchingskills, missingskills in res:
        output.append({
            "person": _serialize_person(cust),
            "job": job["title"],
            "personSkills": custskills,
            "jobRequiredSkills": jobskills,
            "matchingSkills": matchingskills,
            "missingSkills": missingskills
        })

    return output
