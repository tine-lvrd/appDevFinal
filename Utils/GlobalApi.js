import { gql, request } from 'graphql-request'

const getCourseList=asyc()=>{
    const query=gql'
    query MyQuery {
        courseLists(first: 50, orderBy: createdAt_DESC) {
            author
            description
            demoUrl
            free
            id
            name
            slug
            sourceCode
            tag
            youtubeUrl
    banner {
                url
            }
    chapter {
      ... on Chapter {
    id
    name
        video {
        url
    }
}
    }
  }
}
    '
    const result=await request(MASTER_URL,query);
    return result;
}

export default{
    getCourseList
}