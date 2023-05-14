// homepage component for delta model
import TriangleGraph from './TriangleGraph';
import "./styles/HomePage.css";
 

const HomePage = () => {

    return (
        <>
        <div className="home-page">
            <div className="home-content">
                <div className="text-content">
                    <h1> The Delta Model </h1> 
                    <p> The Design Your Delta method is grounded in the Delta Model, a progressive and agile competency model for the 21st-century legal professional. The Delta Model consists of three competency areas foundational to the success of today’s legal professional: The Practice, The People, and The Process.</p>
                </div>
                <TriangleGraph/>
            </div>
            
        </div>
            
        </>
    )

};

export default HomePage;