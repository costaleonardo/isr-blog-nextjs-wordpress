
export default function Posts( { posts } ) {

  console.log( posts ); 

  return (
    <div className="">
      <h1> Lists of Posts </h1>
      
      {posts.map(({ node }) => (
          <p> { node.title } </p>
        ))}
    </div>
  )
}