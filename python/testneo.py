#!/usr/bin/env python
"""
Test REST API for Neo4J

This file contains 3 declared routes for a REST API. For now only fallowing information can be retrived:
- get user from Neo4J by name
- get user' skills with expertise level
- get user' connected jobs with information about missing, fulfilled skills
"""

from flask import Flask, Response, request
import json
import controller

__author__ = "Kamila Przychodzen"

app = Flask(__name__)
app.debug = True


@app.route("/person")
def get_person():
    user_name = request.args.get('user')
    return Response(json.dumps(controller.get_user_by_name(user_name)), mimetype="application/json")


@app.route("/personskills")
def get_person_with_skills():
    user_name = request.args.get('user')
    return Response(json.dumps(controller.get_user_skills_with_level(user_name)), mimetype="application/json")


@app.route("/personjobs")
def get_person_with_jobs():
    user_name = request.args.get('user')
    return Response(json.dumps(controller.get_user_jobs_with_skills_info(user_name)), mimetype="application/json")


if __name__ == '__main__':
    app.run(port=8080)
