import requests
from bs4 import BeautifulSoup
import json
import csv
# baseUrl = "https://www.pakistani.org/pakistan/legislation/1860/actXLVof1860.html"
# repsonse = requests.get(baseUrl)
# with open('index.html', 'w+',encoding='utf-8') as htmlFile:
#     htmlFile.write(repsonse.text)

text = open('index.html', 'r', encoding='utf-8').read()

soup = BeautifulSoup(text, "html.parser")

# for x in soup.find_all("table"):
#     print(x.next_sibling)


current_chapter = ''
current_topic = ''
data = {}

# next element
for element in soup.find('h2').next_siblings:
    if element.name is None:
        continue
    if element.name == 'div':
        try:
            current_chapter = element.find('h4').text.replace('\n','').replace('\"', '')
            current_topic = element.find_all('h4')[1].text.replace('\n','').replace('\"', '')
            
        except:
            continue

    if element.name == 'table':
        try:

            tbody = element.children
            for tr in tbody:
                if tr.name == 'tr':  # Make sure tr is a Tag object
                    tds = tr.find_all('td')
                    if len(tds) >= 2:
                        data[tds[0].text.replace('\n','').replace('\"', '')] = [current_chapter, current_topic, tds[0].text.replace('\n','').replace('\"', ''), tds[1].text.replace('\n','').replace('\"', '')]
                        # data.append({
                        #     'chapter': current_chapter.replace('\n','').replace('\"', ''),
                        #     'topic': current_topic.replace('\n','').replace('\"', ''),
                        #     'section': tds[0].text.replace('\n','').replace('\"', ''),
                        #     'text': tds[1].text.replace('\n','').replace('\"', '')
                        # })
                        # data.append([current_chapter, current_topic, tds[0].text.replace('\n','').replace('\"', ''), tds[1].text.replace('\n','').replace('\"', '')])
        except Exception as e:
            print(e)
            pass

# with open("data.json", "w") as outfile:
#     # Write the dictionary to the file in JSON format
#     json.dump(data, outfile)

with open('data.txt', 'w+', encoding='utf-8') as f:
    f.write(str(data))
# with open('data.csv', 'w', newline='', encoding='utf-8') as file:
#     writer = csv.writer(file)
#     writer.writerow(["Chapter", "Topic", "Section", "Text"])
#     writer.writerows(data)