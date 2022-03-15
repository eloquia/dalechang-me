#!/usr/local/bin/python3

# - - - - - - - - - - - - - - - - - -
# Script that provides an interactive
# experience for creating and adding
# tasks to the website JIRA board
# - - - - - - - - - - - - - - - - - -

TASK_TEMPLATE_LOCATION = "./data/work-data.template.json"
PROJECT_DATA_LOCATION = "./data/project-data.json"
AUTOMATICALLY_GENERATED_DATA = ["id", "dateCreated", "timestamp"]


def generate_task_id(project_abbreviation):
    """
    This function searches existing tasks for the provided
    project and looks for the latest taskId. After finding
    the latest taskId, increment it by one and return the
    value.
    """
    # TODO: Figure out Python code for traversing through a folder and looking through its files
    raise Exception("Not yet implemented")

def generate_uuid():
    """
    Returns a unique ID as a string
    """
    # TODO: Learn Python library for generating UUIDs
    raise Exception("Not yet implemented")

def prompt_value(property_key):
    """
    Atomic function which prompts the user with a question
    """
    # TODO: Figure out how to implement blocking CLI
    raise Exception("Not yet implemented")
