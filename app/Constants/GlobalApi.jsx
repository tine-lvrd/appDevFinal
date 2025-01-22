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
    chapters(first: 30) {
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

const checkUserCourseEnrollment=async(slug,email)=>{
    const query=gql`
      query MyQuery {
      userEnrollCourses(where: {courseId: "`+slug+`", userEmail: "`+email+`"}) {
      completedChapter {
      ... on CompletedChapter {
            id
            chapterId
        }
      }
        courseId
        id
      }
    }`

    const result=await request(MASTER_URL,query)
    return result;
}

// const markChapterCompleted=async(recordId,chapterId)=>{
//   const query=gql`
//   mutation MyMutation {
//   updateUserEnrollCourse(
//     data: {completedChapter: {create: {CompletedChapter: {data: {chapterId: ""}}}}}
//     where: {id: ""}
//   ) {
//     id
//   }
//   publishManyUserEnrollCourses {
//     count
//   }
// }`

//     const result=await request(MASTER_URL,query)
//     return result;
// }

export default{
    getCategory,
    getCourseList,
    checkUserCourseEnrollment,
    //markChapterCompleted
}