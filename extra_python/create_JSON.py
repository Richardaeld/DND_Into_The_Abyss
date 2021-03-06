import os
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
import datetime
from flask import (
    Flask, flash, render_template,
    redirect, request, session, url_for)
if os.path.exists("env.py"):
    import env
import random
    #mongoJSON.write(str(random.randrange(1, max_step + 1)))
JSONdata = open('mongo_recipe_entery.js', 'r')

app = Flask(__name__)


app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")


mongo = PyMongo(app)

if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)


# Create Json File
iteration = 1
start_iteration = 0
stop_iteration = 0
total_needed = 10
total_needed = 1
#max_step = 100
JSON = {}
with open('JSON_entry.py', 'w') as mongoJSON:
    for entry in range(0, total_needed):
        JSON_content = JSONdata.readlines()
        for content in JSON_content:
            # Find start of section
            if content.find("{") != -1:
                start_iteration = iteration
            # find end of section
            elif content.find("}") != -1:
                end_iteration = iteration

                # find length of section
                content_line_total = end_iteration - start_iteration
                select_line = random.randrange(1, content_line_total)
                select_line = start_iteration + select_line
                # setsKey
                prep = (JSON_content[start_iteration-1])[6: -5]
                print(content_line_total, select_line, start_iteration, end_iteration )
                # iterate through section
                for line in range(start_iteration, end_iteration):

                    if line == select_line:
                        # sets value
                        remove_start = JSON_content[line].find(":")
                        # creates dict
                        JSON += [str(prep), ':', str((JSON_content[line].replace("\n", "").replace('"', "").replace(",", ""))[remove_start + 2:])]

            iteration += 1
        for line in JSON:
            print(line)
        mongoJSON.write(str(JSON))
        #mongo.db.test.insert({JSON})


#JSONdata.close()
#mongoJSON.close()

