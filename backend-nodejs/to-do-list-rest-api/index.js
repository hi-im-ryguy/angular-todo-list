const AWS = require('aws-sdk');

const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context, callback) => {
    let body;
    let statusCode = 200;
    const responseHeaders = {
        // "Access-Control-Allow-Headers" : "Content-Type",
        // "Access-Control-Allow-Origin": "https://www.example.com",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT",
        // 'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    };
    
    try {
        switch (event.httpMethod) {
    //         case 'DELETE':
    //             body = await dynamo.delete(JSON.parse(event.body)).promise();
    //             break;
            case 'GET':
                // event.queryStringParameters.TableName
                
                // if (event.path == "/get-to-do-list") { body = event.queryStringParameters.TableName }
                if (event.path == "/get-to-do-list") {
                    let id = event.queryStringParameters.id;
                    body = await getToDoListByID(id);
                    // body = event;
                }
                // body = await dynamo.scan({ TableName: "To_Do_Lists" }).promise();
                break;
            // case 'POST':
            //     break;
            case 'PUT':
                if (event.path == "/add-new-to-do") {
                    body = await addNewToDo(JSON.parse(event.body));
                }
                if (event.path == "/update-to-do") {
                    // body = JSON.parse(event.body);
                    body = await updateToDo(JSON.parse(event.body));
                    // body = await dynamo.update(JSON.parse(event.body)).promise();
                }
                break;
    //         default:
    //             throw new Error(`Unsupported method "${event.httpMethod}"`);
        }
    } catch (err) {
        statusCode = '400';
        body = err.message;
    } finally {
        body = JSON.stringify(body);
    }
    
    
    // TODO implement
    const response = {
        statusCode: 200,
        headers: responseHeaders,
        // body: JSON.stringify(event)
        body: body,
    };
    return response;
};

function getToDoListByID(id) {
    const params = {
        TableName: 'To_Do_Lists',
        // Limit: 1,
        FilterExpression: 'id = :id',
        ExpressionAttributeValues: {
          ':id': Number(id)
        }
    };
    return dynamo.scan(params).promise();
}

function updateToDo(toDo) {
    const params = {
        TableName: 'To_Do_Lists',
        Key: {
            "id": toDo.userId
        },
        UpdateExpression: "set #to_do_list.#id.#to_do = :to_do, #to_do_list.#id.#is_completed=:is_completed",
        ExpressionAttributeValues:{
            ":to_do": toDo.toDo.to_do,
            ":is_completed": toDo.toDo.is_completed
        },
        ExpressionAttributeNames:{
            '#to_do_list': 'to_do_list',
            '#id': String(toDo.toDo.to_do_id),
            '#to_do': 'to_do',
            '#is_completed': 'is_completed'
        }
    }
    return dynamo.update(params).promise();
}

function addNewToDo(body) {
    const params = {
        TableName: 'To_Do_Lists',
        Key: {
            "id": body.id
        },
        UpdateExpression: "set #to_do_list.#counter = :newToDo ADD #c :c",
        ExpressionAttributeValues: {
            ':newToDo': {
                'to_do': 'New Task',
                'is_completed': false
            },
            ":c": 1
        },
        ExpressionAttributeNames:{
            '#to_do_list': 'to_do_list',
            "#c": "to_do_counter",
            '#counter': String(body.to_do_counter)
        }
    }
    // return body
    return dynamo.update(params).promise();
}
