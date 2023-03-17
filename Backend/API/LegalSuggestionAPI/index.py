from flask import Flask, request
from flask_cors import cross_origin, CORS
from SearchClient import SearchClient

app = Flask(__name__)

cors = CORS(app, resource={
    r"/*":{
        "origins":"*"
    }
})

@app.route('/', methods=['POST'])
def home():
    query = request.form.get('q')

    print(query)
    print(type(query))
    return getQueryAnswer(query)




def getQueryAnswer(query):
    
    client = SearchClient(query)

    answer = client.answerQuery()
    

    return answer


if __name__ == '__main__':
    app.run(debug=True)