import csv
import re
import json
from googletrans import Translator
translator = Translator()
data = []


with open('pakistanConstitution_cleaned.csv', 'r+', encoding="utf-8") as file:
    reader = csv.reader(file)
    for row in reader:
        print(len(row))
        chapter = re.sub('\s+', ' ', row[0]).strip()
        topic = re.sub('\s+', ' ', row[1]).strip()  
        section = re.sub('\s+', ' ', row[2]).strip()
        article_no = re.sub('\s+', ' ', row[3]).strip()
        article_title = re.sub('\s+', ' ', row[4]).strip()
        description = re.sub('\s+', ' ', row[5]).strip() + f' ( Reference : [ part : {chapter} topic : {topic} article_title : {article_title} article_no : {article_no} ])'
        print(row)
        #translate to urdu
        description_translated = translator.translate(description, dest='ur')
        # print(description_translated.text)
        # data.append([chapter, topic, section, description])
        # data in dict format
        data.append({'chapter': chapter ,'article': section, 'description': description_translated.text})
