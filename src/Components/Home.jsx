import AllBooks from "./AllBooks";
import BlogList from "./BlogList";
import ListByCategory from "./ListByCategory";

const Home = () => {
    return (
        <div>
            <BlogList />
        <AllBooks />
        <ListByCategory category="HumayunAhmed" />
        <ListByCategory category="Thriller" />


        </div> 
        
     );
}
 
export default Home;