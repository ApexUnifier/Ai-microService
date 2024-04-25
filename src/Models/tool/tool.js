const tool = [
    {
      type: "function",
      function: {
        name: "get_current_weather",
        description: "Get the current weather in a given location",
        parameters: {
          type: "object",
          properties: {
            location: {
              type: "string",
              description: "The city and state, e.g. San Francisco, CA",
            },
            unit: { type: "string", enum: ["celsius", "fahrenheit"] },
          },
          required: ["location"],
        },
      },
    },
    {
      type: "function",
      function :{
        name:"get_all_vacancies",
        description:"get all vacancies available in the server.",
        
      }
    },
    {
      type:"function",
      function:{
        name:"filter_user_by_rating",
        description:"returns the users who has rating greater than given input",
        parameters:{
          type: "object",
          properties:{
            ratingScore:{
              type:"number",
              description:"rating score eg. 0.5,0.8,1"
            }
          },
          required:["ratingScore"],
          
        },
      },
    },
    {
      type:"function",
      function:{
        name:"update_user",
        description:"updates the existing user's data",
        parameters:{
          type:"object",
          properties:{
            userId:{
              type:"string",
              description:"userId of the user",
            },
            userData:{
              type:"object",
              properties:{
                name:{
                  type:"string",
                  descrition:"name of the user to be updated"
                },
              },
            },
          },
          
        },
      },
    },
  ];

export default tool;