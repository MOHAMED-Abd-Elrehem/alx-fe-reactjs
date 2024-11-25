import { useQuery } from "react-query";

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const PostsComponent = () => {
  const { data, error, isloading, refetch } = useQuery("fetchData", fetchData);
  if (error) return <div>Error Loading data</div>;
  if (isloading) return <div>isloading...</div>;
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