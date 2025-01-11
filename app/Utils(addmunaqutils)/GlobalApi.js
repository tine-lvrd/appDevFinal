import { gql, request } from 'graphql-request'

const MASTER_URL=;
const getCategory=async()=>{
    const query=gql`
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

    const result=await request(MASTER_URL,query);
    return result;
}

export default {
    getCategory
}