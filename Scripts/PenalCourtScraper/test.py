import csv
import re
import json
# from googletrans import Translator
# translator = Translator()
data = []

# with open('pakistanConstitution.csv', 'r+') as file:
#     text = re.sub(r'[^\x00-\x7F]+', '', file.read())
#     with open('pakistanConstitution_cleaned.csv', 'w') as file:
#         file.write(text)
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
        # description_translated = translator.translate(description, dest='ur')
        # print(description_translated.text)
        # data.append([chapter, topic, section, description])
        # data in dict format
        data.append({'chapter': chapter ,'article': section, 'description': description})

# write data to csv file
# with open('penal_court_translated.csv', 'w', newline='', encoding="utf-8") as file:
#     writer = csv.writer(file)
#     writer.writerows(data)

# save data in json file
with open("data_ur.json", "w") as outfile:
    # Write the dictionary to the file in JSON format
    json.dump(data, outfile)