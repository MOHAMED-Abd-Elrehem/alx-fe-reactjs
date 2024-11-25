import { useQuery } from "react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const PostsComponent = () => {
  const { data, isError, isLoading, refetch } = useQuery("fetchPosts", fetchPosts);
  cacheTime: 1000;
  staleTime: Infinity;
  refetchOnWindowFocus: false; 
  keepPreviousData: true;
  if (isError) return <div>error Loading data</div>;
  if (isLoading) return <div>isloading...</div>;
  if (!data || data.length === 0) return <div> No data availabele.</div>

  return (
    <div>
      <button onClick={refetch}>Refetch</button>
      {data.map((item) => (
        <div key={item.id}> {item.title}</div>
      ))}
    </div>
  );
};
export default PostsComponent;