import { gql, request } from 'graphql-request'


const MASTER_URL="https://us-west-2.cdn.hygraph.com/content/cm5tq2b8j01q308uobn8rw66b/master";
const getCategory=async()=>{
    const query= gql`
    query GetCategory {
        categories {
            id
            name
            icon {
                url
            }
            slug
        }
    }
    `

    const result=await request(MASTER_URL,query)
    return result;
}

const getCourseList=async()=>{
    const query=gql`
    query MyQuery {
    courseLists(first: 40, orderBy: createdAt_DESC) {
    author
    description
    demoUrl
    free
    id
    name
    slug
    sourceCode
    tag
    youTubeUrl
    banner {
      url
    }
    chapter(first: 40) {
      ... on Chapter {
        id
        name
        video {
          url
        }
      }
    }
  }
}`

const result=await request(MASTER_URL,query)
return result;
}

export default{
    getCategory,
    getCourseList
}