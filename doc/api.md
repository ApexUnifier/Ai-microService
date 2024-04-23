# Test Route
- The Route for chatting with for now is

`/api/chat/Openai`

- method : `post`
```
{
    "message":"who has greater temperature tokyo or paris"
}
 ```
- expected response
```
{
    "role": "assistant",
    "content": "Paris has a greater temperature than Tokyo. Paris currently has a temperature of 22 degrees Celsius, while Tokyo has a temperature of 10 degrees Celsius."
}

```