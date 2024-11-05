import {ApolloServer,gql} from "apollo-server";
import{ApolloServerPluginLandingPageGraphQLPlayground} from "apollo-server-core";

const data=[
    {
      "name": "Harry Potter",
      "city": "London"
    },
    {
      "name": "Don Quixote",
      "city": "Madrid"
    },
    {
      "name": "Joan of Arc",
      "city": "Paris"
    },
    {
      "name": "Rosa Park",
      "city": "Alabama"
    }
  ]

const typeDefs=gql`
type Query{
greet:String,
PersonalData:[info]
newAddedData:[newData]
}

type newData{
name:String
city:String
}

type info{
name:String
age:ID
email:String
}
`

const resolvers={
    Query:{
        greet:()=>{
            return "good morning";
        },
        PersonalData:()=>{
            return [{
                name: "krishnakant thakur",
                age:22,
                email:"kissu6440@gmail.com"
            } ]
        },
        newAddedData:()=>{
            return data;
        }
    }
}

const server= new ApolloServer({
    typeDefs,
    resolvers,
    plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
})

server.listen().then(({url})=>{
    console.log(`server is running on : ${url}`)
})